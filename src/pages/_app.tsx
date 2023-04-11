/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-filename-extension */
import Search from '@/components/search/Search';
import type { AppProps } from 'next/app';
import { useState } from 'react';
import { Space, Spin } from 'antd';
import classes from '../styles/global.module.scss';

export default function App({ Component, pageProps }: AppProps) {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div>
      <div className={classes.title}>人口數、戶數按戶別及性別統計</div>
      <Search setIsLoading={setIsLoading} />
      {isLoading && (
        <Space
          size="middle"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Spin size="large" />
        </Space>
      )}
      <Component
        {...pageProps}
        setIsLoading={setIsLoading}
        isLoading={isLoading}
      />
    </div>
  );
}
