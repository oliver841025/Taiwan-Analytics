/* eslint-disable no-plusplus */
/* eslint-disable no-unused-expressions */
export default function getOptions() {
  const options = new Set();
  const result: any[] = [];

  const getCityOptions = (records: []) => {
    records.forEach((item: any) => {
      !options.has(item.site_id.substring(0, 3))
        ? options.add(item.site_id.substring(0, 3))
        : false;
    });
    const cityOptionsArr = Array.from(options);
    cityOptionsArr.shift(); // 移除第一筆，因為是說明
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
}
