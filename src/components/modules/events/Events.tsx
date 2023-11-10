import classNames from 'classnames';
import EventItem from 'components/list-items/EventItem';
import { Event } from 'data/eventsData';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

interface EventsProps {
  events: Event[];
  title: string;
  className?: string;
}

const Events = ({ events, title, className }: EventsProps) => {
  return (
    <>
      <Row
        className={classNames(
          className,
          'g-0 py-3 border-bottom border-dashed border-300 align-items-end justify-content-between'
        )}
      >
        <Col xs="auto">
          <h3 className="flex-1 mb-0 text-nowrap me-3">{title}</h3>
        </Col>
        <Col xs="auto">
          <Link to="#!" className="fw-bold fs-9">
            See more
          </Link>
        </Col>
      </Row>
      {events.map(event => (
        <EventItem event={event} key={event.id} />
      ))}
    </>
  );
};

export default Events;
