/* eslint-disable comma-dangle */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */
import Search from '@/components/search/Search';

function App(props: any) {
  const { data } = props;
  const { records } = data.result;
  // console.log(records);
  return <Search records={records} />;
}

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
