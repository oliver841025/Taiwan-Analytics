/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-filename-extension */
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <h2>人口數、戶數按戶別及性別統計</h2>
      <Component {...pageProps} />
    </>
  );
}
