import { Select, Space, Button } from 'antd';
import classes from './Search.module.scss';

const handleChange = (value: string) => {
  console.log(`selected ${value}`);
};

const Search = () => {
  return (
    <>
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
      <section>
        <div className={classes.search_result}>搜尋結果</div>
      </section>
    </>
  );
};

export default Search;
