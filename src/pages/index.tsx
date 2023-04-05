import Population from '@/components/population/Population';
import Households from '@/components/households/Households';
import Search from '@/components/search/Search';
import { useState } from 'react';

const App = (props: any) => {
  const data = props.data;
  const records = data.result.records;
  const [year, setYear] = useState('111');
  const [city, setCity] = useState('');
  const [district, setDistrict] = useState('');
  // console.log(records);
  return (
    <>
      <h2>人口數、戶數按戶別及性別統計</h2>
      <Search
        records={records}
        year={year}
        setYear={setYear}
        city={city}
        setCity={setCity}
        district={district}
        setDistrict={setDistrict}
      />
      <Population />
      <Households />
    </>
  );
};

export async function getStaticProps() {
  const res = await fetch(
    'https://od.moi.gov.tw/api/v1/rest/datastore/301000000A-000082-053'
  );
  // console.log('res:', res);
  const data = await res.json();
  return {
    props: { data },
  };
}

export default App;
