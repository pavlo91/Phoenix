import ReactEChartsCore from 'echarts-for-react/lib/core';
import * as echarts from 'echarts/core';
import { useAppContext } from 'providers/AppProvider';
import { TooltipComponent } from 'echarts/components';
import { GaugeChart } from 'echarts/charts';
import { CallbackDataParams } from 'echarts/types/dist/shared';
echarts.use([TooltipComponent, GaugeChart]);

const getDefaultOptions = (getThemeColor: (name: string) => string) => ({
  tooltip: {
    trigger: 'item',
    padding: [7, 10],
    backgroundColor: getThemeColor('gray-100'),
    borderColor: getThemeColor('gray-300'),
    textStyle: { color: getThemeColor('dark') },
    borderWidth: 1,
    transitionDuration: 0,
    formatter: (params: CallbackDataParams) => {
      return `<strong>${params.seriesName}:</strong> ${params.value}%`;
    }
  },
  legend: { show: false },
  series: [
    {
      type: 'gauge',
      center: ['50%', '60%'],
      name: 'Paying customer',
      startAngle: 180,
      endAngle: 0,
      min: 0,
      max: 100,
      splitNumber: 12,
      itemStyle: {
        color: getThemeColor('primary')
      },
      progress: {
        show: true,
        roundCap: true,
        width: 12,
        itemStyle: {
          shadowBlur: 0,
          shadowColor: '#0000'
        }
      },
      pointer: {
        show: false
      },
      axisLine: {
        roundCap: true,
        lineStyle: {
          width: 12,
          color: [[1, getThemeColor('primary-100')]]
        }
      },
      axisTick: {
        show: false
      },
      splitLine: {
        show: false
      },
      axisLabel: {
        show: false
      },
      title: {
        show: false
      },
      detail: {
        show: false
      },
      data: [
        {
          value: 30
        }
      ]
    }
  ]
});

const EcomPayingVsNonPayingChart = () => {
  const { getThemeColor } = useAppContext();

  return (
    <ReactEChartsCore
      echarts={echarts}
      option={getDefaultOptions(getThemeColor)}
      style={{ height: '100%', width: '100%' }}
    />
  );
};

export default EcomPayingVsNonPayingChart;
