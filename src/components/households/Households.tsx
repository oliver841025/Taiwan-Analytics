import classes from './Households.module.scss';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const options = {
  chart: {
    type: 'pie',
  },
  title: {
    text: '戶數統計',
  },
  tooltip: {
    valueSuffix: '%',
  },
  plotOptions: {
    pie: {
      allowPointSelect: true,
      cursor: 'pointer',
      dataLabels: {
        enabled: true,
        format: '{point.name}: {point.percentage:.1f}%',
      },
      showInLegend: true,
    },
  },
  series: [
    {
      name: 'Percentage',
      colorByPoint: true,
      data: [
        {
          name: '共同生活',
          y: 65,
          color: '#626EB2',
        },
        {
          name: '獨立生活',
          y: 35,
          color: '#A3B1FF',
        },
      ],
    },
  ],
};

const Households = () => {
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

export default Households;
