import classes from './Population.module.scss';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

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
      data: [49.9, 71.5],
      color: '#7D5FB2',
    },
    {
      name: '女性',
      data: [83.6, 78.8],
      color: '#C29FFF',
    },
  ],
};

const Population = () => {
  return (
    <>
      <div className={classes.wrapper}>
        <div id="container" className={classes.chart}>
          <HighchartsReact highcharts={Highcharts} options={options} />
        </div>
      </div>
    </>
  );
};

export default Population;
