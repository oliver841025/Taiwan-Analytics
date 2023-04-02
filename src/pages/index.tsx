import React from 'react';
import { Select, Space, Button } from 'antd';
import Population from '@/components/population/population';
import Households from '@/components/households/households';

const handleChange = (value: string) => {
  console.log(`selected ${value}`);
};

const App = (props: any) => {
  const data = props.data;
  console.log(data);
  return (
    <>
      <h2>人口數、戶數按戶別及性別統計</h2>
      <Space wrap>
        <fieldset style={{ borderRadius: '6px' }}>
          <legend>年份</legend>
          <Select
            defaultValue="lucy"
            bordered={false}
            style={{
              width: 120,
              marginTop: '-10px',
              marginBottom: '-6px',
              marginLeft: '-10px',
              marginRight: '-10px',
            }}
            onChange={handleChange}
            options={[
              { value: 'jack', label: 'Jack' },
              { value: 'lucy', label: 'Lucy' },
              { value: 'Yiminghe', label: 'yiminghe' },
              { value: 'disabled', label: 'Disabled', disabled: true },
            ]}
          />
        </fieldset>
        <fieldset style={{ borderRadius: '6px' }}>
          <legend>縣 / 市</legend>
          <Select
            placeholder="請選擇縣 / 市"
            bordered={false}
            style={{
              width: 125,
              marginTop: '-10px',
              marginBottom: '-6px',
              marginLeft: '-10px',
              marginRight: '-10px',
            }}
            onChange={handleChange}
            options={[
              { value: 'jack', label: 'Jack' },
              { value: 'lucy', label: 'Lucy' },
              { value: 'Yiminghe', label: 'yiminghe' },
              { value: 'disabled', label: 'Disabled', disabled: true },
            ]}
          />
        </fieldset>
        <fieldset style={{ borderRadius: '6px' }}>
          <legend>區</legend>
          <Select
            placeholder="請先選擇縣 / 市"
            bordered={false}
            style={{
              width: 140,
              marginTop: '-10px',
              marginBottom: '-6px',
              marginLeft: '-10px',
              marginRight: '-10px',
            }}
            onChange={handleChange}
            options={[
              { value: 'jack', label: 'Jack' },
              { value: 'lucy', label: 'Lucy' },
              { value: 'Yiminghe', label: 'yiminghe' },
              { value: 'disabled', label: 'Disabled', disabled: true },
            ]}
          />
        </fieldset>
        <Button type="primary">SUBMIT</Button>
      </Space>
      <Population />
      <Households />
    </>
  );
};

export async function getServerSideProps() {
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
