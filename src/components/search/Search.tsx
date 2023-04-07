/* eslint-disable react/jsx-curly-newline */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-plusplus */
/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-expressions */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */
import getOptions from '@/utils/getOptions';
import { localRecords } from '@/utils/localRecords';
import { Select, Space } from 'antd';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import classes from './Search.module.scss';

function Search(props: any) {
  const router = useRouter();
  const {
    records,
    setRecords,
    year,
    setYear,
    city,
    setCity,
    district,
    setDistrict,
    setIsSubmitClicked,
  } = props;
  // console.log(records);

  // useEffect(() => {
  //   console.log(router.query);
  //   setYear(`${router.query.slug[0]}` as string);
  // }, [router.query]);

  const cityOptions = getOptions().getCityOptions(localRecords);
  const districtOptions = getOptions().getDistrictOptions(localRecords, city);
  // console.log('districtOptions', districtOptions);

  const handleYearChange = (value: string) => {
    // console.log(`selected ${value}`);
    setYear(value);
  };

  const handleCityChange = (value: string) => {
    // console.log(`selected ${value}`);
    setCity(value);
    setDistrict(null);
  };

  const handleDistrictChange = (value: any) => {
    // console.log(`selected ${value}`);
    setDistrict(value);
  };

  async function fetchRecords() {
    const url =
      'https://od.moi.gov.tw/api/v1/rest/datastore/301000000A-000082-004';
    const res = await fetch(url);
    const data = await res.json();
    const result = data.result.records;
    result.shift();
    return result;
  }

  const handleSubmit = () => {
    router.push(`/${year}/${city}/${district}`);
    setIsSubmitClicked(true);
    // console.log('year:', year, 'city:', city, 'district:', district);
    // setRecords(fetchRecords());
    setRecords(localRecords);
    // console.log(records);
  };

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
              { value: '105', label: '105' },
              { value: '104', label: '104' },
              { value: '103', label: '103' },
              //   { value: 'disabled', label: 'Disabled', disabled: true },
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
            placeholder="請選擇縣 / 市"
            bordered={false}
            className={classes.city_and_district_select}
            onChange={handleCityChange}
            options={cityOptions}
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
            placeholder="請先選擇縣 / 市"
            bordered={false}
            className={classes.city_and_district_select}
            onChange={handleDistrictChange}
            options={districtOptions}
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
