/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-filename-extension */
import Search from '@/components/search/Search';
import type { AppProps } from 'next/app';
import { useState } from 'react';
import classes from '../styles/global.module.scss';

export default function App({ Component, pageProps }: AppProps) {
  const [year, setYear] = useState('');
  const [city, setCity] = useState('');
  const [district, setDistrict] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div>
      <div className={classes.title}>人口數、戶數按戶別及性別統計</div>
      <Search
        year={year}
        setYear={setYear}
        city={city}
        setCity={setCity}
        district={district}
        setDistrict={setDistrict}
        setIsLoading={setIsLoading}
      />
      <Component
        {...pageProps}
        setIsLoading={setIsLoading}
        isLoading={isLoading}
      />
    </div>
  );
}
