/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */
import Households from '@/components/households/Households';
import Population from '@/components/population/Population';
import Search from '@/components/search/Search';
import { localRecords } from '@/utils/localRecords';
import { useRouter } from 'next/router';
import { useState } from 'react';

function App() {
  // const { data } = props;
  // const { records } = data.result;
  const router = useRouter();
  const [year, setYear] = useState('');
  const [city, setCity] = useState('');
  const [district, setDistrict] = useState(null);
  const [isSubmitClicked, setIsSubmitClicked] = useState(false);
  const [records, setRecords] = useState([]);

  // console.log(records);

  const getTargetData = (flag: string | number) => {
    let result = 0;
    localRecords.forEach((record) => {
      if (record.site_id === city + district) {
        result += parseInt(record[flag], 10);
      }
    });
    return result;
  };

  return (
    <>
      <Search
        records={records}
        setRecords={setRecords}
        year={year}
        setYear={setYear}
        city={city}
        setCity={setCity}
        district={district}
        setDistrict={setDistrict}
        setIsSubmitClicked={setIsSubmitClicked}
      />
      {isSubmitClicked && (
        <>
          {/* <div className={classes.subtitle}>
            {`${router.query.slug[0]} ${router.query.slug[1]} ${router.query.slug[2]}`}
          </div> */}

          <Population
            householdOrdinaryMale={getTargetData('household_ordinary_m')}
            householdOrdinaryFemale={getTargetData('household_ordinary_f')}
            householdSingleMale={getTargetData('household_single_m')}
            householdSingleFemale={getTargetData('household_single_f')}
          />
          <Households
            householdOrdinaryTotal={getTargetData('household_ordinary_total')}
            householdSingleTotal={getTargetData('household_single_total')}
          />
        </>
      )}
    </>
  );
}

// export async function getStaticProps() {
//   const res = await fetch(
//     'https://od.moi.gov.tw/api/v1/rest/datastore/301000000A-000082-053'
//   );
//   // console.log('res:', res);
//   const data = await res.json();
//   return {
//     props: { data },
//   };
// }

export default App;
