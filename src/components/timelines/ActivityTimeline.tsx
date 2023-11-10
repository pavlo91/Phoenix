import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import Timeline from 'components/base/Timeline';
import { ActivityTimelineData } from 'data/project-management/activityTimelineData';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

interface ActivityTimelineProps {
  data: ActivityTimelineData[];
}

const ActivityTimeline = ({ data }: ActivityTimelineProps) => {
  return (
    <Timeline variant="vertical">
      {data.map((item, index) => (
        <Timeline.Item className="position-relative" key={item.id}>
          <Row className="g-md-3">
            <Col xs={12} md="auto" className="d-flex">
              <Timeline.OppositeContent>
                <p className="fs-10 fw-semi-bold text-600 text-end">
                  {item.oppositeContent.date}
                  <br className="d-none d-md-block" />{' '}
                  {item.oppositeContent.time}
                </p>
              </Timeline.OppositeContent>
              <Timeline.Separator className="position-md-relative">
                <Timeline.Dot className="bg-primary-100">
                  <FontAwesomeIcon
                    icon={item.separator.icon}
                    className="text-primary-600 fs-10 dark__text-primary-300"
                  />
                </Timeline.Dot>
                {index !== data.length - 1 && (
                  <Timeline.Bar className="h-100 border-dashed border-400" />
                )}
              </Timeline.Separator>
            </Col>
            <Col>
              <Timeline.Content>
                <h5 className="fs-9 lh-sm">{item.content.title}</h5>
                <p className="fs-9">
                  by{' '}
                  <Link className="fw-semi-bold" to="#!">
                    {item.content.user}
                  </Link>
                </p>
                <p
                  className={classNames('fs-9 text-800', {
                    'mb-5': index !== data.length - 1,
                    'mb-0': index === data.length - 1
                  })}
                >
                  {item.content.details}
                </p>
              </Timeline.Content>
            </Col>
          </Row>
        </Timeline.Item>
      ))}
    </Timeline>
  );
};

export default ActivityTimeline;
