import { Select, Space, Button } from 'antd';
import { useState } from 'react';
import classes from './Search.module.scss';

const Search = (props: any) => {
  const { records } = props;
  console.log(records);
  const [year, setYear] = useState('111');
  const [city, setCity] = useState('');
  const [district, setDistrict] = useState('');

  const getOptions = () => {
    let options = new Set();
    let result: any[] = [];

    const getCityOptions = (records: any) => {
      records.forEach((item: any) => {
        !options.has(item.site_id.substring(0, 3))
          ? options.add(item.site_id.substring(0, 3))
          : false;
      });
      const cityOptionsArr = Array.from(options);
      cityOptionsArr.shift();
      for (let i = 0; i < cityOptionsArr.length; i++) {
        result.push({ value: cityOptionsArr[i], label: cityOptionsArr[i] });
      }
      return result;
    };

    const getDistrictOptions = (records: any) => {
      records.forEach((item: any) => {
        !options.has(item.site_id.substring(3, 6))
          ? options.add(item.site_id.substring(3, 6))
          : false;
      });
      const districtOptionsArr = Array.from(options);
      districtOptionsArr.shift();
      for (let i = 0; i < districtOptionsArr.length; i++) {
        result.push({
          value: districtOptionsArr[i],
          label: districtOptionsArr[i],
        });
      }
      return result;
    };

    return { getCityOptions, getDistrictOptions };
  };
  const cityOptions = getOptions().getCityOptions;
  const districtOptions = getOptions().getDistrictOptions;

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
            options={cityOptions(records)}
            filterOption={(inputValue, option) =>
              option!.label.indexOf(inputValue) !== -1
            }
          />
        </fieldset>
        <fieldset style={{ borderRadius: '6px' }}>
          <legend>區</legend>
          <Select
            showSearch
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
            options={districtOptions(records)}
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
