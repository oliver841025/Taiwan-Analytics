/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */
import getOptions from '@/utils/getOptions';
import { Select, Space, Button } from 'antd';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import classes from './Search.module.scss';

function Search(props: any) {
  const { records } = props;
  const [year, setYear] = useState('111');
  const [city, setCity] = useState('');
  const [district, setDistrict] = useState(null);
  //   console.log(records);

  const router = useRouter();

  useEffect(() => {
    setYear(`${router.query.yearId}` as string);
  }, [router.query]);

  const cityOptions = getOptions().getCityOptions;
  const districtOptions = getOptions().getDistrictOptions;

  const handleYearChange = (value: string) => {
    // console.log(`selected ${value}`);
    setYear(value);
  };

  const handleCityChange = (value: string) => {
    // console.log(`selected ${value}`);
    setCity(value);
    setDistrict(null);
  };

  const handleDistrictChange = (value: string) => {
    // console.log(`selected ${value}`);
    setDistrict(value);
  };

  const handleSubmit = () => {
    router.push(`/${year}/${city}/${district}`);
    console.log('year:', year, 'city:', city, 'district:', district);
  };

  return (
    <>
      <Space
        wrap
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <fieldset style={{ borderRadius: '4px', padding: '0px' }}>
          <legend>年份</legend>
          <Select
            bordered={false}
            placeholder="年份"
            style={{
              width: 70,
              marginTop: '-15px',
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
        <fieldset style={{ borderRadius: '4px', padding: '0px' }}>
          <legend>縣 / 市</legend>
          <Select
            showSearch
            placeholder="請選擇縣 / 市"
            bordered={false}
            style={{
              width: 165,
              marginTop: '-15px',
            }}
            onChange={handleCityChange}
            options={cityOptions(records)}
            filterOption={(inputValue, option) =>
              option!.label.indexOf(inputValue) !== -1
            }
          />
        </fieldset>
        <fieldset
          style={{ borderRadius: '4px', padding: '0px' }}
          disabled={!city}
        >
          <legend>區</legend>
          <Select
            value={district}
            disabled={!city}
            showSearch
            placeholder="請先選擇縣 / 市"
            bordered={false}
            style={{
              width: 165,
              marginTop: '-15px',
            }}
            onChange={handleDistrictChange}
            options={districtOptions(records)}
            filterOption={(inputValue, option) =>
              option!.label.indexOf(inputValue) !== -1
            }
          />
        </fieldset>
        <button
          type="submit"
          className={classes.search_btn}
          onClick={handleSubmit}
        >
          SUBMIT
        </button>
      </Space>
      <section
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: '40px',
          marginBottom: '40px',
        }}
      >
        <div className={classes.search_result}>搜尋結果</div>
      </section>
    </>
  );
}

export default Search;
