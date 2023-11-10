import ReactEChartsCore from 'echarts-for-react/lib/core';
import * as echarts from 'echarts/core';
import { getDates } from 'helpers/utils';
import dayjs from 'dayjs';
import { useAppContext } from 'providers/AppProvider';
import { TooltipComponent } from 'echarts/components';
import { BarChart } from 'echarts/charts';
import { CallbackDataParams } from 'echarts/types/dist/shared';
echarts.use([TooltipComponent, BarChart]);

const getDefaultOptions = (getThemeColor: (name: string) => string) => ({
  color: getThemeColor('primary'),
  tooltip: {
    trigger: 'item',
    padding: [7, 10],
    backgroundColor: getThemeColor('gray-100'),
    borderColor: getThemeColor('gray-300'),
    textStyle: { color: getThemeColor('dark') },
    borderWidth: 1,
    transitionDuration: 0,
    formatter: (params: CallbackDataParams) =>
      `<strong>${dayjs(params.name).format('DD MMM')}:</strong> ${params.value}`
  },
  xAxis: {
    type: 'category',
    data: getDates(
      new Date('5/1/2022'),
      new Date('5/7/2022'),
      1000 * 60 * 60 * 24
    ),
    show: true,
    boundaryGap: false,
    axisLine: {
      show: true,
      lineStyle: { color: getThemeColor('gray-200') }
    },
    axisTick: {
      show: false
    },
    axisLabel: {
      formatter: (value: string) => dayjs(value).format('DD MMM'),
      interval: 6,
      showMinLabel: true,
      showMaxLabel: true,
      color: getThemeColor('gray-800')
    }
  },
  yAxis: {
    show: false,
    type: 'value',
    boundaryGap: false
  },
  series: [
    {
      type: 'bar',
      barWidth: '5px',
      data: [120, 200, 150, 80, 70, 110, 120],
      showBackground: true,
      symbol: 'none',
      itemStyle: {
        borderRadius: 10
      },
      backgroundStyle: {
        borderRadius: 10,
        color: getThemeColor('primary-100')
      }
    }
  ],
  grid: { right: 10, left: 10, bottom: 0, top: 0 }
});

const EcomTotalOrdersChart = () => {
  const { getThemeColor } = useAppContext();

  return (
    <ReactEChartsCore
      echarts={echarts}
      option={getDefaultOptions(getThemeColor)}
      style={{ height: '85px', width: '115px' }}
    />
  );
};

export default EcomTotalOrdersChart;
