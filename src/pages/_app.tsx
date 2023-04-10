/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-filename-extension */
import Search from '@/components/search/Search';
import type { AppProps } from 'next/app';
import { useState } from 'react';
import classes from '../styles/global.module.scss';

export default function App({ Component, pageProps }: AppProps) {
  const { data } = pageProps;
  const records = data.responseData;

  const [year, setYear] = useState('');
  const [city, setCity] = useState('');
  const [district, setDistrict] = useState(null);

  return (
    <div>
      <div className={classes.title}>人口數、戶數按戶別及性別統計</div>
      <Search
        records={records}
        year={year}
        setYear={setYear}
        city={city}
        setCity={setCity}
        district={district}
        setDistrict={setDistrict}
      />
      <Component {...pageProps} />
    </div>
  );
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
