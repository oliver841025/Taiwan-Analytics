/* eslint-disable comma-dangle */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */

function App(props: any) {
  return <></>;
}

export async function getStaticProps() {
  const res = await fetch(
    'https://www.ris.gov.tw/rs-opendata/api/v1/datastore/ODRP019/106'
  );
  const data = await res.json();
  return {
    props: { data },
  };
}

export default App;
