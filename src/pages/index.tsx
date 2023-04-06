import Search from '@/components/search/Search';

const App = (props: any) => {
  const data = props.data;
  const records = data.result.records;
  // console.log(records);
  return (
    <>
      <Search records={records} />
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
