/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-filename-extension */
import type { AppProps } from 'next/app';
import classes from '../styles/global.module.scss';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <h3 className={classes.wrapper}>人口數、戶數按戶別及性別統計</h3>
      <Component {...pageProps} />
    </div>
  );
}
