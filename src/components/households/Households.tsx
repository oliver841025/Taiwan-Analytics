/* eslint-disable react/jsx-filename-extension */
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
// import classes from './Households.module.scss';

const getOptions = (numOrdinary: number, numSingle: number) => {
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
            y: numOrdinary,
            color: '#626EB2',
          },
          {
            name: '獨立生活',
            y: numSingle,
            color: '#A3B1FF',
          },
        ],
      },
    ],
  };
  return options;
};

function Households(props: any) {
  const { householdOrdinaryTotal, householdSingleTotal } = props;
  return (
    <div style={{ marginTop: '40px' }}>
      <div id="container" style={{ width: '100%', height: '400px' }}>
        <HighchartsReact
          highcharts={Highcharts}
          options={getOptions(householdOrdinaryTotal, householdSingleTotal)}
        />
      </div>
    </div>
  );
}

export default Households;
