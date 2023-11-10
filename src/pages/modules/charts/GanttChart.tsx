import PhoenixDocCard from 'components/base/PhoenixDocCard';
import BasicGanttChart from 'components/charts/dhtmlx/example/BasicGanttChart';
import DocPageHeader from 'components/docs/DocPageHeader';
import DocPagesLayout from 'layouts/DocPagesLayout';
import React from 'react';

const basicGanttChartCode = `
import { useEffect, useRef } from 'react';
import { gantt } from 'dhtmlx-gantt';
import 'dhtmlx-gantt/codebase/dhtmlxgantt.css';
import { useAppContext } from 'providers/AppProvider';

const tasks = {
  data: [
    {
      id: 1,
      text: 'Planning',
      start_date: '2019-08-01 00:00',
      duration: 3,
      progress: 1.5,
      task_class: 'planning'
    },
    {
      id: 2,
      text: 'Research',
      start_date: '2019-08-02 00:00',
      duration: 4,
      // parent: 1,
      progress: 0.5,
      task_class: 'research'
    },
    {
      id: 3,
      text: 'Design',
      start_date: '2019-08-02 00:00',
      duration: 8,
      // parent: 1,
      progress: 0.6,
      task_class: 'design'
    },
    {
      id: 4,
      text: 'Review',
      start_date: '2019-08-05 00:00',
      duration: 5,
      // parent: 1,
      progress: 0.8,
      task_class: 'review'
    },
    {
      id: 5,
      text: 'Develop',
      start_date: '2019-08-06 00:00',
      duration: 10,
      // parent: 1,
      progress: 0.4,
      open: true,
      task_class: 'develop'
    },
    {
      id: 6,
      text: 'Review II',
      start_date: '2019-08-10 00:00',
      duration: 5,
      // parent: 4,
      progress: 0.02,
      task_class: 'review-2'
    }
  ],
  links: [
    { id: 1, source: 1, target: 2, type: '0' },
    { id: 2, source: 1, target: 3, type: '0' },
    { id: 3, source: 3, target: 4, type: '0' },
    { id: 4, source: 6, target: 5, type: '3' }
  ]
};

const BasicGanttChart = () => {
  const containerRef = useRef(null);
  const {
    config: { isRTL }
  } = useAppContext();

  useEffect(() => {
    if (containerRef.current) {
      gantt.plugins({
        tooltip: true
      });

      gantt.config.date_format = '%Y-%m-%d %H:%i';
      gantt.config.scale_height = 0;
      gantt.config.row_height = 36;
      gantt.config.bar_height = 12;
      gantt.config.drag_move = false;
      gantt.config.drag_progress = false;
      gantt.config.drag_resize = false;
      gantt.config.drag_links = false;
      gantt.config.details_on_dblclick = false;
      // gantt.config.click_drag = false;

      const zoomConfig = {
        levels: [
          {
            name: 'month',
            scales: [
              { unit: 'month', format: '%F, %Y' },
              { unit: 'week', format: 'Week #%W' }
            ]
          },

          {
            name: 'year',
            scales: [{ unit: 'year', step: 1, format: '%Y' }]
          },
          {
            name: 'week',
            scales: [
              {
                unit: 'week',
                step: 1,
                format: (date: Date) => {
                  const dateToStr = gantt.date.date_to_str('%d %M');
                  const endDate = gantt.date.add(date, -6, 'day');
                  const weekNum = gantt.date.date_to_str('%W')(date);
                  return (
                    '#' +
                    weekNum +
                    ', ' +
                    dateToStr(date) +
                    ' - ' +
                    dateToStr(endDate)
                  );
                }
              },
              { unit: 'day', step: 1, format: '%j %D' }
            ]
          }
        ]
      };

      gantt.ext.zoom.init(zoomConfig);
      gantt.ext.zoom.setLevel('week');
      // gantt.ext.zoom.attachEvent('onAfterZoom', function (level, config) {
      //   document.querySelector("input[value='" + config.name + "']").checked = true;
      // });

      gantt.config.columns = [{ name: 'text', width: 56, resize: true }];

      gantt.templates.task_class = (start, end, task) => task.task_class;

      gantt.templates.timeline_cell_class = function () {
        return 'weekend';
      };

      gantt.templates.task_text = () => '';

      gantt.init(containerRef.current);
      gantt.parse(tasks);
    }
  }, []);

  useEffect(() => {
    gantt.config.rtl = isRTL;
  }, [isRTL]);

  return <div ref={containerRef} style={{ height: '222px', width: '100%' }} />;
};
`;

const GanttChart = () => {
  return (
    <div className="mb-9">
      <DocPageHeader
        title="Gantt chart"
        description="DHTMLX Gantt is the most complete Gantt chart library to cover all the needs of a project management app and advance web development."
        link={{
          text: 'Documentation for Gantt chart',
          url: `https://github.com/DHTMLX/gantt`
        }}
      />
      <DocPagesLayout>
        <PhoenixDocCard>
          <PhoenixDocCard.Header title="Example" />
          <PhoenixDocCard.Body
            className="gantt-chart-example"
            code={basicGanttChartCode}
            hidePreview
          >
            <BasicGanttChart />
          </PhoenixDocCard.Body>
        </PhoenixDocCard>
      </DocPagesLayout>
    </div>
  );
};

export default GanttChart;
