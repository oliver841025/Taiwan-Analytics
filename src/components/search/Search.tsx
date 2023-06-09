/* eslint-disable react/jsx-curly-newline */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-plusplus */
/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-expressions */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */
import options from '@/utils/options';
import { Select, Space } from 'antd';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import classes from './Search.module.scss';

function Search(props: any) {
  const { setIsLoading } = props;
  const router = useRouter();

  const [year, setYear] = useState('');
  const [city, setCity] = useState('');
  const [district, setDistrict] = useState(null);

  const cityOptions = options().getCityOptions;
  const districtOptions = options().getDistrictOptions;

  const handleYearChange = (value: string) => {
    setYear(value);
  };

  const handleCityChange = (value: string) => {
    setCity(value);
    setDistrict(null);
  };

  const handleDistrictChange = (value: any) => {
    setDistrict(value);
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setIsLoading(true);
    router.push(`/${year}/${city}/${district}`);
  };

  const [allRecords, setAllRecords] = useState([]);

  useEffect(() => {
    async function fetchAPI() {
      const res = await fetch(
        year
          ? `https://www.ris.gov.tw/rs-opendata/api/v1/datastore/ODRP019/${year}`
          : `https://www.ris.gov.tw/rs-opendata/api/v1/datastore/ODRP019/106`
      );
      const data = await res.json();
      setAllRecords(data.responseData);
    }

    fetchAPI();
  }, [year]);

  return (
    <>
      <Space wrap className={classes.space}>
        <fieldset
          style={{
            borderRadius: '4px',
            padding: '0px',
            border: '1.5px solid #B6B6B6',
          }}
        >
          <legend style={{ fontSize: '7px' }}>年份</legend>
          <Select
            bordered={false}
            placeholder="年份"
            style={{
              width: 70,
              marginTop: '-5px',
            }}
            onChange={handleYearChange}
            options={[
              { value: '111', label: '111' },
              { value: '110', label: '110' },
              { value: '109', label: '109' },
              { value: '108', label: '108' },
              { value: '107', label: '107' },
              { value: '106', label: '106' },
            ]}
          />
        </fieldset>
        <fieldset
          style={{
            borderRadius: '4px',
            padding: '0px',
            border: '1.5px solid #B6B6B6',
          }}
        >
          <legend style={{ fontSize: '7px' }}>縣 / 市</legend>
          <Select
            showSearch
            disabled={!year}
            placeholder={year ? '請選擇縣 / 市' : '請先選擇年份'}
            bordered={false}
            className={classes.city_and_district_select}
            onChange={handleCityChange}
            options={cityOptions(allRecords)}
            filterOption={(inputValue, option) =>
              option!.label.indexOf(inputValue) !== -1
            }
          />
        </fieldset>
        <fieldset
          style={{
            borderRadius: '4px',
            padding: '0px',
            border: '1.5px solid #B6B6B6',
          }}
          disabled={!city}
        >
          <legend style={{ fontSize: '7px' }}>區</legend>
          <Select
            value={district}
            disabled={!city}
            showSearch
            placeholder={city ? '請選擇區' : '請先選擇縣市'}
            bordered={false}
            className={classes.city_and_district_select}
            onChange={handleDistrictChange}
            options={districtOptions(allRecords, city)}
            filterOption={(inputValue, option) =>
              option!.label.indexOf(inputValue) !== -1
            }
          />
        </fieldset>
        {year && city && district && (
          <button
            type="submit"
            className={classes.search_btn}
            onClick={handleSubmit}
          >
            SUBMIT
          </button>
        )}
        {(!year || !city || !district) && (
          <button
            type="submit"
            className={classes.search_btn_disabled}
            disabled
          >
            SUBMIT
          </button>
        )}
      </Space>
      <section style={{ marginTop: '40px', marginBottom: '40px' }}>
        <hr className={classes.result_line} />
        <div className={classes.search_result_wrapper}>
          <div className={classes.search_result}>搜尋結果</div>
        </div>
      </section>
    </>
  );
}

export default Search;
