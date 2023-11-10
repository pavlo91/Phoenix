import PhoenixDocCard from 'components/base/PhoenixDocCard';
import DoughnutPieChart from 'components/charts/e-charts/example/DoughnutPieChart';
import SeriesBarChart from 'components/charts/e-charts/example/SeriesBarChart';
import SimpleLineChart from 'components/charts/e-charts/example/SimpleLineChart';
import StackedLineChart from 'components/charts/e-charts/example/StackedLineChart';
import DocPageHeader from 'components/docs/DocPageHeader';
import PhoenixLiveEditor from 'components/docs/PhoenixLiveEditor';
import DocPagesLayout from 'layouts/DocPagesLayout';
import React from 'react';
import { Col, Row } from 'react-bootstrap';

const structureCode = `// import the core library.
import ReactEChartsCore from 'echarts-for-react/lib/core';

// Import the echarts core module, which provides the necessary interfaces for using echarts.
import * as echarts from 'echarts/core';

// Import charts, all with Chart suffix
import { BarChart } from 'echarts/charts';

// import components, all suffixed with Component
import {
  GridComponent,
  TooltipComponent,
  TitleComponent,
  LegendComponent
} from 'echarts/components';

// Import renderer, note that introducing the CanvasRenderer or SVGRenderer is a required step
import { CanvasRenderer } from 'echarts/renderers';

// Register the required components
echarts.use([
  TitleComponent,
  TooltipComponent,
  GridComponent,
  BarChart,
  CanvasRenderer,
  LegendComponent
]);

// The usage of ReactEChartsCore are same with above.
<ReactEChartsCore
  echarts={echarts}
  option={getOption()}
  style={{ height: '20rem' }}
/>`;

const basicImportString = `
import ReactEChartsCore from 'echarts-for-react/lib/core';
import * as echarts from 'echarts/core';
import { useAppContext } from 'providers/AppProvider';
import { tooltipFormatterDefault } from 'helpers/echart-utils';
import { CallbackDataParams } from 'echarts/types/dist/shared';
`;

const SimpleLineChartCode = `
${basicImportString}
import {
  GridComponent,
  LegendComponent,
  TitleComponent,
  TooltipComponent
} from 'echarts/components';
import { getDates } from 'helpers/utils';
import dayjs from 'dayjs';
import { LineChart } from 'echarts/charts';
import { CanvasRenderer } from 'echarts/renderers';
import { ThemeVariant } from 'config';

echarts.use([
  TitleComponent,
  TooltipComponent,
  GridComponent,
  LineChart,
  CanvasRenderer,
  LegendComponent
]);

const dates = getDates(
  new Date('8/1/2022'),
  new Date('8/30/2022'),
  1000 * 60 * 60 * 24
);

const currentMonthData = [
  100, 200, 300, 300, 300, 250, 250, 250, 300, 300, 300, 500, 500, 500, 500,
  500, 500, 1100, 1100, 1100, 850, 700, 700, 700, 400, 250, 200, 300, 300, 250
];

const prevMonthData = [
  200, 200, 100, 50, 50, 50, 400, 50, 50, 50, 50, 500, 50, 50, 200, 400, 600,
  600, 600, 800, 200, 700, 400, 450, 500, 600, 700, 650, 600, 550
];

const getDefaultOptions = (
  theme: ThemeVariant,
  getThemeColor: (name: string) => string
) => ({
  color: [getThemeColor('primary'), getThemeColor('info')],
  tooltip: {
    trigger: 'axis',
    padding: 10,
    backgroundColor: getThemeColor('gray-100'),
    borderColor: getThemeColor('gray-300'),
    textStyle: { color: getThemeColor('dark') },
    borderWidth: 1,
    transitionDuration: 0,
    axisPointer: {
      type: 'none'
    },
    formatter: tooltipFormatterDefault
  },
  xAxis: [
    {
      type: 'category',
      data: dates,
      axisLabel: {
        formatter: (value: Date) => dayjs(value).format('DD MMM'),
        interval: 13,
        showMinLabel: true,
        showMaxLabel: false,
        color: getThemeColor('gray-800'),
        align: 'left',
        fontFamily: 'Nunito Sans',
        fontWeight: 600,
        fontSize: 12.8
      },
      axisLine: {
        show: true,
        lineStyle: {
          color: getThemeColor('gray-200')
        }
      },
      axisTick: {
        show: false
      },
      splitLine: {
        show: true,
        interval: 0,
        lineStyle: {
          color:
            theme === 'dark'
              ? getThemeColor('gray-100')
              : getThemeColor('gray-200')
        }
      },
      boundaryGap: false
    },
    {
      type: 'category',
      position: 'bottom',
      data: dates,
      axisLabel: {
        formatter: (value: Date) => dayjs(value).format('DD MMM'),
        interval: 130,
        showMaxLabel: true,
        showMinLabel: false,
        color: getThemeColor('gray-800'),
        align: 'right',
        fontFamily: 'Nunito Sans',
        fontWeight: 600,
        fontSize: 12.8
      },
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      splitLine: {
        show: false
      },
      boundaryGap: false
    }
  ],
  yAxis: {
    position: 'right',
    axisPointer: { type: 'none' },
    axisTick: 'none',
    splitLine: {
      show: false
    },
    axisLine: { show: false },
    axisLabel: { show: false }
  },
  series: [
    {
      type: 'line',
      data: currentMonthData,
      showSymbol: false,
      symbol: 'circle'
    },
    {
      type: 'line',
      data: prevMonthData,
      lineStyle: {
        type: 'dashed',
        width: 1,
        color: getThemeColor('info')
      },
      showSymbol: false,
      symbol: 'circle'
    }
  ],
  grid: {
    right: 2,
    left: 5,
    bottom: '20px',
    top: '2%',
    containLabel: false
  },
  animation: false
});

const SimpleLineChart = () => {
  const {
    config: { theme },
    getThemeColor
  } = useAppContext();

  return (
    <ReactEChartsCore
      echarts={echarts}
      option={getDefaultOptions(theme, getThemeColor)}
    />
  );
};
`;

const seriesBarChartCode = `
${basicImportString}
import { getPastDates } from 'helpers/utils';
import dayjs from 'dayjs';
import { TooltipComponent } from 'echarts/components';
import { BarChart } from 'echarts/charts';

echarts.use([TooltipComponent, BarChart]);

const dates = getPastDates(10);

const data1 = [3500, 4100, 5400, 4000, 5000, 2000, 3000, 1000, 5500, 4500];

const data2 = [2500, 3000, 6000, 3500, 4000, 3000, 1500, 1500, 4200, 1000];

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
    formatter: tooltipFormatterDefault
  },
  legend: {
    data: ['Expenses', 'Income'],
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
    }
  },
  xAxis: {
    type: 'category',
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
      verticalAlign: 'bottom'
    }
  },
  series: [
    {
      name: 'Expenses',
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
      name: 'Income',
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

const SeriesBarChart = ({
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
`;

const doughnutPieChartCode = `
${basicImportString}
import { TooltipComponent } from 'echarts/components';
import { PieChart } from 'echarts/charts';
echarts.use([TooltipComponent, PieChart]);

const getDefaultOptions = (getThemeColor: (name: string) => string) => ({
  color: [
    getThemeColor('info-300'),
    getThemeColor('warning-300'),
    getThemeColor('danger-300'),
    getThemeColor('success-300'),
    getThemeColor('primary')
  ],
  tooltip: {
    trigger: 'item'
  },
  responsive: true,
  maintainAspectRatio: false,

  series: [
    {
      name: 'Tasks assigned to me',
      type: 'pie',
      radius: ['50%', '90%'],
      startAngle: 30,
      avoidLabelOverlap: false,

      label: {
        show: false,
        position: 'center',
        formatter: '{x|{d}%} \n {y|{b}}',
        rich: {
          x: {
            fontSize: 31.25,
            fontWeight: 800,
            color: getThemeColor('gray-700'),
            padding: [0, 0, 5, 15]
          },
          y: {
            fontSize: 12.8,
            color: getThemeColor('gray-700'),
            fontWeight: 600
          }
        }
      },
      emphasis: {
        label: {
          show: true
        }
      },
      labelLine: {
        show: false
      },
      data: [
        { value: 1048, name: 'Search Engine' },
        { value: 735, name: 'Direct' },
        { value: 580, name: 'Email' },
        { value: 484, name: 'Union Ads' },
        { value: 300, name: 'Video Ads' }
      ]
    }
  ],
  grid: {
    bottom: 0,
    top: 0,
    left: 0,
    right: 0,
    containLabel: false
  }
});

const DoughnutPieChart = () => {
  const { getThemeColor } = useAppContext();

  return (
    <ReactEChartsCore
      echarts={echarts}
      option={getDefaultOptions(getThemeColor)}
      style={{ minHeight: '320px', width: '100%' }}
    />
  );
};
`;

const stackedLineChartCode = `
${basicImportString}
import { TooltipComponent } from 'echarts/components';
import { PieChart } from 'echarts/charts';
import dayjs from 'dayjs';
import { getPastDates } from 'helpers/utils';
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
    formatter: tooltipFormatterDefault,
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
`;

const ECharts = () => {
  return (
    <div className="mb-9">
      <DocPageHeader
        title="ECharts"
        description="The simplest, and the best React wrapper for Apache ECharts. Apache ECharts is a free, powerful charting and visualization library offering an easy way of adding intuitive, interactive, and highly customizable charts to your commercial products."
        link={{
          text: 'Documentation for ECharts',
          url: `https://github.com/hustcc/echarts-for-react`
        }}
      />
      <DocPagesLayout>
        <PhoenixDocCard className="mb-5">
          <PhoenixDocCard.Header title="Usage" noPreview />
          <PhoenixDocCard.Body>
            <PhoenixLiveEditor code={structureCode} />
          </PhoenixDocCard.Body>
        </PhoenixDocCard>
        <h3 className="mb-4">Examples</h3>
        <Row className="g-4">
          <Col xl={6}>
            <PhoenixDocCard>
              <PhoenixDocCard.Header title="Simple line chart" />
              <PhoenixDocCard.Body code={SimpleLineChartCode} hidePreview>
                <SimpleLineChart />
              </PhoenixDocCard.Body>
            </PhoenixDocCard>
          </Col>
          <Col xl={6}>
            <PhoenixDocCard>
              <PhoenixDocCard.Header title="Series bar chart" />
              <PhoenixDocCard.Body code={seriesBarChartCode} hidePreview>
                <SeriesBarChart height="300px" width="100%" />
              </PhoenixDocCard.Body>
            </PhoenixDocCard>
          </Col>
          <Col xl={6}>
            <PhoenixDocCard>
              <PhoenixDocCard.Header title="Doughnut pie chart" />
              <PhoenixDocCard.Body code={doughnutPieChartCode} hidePreview>
                <DoughnutPieChart />
              </PhoenixDocCard.Body>
            </PhoenixDocCard>
          </Col>
          <Col xl={6}>
            <PhoenixDocCard>
              <PhoenixDocCard.Header title="Stacked line chart" />
              <PhoenixDocCard.Body code={stackedLineChartCode} hidePreview>
                <StackedLineChart />
              </PhoenixDocCard.Body>
            </PhoenixDocCard>
          </Col>
        </Row>
      </DocPagesLayout>
    </div>
  );
};

export default ECharts;
