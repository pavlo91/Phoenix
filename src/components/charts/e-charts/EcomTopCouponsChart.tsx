import ReactEChartsCore from 'echarts-for-react/lib/core';
import * as echarts from 'echarts/core';
import { useAppContext } from 'providers/AppProvider';
import { TooltipComponent } from 'echarts/components';
import { PieChart } from 'echarts/charts';
import { CallbackDataParams } from 'echarts/types/dist/shared';
echarts.use([TooltipComponent, PieChart]);

const getDefaultOptions = (getThemeColor: (name: string) => string) => ({
  color: [
    getThemeColor('primary'),
    getThemeColor('primary-200'),
    getThemeColor('info-500')
  ],

  tooltip: {
    trigger: 'item',
    padding: [7, 10],
    backgroundColor: getThemeColor('gray-100'),
    borderColor: getThemeColor('gray-300'),
    textStyle: { color: getThemeColor('dark') },
    borderWidth: 1,
    transitionDuration: 0,
    formatter: (params: CallbackDataParams) =>
      `<strong>${params.name}:</strong> ${params.percent}%`
  },
  legend: { show: false },
  series: [
    {
      name: '72%',
      type: 'pie',
      radius: ['100%', '87%'],
      avoidLabelOverlap: false,
      emphasis: {
        scale: false,
        itemStyle: {
          color: 'inherit'
        }
      },
      itemStyle: {
        borderWidth: 2,
        borderColor: getThemeColor('white')
      },
      label: {
        show: true,
        position: 'center',
        formatter: '{a}',
        fontSize: 23,
        color: getThemeColor('dark')
      },
      data: [
        { value: 7200000, name: 'Percentage discount' },
        { value: 1800000, name: 'Fixed card discount' },
        { value: 1000000, name: 'Fixed product discount' }
      ]
    }
  ],
  grid: { containLabel: true }
});

const EcomTopCouponsChart = () => {
  const { getThemeColor } = useAppContext();

  return (
    <ReactEChartsCore
      echarts={echarts}
      option={getDefaultOptions(getThemeColor)}
      style={{ height: '115px', width: '100%' }}
    />
  );
};

export default EcomTopCouponsChart;
