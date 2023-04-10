/* eslint-disable comma-dangle */
/* eslint-disable no-plusplus */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */
import Households from '@/components/households/Households';
import Population from '@/components/population/Population';
import { useRouter } from 'next/router';
import { useCallback, useEffect, useState } from 'react';
import classes from '@/styles/global.module.scss';

function YearIndex(props) {
  const { data } = props;
  const records = data.responseData;
  const router = useRouter();

  const [targetData, setTargetData] = useState([]);
  const [householdOrdinaryMale, setHouseholdOrdinaryMale] = useState(0);
  const [householdOrdinaryFemale, setHouseholdOrdinaryFemale] = useState(0);
  const [householdSingleMale, setHouseholdSingleMale] = useState(0);
  const [householdSingleFemale, setHouseholdSingleFemale] = useState(0);
  const [householdOrdinaryTotal, setHouseholdOrdinaryTotal] = useState(0);
  const [householdSingleTotal, setHouseholdSingleTotal] = useState(0);

  useEffect(() => {
    const flag = router.query.slug[1] + router.query.slug[2];
    const result = records.filter((el) => el.site_id === flag);
    setTargetData(result);
  }, [router.query, records]);

  const getDetailTotal = useCallback(
    (flag) => {
      let total = 0;
      for (let i = 0; i < targetData.length; i++) {
        total += parseInt(targetData[i][flag], 10);
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
    setHouseholdOrdinaryTotal(getDetailTotal('household_ordinary_total'));
    setHouseholdSingleTotal(getDetailTotal('household_single_total'));
  }, [getDetailTotal]);

  return (
    <>
      <div className={classes.subtitle}>
        {`${router.query.slug[0]} ${router.query.slug[1]} ${router.query.slug[2]}`}
      </div>
      <Population
        householdOrdinaryMale={householdOrdinaryMale}
        householdOrdinaryFemale={householdOrdinaryFemale}
        householdSingleMale={householdSingleMale}
        householdSingleFemale={householdSingleFemale}
      />
      <Households
        householdOrdinaryTotal={householdOrdinaryTotal}
        householdSingleTotal={householdSingleTotal}
      />
    </>
  );
}

export async function getServerSideProps({ params }) {
  const year = params.slug[0];
  const res = await fetch(
    `https://www.ris.gov.tw/rs-opendata/api/v1/datastore/ODRP019/${year}`
  );
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
}

export default YearIndex;
