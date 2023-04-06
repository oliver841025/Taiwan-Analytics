import classes from './Population.module.scss';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const getOptions = (
  num_ordinary_m: number,
  num_ordinary_f: number,
  num_single_m: number,
  num_single_f: number
) => {
  const options = {
    chart: {
      type: 'column',
    },
    title: {
      text: '人口數統計',
    },
    xAxis: {
      categories: ['共同生活', '獨立生活'],
      title: {
        text: '型態',
      },
    },
    yAxis: {
      min: 0,
      title: {
        text: '數量',
      },
      labels: {
        format: '{value:.0f}k',
      },
      tickInterval: 25,
    },
    series: [
      {
        name: '男性',
        data: [num_ordinary_m / 1000, num_single_m / 1000],
        color: '#7D5FB2',
      },
      {
        name: '女性',
        data: [num_ordinary_f / 1000, num_single_f / 1000],
        color: '#C29FFF',
      },
    ],
  };
  return options;
};

const Population = (props: any) => {
  const {
    householdOrdinaryMale,
    householdOrdinaryFemale,
    householdSingleMale,
    householdSingleFemale,
  } = props;
  return (
    <>
      <div className={classes.wrapper}>
        <div id="container" className={classes.chart}>
          <HighchartsReact
            highcharts={Highcharts}
            options={getOptions(
              householdOrdinaryMale,
              householdOrdinaryFemale,
              householdSingleMale,
              householdSingleFemale
            )}
          />
        </div>
      </div>
    </>
  );
};

export default Population;
