import PageBreadcrumb from 'components/common/PageBreadcrumb';
import { defaultBreadcrumbItems } from 'data/commonData';
import coverImg from 'assets/phoenix/img/generic/34.png';
import { Col, Row } from 'react-bootstrap';
import EventTitleCard from 'components/cards/EventTitleCard';
import ResponsesAndShare from 'components/modules/events/ResponsesAndShare';
import Location from 'components/modules/events/Location';
import Badge from 'components/base/Badge';
import Events from 'components/modules/events/Events';
import EventsSingersSection from 'components/modules/events/EventsSingersSection';
import EventsTopicCovered from 'components/list-items/EventsTopicCovered';
import EventsOrganized from 'components/modules/events/EventsOrganized';
import { SingerPhotos, events } from 'data/eventsData';

const EventDetail = () => {
  return (
    <div className="pb-9">
      <PageBreadcrumb items={defaultBreadcrumbItems} />
      <h2 className="mb-4 mb-lg-6">Event details</h2>
      <img
        src={coverImg}
        alt=""
        className="rounded w-100 fit-cover mb-5 mb-md-6 mb-xl-8"
        style={{ minHeight: '250px' }}
      />
      <Row className="gx-lg-9">
        <Col xl={8} className="border-end-xl border-300">
          <EventTitleCard />
          <h2 className="mb-3">About this event</h2>
          <p className="text-justify text-800 mb-6 mb-xxl-8">
            The Festival Season hopes to continue its rescheduled events in 2023
            during the spring block. This will be a continuation of the
            tradition for the loyal fanbase to watch a jam-packed day full of
            exciting top-notch performances. With a unique lineup, you’ll know
            what to expect and get ready to embrace the festivity. Moreover,
            we’ve added a detailed list of the performers, with details of
            dates, lineups and prospective entry requirements. We will keep you
            posted with necessary updates regarding the event.
          </p>
          <EventsSingersSection photos={SingerPhotos} />
          <EventsTopicCovered />
          <h4 className="mb-3 text-1000 fs-xxl-6">Refund Policy:</h4>
          <ul className="mb-6 ps-4">
            <li>Contact the organizer to request a refund.</li>
            <li>Eventbrite’s fee is nonrefundable.</li>
          </ul>
          <ResponsesAndShare />
        </Col>
        <Col xl={4}>
          <EventsOrganized />
          <Location />
          <h3 className="mb-3">Tags</h3>
          <div className="d-flex flex-wrap mb-8">
            <Badge variant="tag" className="me-2">
              Music
            </Badge>
            <Badge variant="tag" className="me-2">
              CONCERT
            </Badge>
            <Badge variant="tag">Greatest show on earth</Badge>
          </div>
          <div className="border-top border-200">
            <Events events={events} title="Upcoming events" />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default EventDetail;
