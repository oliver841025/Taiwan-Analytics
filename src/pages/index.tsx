import React from 'react';
import { Select, Space, Button } from 'antd';

const handleChange = (value: string) => {
  console.log(`selected ${value}`);
};

const App: React.FC = () => (
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
        <legend>縣市：</legend>
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
        <legend>區</legend>
        <Select
          bordered={false}
          defaultValue="lucy"
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
      <Button type="primary">SUBMIT</Button>
    </Space>
  </>
);

export default App;
