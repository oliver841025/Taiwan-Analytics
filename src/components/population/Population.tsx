/* eslint-disable comma-dangle */
/* eslint-disable react/jsx-filename-extension */
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import classes from './Population.module.scss';

const options = (
  numOrdinaryM: number,
  numOrdinaryF: number,
  numSingleM: number,
  numSingleF: number
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
        style: {
          fontWeight: 700,
        },
      },
    },
    yAxis: {
      min: 0,
      title: {
        text: '數量',
        rotation: 0,
        align: 'high',
        y: -30,
        x: 35,
        style: {
          fontWeight: 700,
        },
      },
      labels: {
        format: '{value:.0f}k',
      },
      tickInterval: 25,
    },
    series: [
      {
        name: '男性',
        data: [numOrdinaryM / 1000, numSingleM / 1000],
        color: '#7D5FB2',
        dataLabels: {
          enabled: true,
          format: '{y}', // 顯示數字格式
        },
      },
      {
        name: '女性',
        data: [numOrdinaryF / 1000, numSingleF / 1000],
        color: '#C29FFF',
        dataLabels: {
          enabled: true,
          format: '{y}', // 顯示數字格式
        },
      },
    ],
  };
  return options;
};

function Population(props: any) {
  const {
    householdOrdinaryMale,
    householdOrdinaryFemale,
    householdSingleMale,
    householdSingleFemale,
  } = props;
  return (
    <div className={classes.wrapper}>
      <div id="container" className={classes.chart}>
        <HighchartsReact
          highcharts={Highcharts}
          options={options(
            householdOrdinaryMale,
            householdOrdinaryFemale,
            householdSingleMale,
            householdSingleFemale
          )}
        />
      </div>
    </div>
  );
}

export default Population;
