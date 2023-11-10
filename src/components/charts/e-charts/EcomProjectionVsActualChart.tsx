import React from 'react';
import ReactEChartsCore from 'echarts-for-react/lib/core';
import * as echarts from 'echarts/core';
import { getPastDates } from 'helpers/utils';
import dayjs from 'dayjs';
import { useAppContext } from 'providers/AppProvider';
import { TooltipComponent } from 'echarts/components';
import { BarChart } from 'echarts/charts';
import { CallbackDataParams } from 'echarts/types/dist/shared';
import { tooltipFormatterDefault } from 'helpers/echart-utils';

echarts.use([TooltipComponent, BarChart]);

const dates = getPastDates(10);

const data1 = [
  44485, 20428, 47302, 45180, 31034, 46358, 26581, 36628, 38219, 43256
];

const data2 = [
  38911, 29452, 31894, 47876, 31302, 27731, 25490, 30355, 27176, 30393
];

const getDefaultOptions = (getThemeColor: (name: string) => string) => ({
  color: [getThemeColor('primary'), getThemeColor('gray-300')],
  tooltip: {
    trigger: 'axis',
    padding: [7, 10],
    backgroundColor: getThemeColor('gray-100'),
    borderColor: getThemeColor('gray-300'),
    textStyle: { color: getThemeColor('dark') },
    borderWidth: 1,
    transitionDuration: 0,
    axisPointer: {
      type: 'none'
    },
    formatter: (params: CallbackDataParams[]) => tooltipFormatterDefault(params)
  },
  legend: {
    data: ['Projected revenue', 'Actual revenue'],
    right: 'right',
    width: '100%',
    itemWidth: 16,
    itemHeight: 8,
    itemGap: 20,
    top: 3,
    inactiveColor: getThemeColor('gray-500'),
    textStyle: {
      color: getThemeColor('gray-900'),
      fontWeight: 600,
      fontFamily: 'Nunito Sans'
      // fontSize: '12.8px'
    }
  },
  xAxis: {
    type: 'category',
    // boundaryGap: false,
    axisLabel: {
      color: getThemeColor('gray-800'),
      formatter: (value: Date) => dayjs(value).format('MMM DD'),
      interval: 3,
      fontFamily: 'Nunito Sans',
      fontWeight: 600,
      fontSize: 12.8
    },
    data: dates,
    axisLine: {
      lineStyle: {
        color: getThemeColor('gray-300')
      }
    },
    axisTick: false
  },
  yAxis: {
    axisPointer: { type: 'none' },
    // boundaryGap: false,
    axisTick: 'none',
    splitLine: {
      interval: 5,
      lineStyle: {
        color: getThemeColor('gray-200')
      }
    },
    axisLine: { show: false },
    axisLabel: {
      fontFamily: 'Nunito Sans',
      fontWeight: 600,
      fontSize: 12.8,
      color: getThemeColor('gray-800'),
      margin: 20,
      verticalAlign: 'bottom',
      formatter: (value: number) => `$${value.toLocaleString()}`
    }
  },
  series: [
    {
      name: 'Projected revenue',
      type: 'bar',
      barWidth: '6px',
      data: data2,
      barGap: '30%',
      label: { show: false },
      itemStyle: {
        borderRadius: [2, 2, 0, 0],
        color: getThemeColor('primary')
      }
    },
    {
      name: 'Actual revenue',
      type: 'bar',
      data: data1,
      barWidth: '6px',
      barGap: '30%',
      label: { show: false },
      z: 10,
      itemStyle: {
        borderRadius: [2, 2, 0, 0],
        color: getThemeColor('info-100')
      }
    }
  ],
  grid: {
    right: 0,
    left: 3,
    bottom: 0,
    top: '15%',
    containLabel: true
  },
  animation: false
});

const EcomProjectionVsActualChart = ({
  height,
  width
}: {
  height: string;
  width: string;
}) => {
  const { getThemeColor } = useAppContext();

  return (
    <ReactEChartsCore
      echarts={echarts}
      option={getDefaultOptions(getThemeColor)}
      style={{ height, width }}
    />
  );
};

export default EcomProjectionVsActualChart;
