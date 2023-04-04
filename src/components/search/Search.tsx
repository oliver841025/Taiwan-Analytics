import { Select, Space, Button } from 'antd';
import { useState } from 'react';
import classes from './Search.module.scss';

const Search = (props: any) => {
  const { records } = props;
  console.log(records);
  const [year, setYear] = useState('111');
  const [city, setCity] = useState('');
  const [district, setDistrict] = useState('');

  let yearOptions = new Set();
  records.forEach((item: any) => {
    !yearOptions.has(item.statistic_yyy)
      ? yearOptions.add(item.statistic_yyy)
      : false;
  });

  console.log(yearOptions);

  const handleYearChange = (value: string) => {
    // console.log(`selected ${value}`);
    setYear(value);
  };

  const handleCityChange = (value: string) => {
    // console.log(`selected ${value}`);
    setCity(value);
  };

  const handleDistrictChange = (value: string) => {
    // console.log(`selected ${value}`);
    setDistrict(value);
  };

  const handleSubmit = () => {
    console.log('year:', year, 'city:', city, 'district:', district);
  };

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
            onChange={handleYearChange}
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
            onChange={handleCityChange}
            options={[
              { value: '台北市', label: '台北市' },
              { value: '新北市', label: '新北市' },
              { value: '基隆', label: '基隆' },
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
            bordered={false}
            style={{
              width: 140,
              marginTop: '-10px',
              marginBottom: '-6px',
              marginLeft: '-10px',
              marginRight: '-10px',
            }}
            onChange={handleDistrictChange}
            options={[
              { value: 'taipei', label: '台北市' },
              { value: 'new taipei', label: '新北市' },
              { value: 'keelung', label: '基隆' },
              { value: 'hualien', label: 'hualien', disabled: true },
            ]}
            filterOption={(inputValue, option) =>
              option!.label.indexOf(inputValue) !== -1
            }
          />
        </fieldset>
        <Button type="primary" onClick={handleSubmit}>
          SUBMIT
        </Button>
      </Space>
      <section>
        <div className={classes.search_result}>搜尋結果</div>
      </section>
    </>
  );
};

export default Search;
