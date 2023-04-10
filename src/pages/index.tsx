/* eslint-disable comma-dangle */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */
import Search from '@/components/search/Search';
import { rawData } from '@/utils/rawData';
import { useRouter } from 'next/router';
import { useCallback, useEffect, useState } from 'react';

function App(props: any) {
  const { data } = props;
  const { records } = data.result;
  // const { records } = rawData.result;

  const [year, setYear] = useState('');
  const [city, setCity] = useState('');
  const [district, setDistrict] = useState(null);

  // useEffect(() => {
  //   const flag = router.query.slug[1] + router.query.slug[2];
  //   const result = records.filter((el) => el.site_id === flag);
  //   setTargetData(result);
  // }, [router.query, records]);

  return (
    <>
      <Search
        records={records}
        year={year}
        setYear={setYear}
        city={city}
        setCity={setCity}
        district={district}
        setDistrict={setDistrict}
      />
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch(
    'https://od.moi.gov.tw/api/v1/rest/datastore/301000000A-000082-053'
  );
  const data = await res.json();
  return {
    props: { data },
  };
}

export default App;
