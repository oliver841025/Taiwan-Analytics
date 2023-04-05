export default function getOptions() {
  let options = new Set();
  let result: any[] = [];

  const getCityOptions = (records: []) => {
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
}
