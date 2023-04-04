import Population from '@/components/population/Population';
import Households from '@/components/households/Households';
import Search from '@/components/search/Search';

const App = (props: any) => {
  const data = props.data;
  const records = data.result.records;
  // console.log(records);
  return (
    <>
      <h2>人口數、戶數按戶別及性別統計</h2>
      <Search records={records} />
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
