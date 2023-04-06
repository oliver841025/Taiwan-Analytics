import Households from '@/components/households/Households';
import Population from '@/components/population/Population';
import Search from '@/components/search/Search';
import getOptions from '@/utils/getOptions';
import { useRouter } from 'next/router';
import { useCallback } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const YearIndex = (props) => {
  const data = props.data;
  const records = data.result.records;
  const router = useRouter();
  const [targetData, setTargetData] = useState([]);
  const [householdOrdinaryMale, setHouseholdOrdinaryMale] = useState(0);
  const [householdOrdinaryFemale, setHouseholdOrdinaryFemale] = useState(0);
  const [householdSingleMale, setHouseholdSingleMale] = useState(0);
  const [householdSingleFemale, setHouseholdSingleFemale] = useState(0);

  useEffect(() => {
    const flag = router.query.slug[1] + router.query.slug[2];
    const result = records.filter((el) => {
      return el.site_id === flag;
    });
    setTargetData(result);
  }, [router.query, records]);

  const getDetailTotal = useCallback(
    (flag) => {
      let total = 0;
      for (let i = 0; i < targetData.length; i++) {
        total += parseInt(targetData[i][flag]);
      }
      return total;
    },
    [targetData]
  );

  useEffect(() => {
    setHouseholdOrdinaryMale(getDetailTotal('household_ordinary_m'));
    setHouseholdOrdinaryFemale(getDetailTotal('household_ordinary_f'));
    setHouseholdSingleMale(getDetailTotal('household_single_m'));
    setHouseholdSingleFemale(getDetailTotal('household_single_f'));
  }, [getDetailTotal]);

  return (
    <>
      <Search records={records} />
      <Population
        householdOrdinaryMale={householdOrdinaryMale}
        householdOrdinaryFemale={householdOrdinaryFemale}
        householdSingleMale={householdSingleMale}
        householdSingleFemale={householdSingleFemale}
      />
      <Households />
    </>
  );
};

export async function getStaticProps({ params }) {
  let flag = '053';
  const matchData = [
    { year: '111', value: '053' },
    { year: '110', value: '049' },
    { year: '109', value: '045' },
    { year: '108', value: '041' },
    { year: '107', value: '033' },
    { year: '106', value: '020' },
    { year: '105', value: '008' },
    { year: '104', value: '004' },
    { year: '103', value: '012' },
  ];
  for (let i = 0; i < matchData.length; i++) {
    if (params.slug[0] === matchData[i].year) {
      flag = matchData[i].value;
    }
  }
  const res = await fetch(
    `https://od.moi.gov.tw/api/v1/rest/datastore/301000000A-000082-${flag}`
  );
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
}

export async function getStaticPaths() {
  const res = await fetch(
    `https://od.moi.gov.tw/api/v1/rest/datastore/301000000A-000082-053`
  );
  const data = await res.json();
  const records = data.result.records;
  const cityOptions = getOptions().getCityOptions(records);
  const districtOptions = getOptions().getDistrictOptions(records);
  const years = ['111', '110', '109', '108', '107', '106', '105', '104', '103'];

  const result = [];
  for (let i = 0; i < years.length; i++) {
    for (let j = 0; j < cityOptions.length; j++) {
      for (let k = 0; k < districtOptions.length; k++) {
        result.push({
          year: years[i],
          city: cityOptions[j].value,
          district: districtOptions[k].value,
        });
      }
    }
  }

  const paths = result.map((eachResult) => ({
    params: {
      slug: [eachResult.year, eachResult.city, eachResult.district],
    },
  }));
  return { paths, fallback: false };
}

export default YearIndex;
