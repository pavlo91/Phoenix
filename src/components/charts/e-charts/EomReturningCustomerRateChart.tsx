import ReactEChartsCore from 'echarts-for-react/lib/core';
import * as echarts from 'echarts/core';
import { useAppContext } from 'providers/AppProvider';
import { TooltipComponent } from 'echarts/components';
import { BarChart } from 'echarts/charts';
import { CallbackDataParams } from 'echarts/types/dist/shared';
import { months } from 'data/commonData';
import { tooltipFormatterDefault } from 'helpers/echart-utils';

echarts.use([TooltipComponent, BarChart]);

const getDefaultOptions = (getThemeColor: (name: string) => string) => ({
  color: getThemeColor('gray-100'),
  legend: {
    data: [
      {
        name: 'Fourth time',
        icon: 'roundRect',
        itemStyle: {
          color: getThemeColor('primary-300'),
          borderWidth: 0
        }
      },
      {
        name: 'Third time',
        icon: 'roundRect',
        itemStyle: { color: getThemeColor('info-200'), borderWidth: 0 }
      },
      {
        name: 'Second time',
        icon: 'roundRect',
        itemStyle: { color: getThemeColor('primary'), borderWidth: 0 }
      }
    ],

    right: 'right',
    width: '100%',
    itemWidth: 16,
    itemHeight: 8,
    itemGap: 20,
    top: 3,
    inactiveColor: getThemeColor('gray-500'),
    inactiveBorderWidth: 0,
    textStyle: {
      color: getThemeColor('gray-900'),
      fontWeight: 600,
      fontFamily: 'Nunito Sans'
    }
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'none'
    },
    padding: [7, 10],
    backgroundColor: getThemeColor('gray-100'),
    borderColor: getThemeColor('gray-300'),
    textStyle: { color: getThemeColor('dark') },
    borderWidth: 1,
    transitionDuration: 0,
    formatter: (params: CallbackDataParams[]) => tooltipFormatterDefault(params)
  },
  xAxis: {
    type: 'category',
    data: months,
    show: true,
    boundaryGap: false,
    axisLine: {
      show: true,
      lineStyle: { color: getThemeColor('gray-300') }
    },
    axisTick: {
      show: false
    },
    axisLabel: {
      // interval: 1,
      showMinLabel: false,
      showMaxLabel: false,
      color: getThemeColor('gray-800'),
      formatter: (value: string) => value.slice(0, 3),
      fontFamily: 'Nunito Sans',
      fontWeight: 600,
      fontSize: 12.8
    },
    splitLine: {
      show: true,
      lineStyle: { color: getThemeColor('gray-200'), type: 'dashed' }
    }
  },
  yAxis: {
    type: 'value',
    boundaryGap: false,
    axisLabel: {
      showMinLabel: true,
      showMaxLabel: true,
      color: getThemeColor('gray-800'),
      formatter: (value: number) => `${value}%`,
      fontFamily: 'Nunito Sans',
      fontWeight: 600,
      fontSize: 12.8
    },
    splitLine: {
      show: true,
      lineStyle: { color: getThemeColor('gray-200') }
    }
  },
  series: [
    {
      name: 'Fourth time',
      type: 'line',
      data: [62, 90, 90, 90, 78, 84, 17, 17, 17, 17, 82, 95],
      showSymbol: false,
      symbol: 'circle',
      symbolSize: 10,
      emphasis: {
        lineStyle: {
          width: 1
        }
      },
      lineStyle: {
        type: 'dashed',
        width: 1,
        color: getThemeColor('primary-300')
      },
      itemStyle: {
        borderColor: getThemeColor('primary-300'),
        borderWidth: 3
      }
    },
    {
      name: 'Third time',
      type: 'line',
      data: [50, 50, 30, 62, 18, 70, 70, 22, 70, 70, 70, 70],
      showSymbol: false,
      symbol: 'circle',
      symbolSize: 10,
      emphasis: {
        lineStyle: {
          width: 1
        }
      },
      lineStyle: {
        width: 1,
        color: getThemeColor('info-200')
      },
      itemStyle: {
        borderColor: getThemeColor('info-200'),
        borderWidth: 3
      }
    },
    {
      name: 'Second time',
      type: 'line',
      data: [40, 78, 60, 78, 60, 20, 60, 40, 60, 40, 20, 78],
      showSymbol: false,
      symbol: 'circle',
      symbolSize: 10,
      emphasis: {
        lineStyle: {
          width: 3
        }
      },
      lineStyle: {
        width: 3,
        color: getThemeColor('primary')
      },
      itemStyle: {
        borderColor: getThemeColor('primary'),
        borderWidth: 3
      }
    }
  ],
  grid: { left: 0, right: 8, top: '14%', bottom: 0, containLabel: true }
});

const EomReturningCustomerRateChart = () => {
  const { getThemeColor } = useAppContext();

  return (
    <ReactEChartsCore
      echarts={echarts}
      option={getDefaultOptions(getThemeColor)}
      style={{ height: '300px', width: '100%' }}
    />
  );
};

export default EomReturningCustomerRateChart;
