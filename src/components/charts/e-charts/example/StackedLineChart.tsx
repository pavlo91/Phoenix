import ReactEChartsCore from 'echarts-for-react/lib/core';
import * as echarts from 'echarts/core';
import { useAppContext } from 'providers/AppProvider';
import { TooltipComponent } from 'echarts/components';
import { PieChart } from 'echarts/charts';
import dayjs from 'dayjs';
import { getPastDates } from 'helpers/utils';
import { tooltipFormatterDefault } from 'helpers/echart-utils';
import { CallbackDataParams } from 'echarts/types/dist/shared';
echarts.use([TooltipComponent, PieChart]);

const getDefaultOptions = (getThemeColor: (name: string) => string) => ({
  color: [
    getThemeColor('gray-400'),
    getThemeColor('success'),
    getThemeColor('info'),
    getThemeColor('warning')
  ],
  tooltip: {
    trigger: 'axis',
    backgroundColor: getThemeColor('gray-soft'),
    borderColor: getThemeColor('gray-200'),
    formatter: (params: CallbackDataParams[]) =>
      tooltipFormatterDefault(params),
    axisPointer: {
      shadowStyle: {
        color: 'red'
      }
    }
  },
  legend: {
    bottom: '10',
    data: [
      {
        name: 'Email',
        icon: 'roundRect'
      },
      {
        name: 'Union Ads',
        icon: 'roundRect'
      },
      {
        name: 'Video Ads',
        icon: 'roundRect'
      }
    ],
    itemWidth: 16,
    itemHeight: 8,
    itemGap: 10,
    inactiveColor: getThemeColor('gray-500'),
    inactiveBorderWidth: 0,
    textStyle: {
      color: getThemeColor('gray-900'),
      fontWeight: 600,
      fontSize: 16,
      fontFamily: 'Nunito Sans'
    }
  },
  xAxis: [
    {
      show: true,
      interval: 2,
      axisLine: {
        lineStyle: {
          type: 'solid',
          color: getThemeColor('gray-300')
        }
      },
      axisLabel: {
        color: getThemeColor('gray-900'),
        formatter: (data: string) => dayjs(data).format('D MMM'),
        interval: 5,
        align: 'left',
        margin: 20,
        fontSize: 12.8
      },
      axisTick: {
        show: true,
        length: 15
      },
      splitLine: {
        interval: 0,
        show: true,
        lineStyle: {
          color: getThemeColor('gray-300'),
          type: 'dashed'
        }
      },
      type: 'category',
      boundaryGap: false,
      data: getPastDates(15)
    },
    {
      show: true,
      interval: 2,
      axisLine: {
        show: false
      },
      axisLabel: {
        show: false
      },
      axisTick: {
        show: false
      },
      splitLine: {
        interval: 1,
        show: true,
        lineStyle: {
          color: getThemeColor('gray-300'),
          type: 'solid'
        }
      },
      boundaryGap: false,
      data: getPastDates(15)
    }
  ],
  yAxis: {
    show: true,
    type: 'value',
    axisLine: {
      lineStyle: {
        type: 'solid',
        color: getThemeColor('gray-300')
      }
    },
    axisLabel: {
      color: getThemeColor('gray-900'),
      margin: 20,
      fontSize: 12.8,
      interval: 0
    },
    splitLine: {
      show: true,
      lineStyle: {
        color: getThemeColor('gray-300'),
        type: 'solid'
      }
    },
    axisTick: {
      show: true,
      length: 15,
      alignWithLabel: true,
      lineStyle: {
        color: getThemeColor('gray-300')
      }
    }
  },
  series: [
    {
      name: 'Email',
      type: 'line',
      stack: 'Total',
      data: [120, 132, 101, 134, 90, 230, 210]
    },
    {
      name: 'Union Ads',
      type: 'line',
      stack: 'Total',
      data: [220, 182, 191, 234, 290, 330, 310]
    },
    {
      name: 'Video Ads',
      type: 'line',
      stack: 'Total',
      data: [150, 232, 201, 154, 190, 330, 410]
    },
    {
      name: 'Direct',
      type: 'line',
      stack: 'Total',
      data: [320, 332, 301, 334, 390, 330, 320]
    }
  ],
  grid: {
    right: 5,
    left: 0,
    bottom: '15%',
    top: 20,
    containLabel: true
  }
});

const StackedLineChart = () => {
  const { getThemeColor } = useAppContext();

  return (
    <ReactEChartsCore
      echarts={echarts}
      option={getDefaultOptions(getThemeColor)}
      style={{ minHeight: '320px', width: '100%' }}
    />
  );
};

export default StackedLineChart;
