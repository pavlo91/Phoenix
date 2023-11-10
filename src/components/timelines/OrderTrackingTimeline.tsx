import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import Timeline from 'components/base/Timeline';
import { TimelineData } from 'data/timelineData';
import React from 'react';

const OrderTrackingTimeline = ({ data }: { data: TimelineData[] }) => {
  return (
    <Timeline variant="vertical">
      {data.map((item, index) => (
        <Timeline.Item key={item.content.title}>
          <div
            className={classNames('row g-md-3 align-items-center', {
              'mb-8 mb-lg-10': index !== data.length - 1
            })}
          >
            <div className="col-12 col-md-auto d-flex">
              <Timeline.OppositeContent>
                <p className="fs-10 fw-semi-bold text-700 mb-0 text-end">
                  {item.oppositeContent.date}
                  <br className="d-none d-md-block" />{' '}
                  {item.oppositeContent.time}
                </p>
              </Timeline.OppositeContent>
              <Timeline.Separator className="position-relative">
                <Timeline.Dot className={item.separator.dotClass}>
                  <FontAwesomeIcon
                    icon={item.separator.icon}
                    className="text-white dark__text-white fs-10"
                  />
                </Timeline.Dot>
                {item.separator.barClass && (
                  <Timeline.Bar
                    style={{ height: 100 }}
                    className={item.separator.barClass}
                  />
                )}
              </Timeline.Separator>
            </div>
            <div className="col">
              <Timeline.Content>
                <h4>{item.content.title}</h4>
                <p className="fs-9 text-800 mb-0">{item.content.subtitle}</p>
              </Timeline.Content>
            </div>
          </div>
        </Timeline.Item>
      ))}
    </Timeline>
  );
};

export default OrderTrackingTimeline;
