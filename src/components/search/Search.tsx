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
            defaultValue="111"
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
              { value: '111', label: '111' },
              { value: '110', label: '110' },
              { value: '109', label: '109' },
              { value: '108', label: '108' },
              { value: '107', label: '107' },
              { value: '106', label: '106' },
              { value: '105', label: '105' },
              { value: '104', label: '104' },
              { value: '103', label: '103' },
              //   { value: 'disabled', label: 'Disabled', disabled: true },
            ]}
          />
        </fieldset>
        <fieldset style={{ borderRadius: '6px' }}>
          <legend>縣 / 市</legend>
          <Select
            showSearch
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
              { value: 'taipei', label: '台北市' },
              { value: 'new taipei', label: '新北市' },
              { value: 'keelung', label: '基隆' },
              //   { value: 'hualien', label: 'hualien', disabled: true },
            ]}
            filterOption={(inputValue, option) =>
              option!.label.indexOf(inputValue) !== -1
            }
          />
        </fieldset>
        <fieldset style={{ borderRadius: '6px' }}>
          <legend>區</legend>
          <Select
            placeholder="請先選擇縣 / 市"
            mode="tags"
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
              { value: 'taipei', label: '台北市' },
              { value: 'new taipei', label: '新北市' },
              { value: 'keelung', label: '基隆' },
              //   { value: 'hualien', label: 'hualien', disabled: true },
            ]}
            filterOption={(inputValue, option) =>
              option!.value.toUpperCase().indexOf(inputValue.toUpperCase()) !==
              -1
            }
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
