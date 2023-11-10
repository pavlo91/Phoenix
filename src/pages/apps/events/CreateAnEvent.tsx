import Button from 'components/base/Button';
import PageBreadcrumb from 'components/common/PageBreadcrumb';
import EventCustomFields from 'components/forms/EventCustomFields';
import EventDescriptionForm from 'components/forms/EventDescriptionForm';
import EventDetailsForm from 'components/forms/EventDetailsForm';
import EventTicketPricing from 'components/forms/EventTicketPricing';
import EventsSchedule from 'components/forms/EventsSchedule';
import { defaultBreadcrumbItems } from 'data/commonData';
import { Col, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CreateAnEvent = () => {
  return (
    <div>
      <PageBreadcrumb items={defaultBreadcrumbItems} />
      <Form className="mb-9">
        <Row className="justify-content-between align-items-end g-3 mb-5">
          <Col xs={12} sm="auto" xl={8}>
            <h2 className="mb-0">Create an Event</h2>
          </Col>
          <Col xs={12} sm="auto" xl={4}>
            <div className="d-flex">
              <Button
                className="px-5 me-2"
                variant="phoenix-primary"
                type="button"
              >
                Save
              </Button>
              <Button
                variant="primary"
                as={Link}
                to="/apps/events/event-details"
                className="px-5 w-100 text-nowrap"
              >
                Publish Event
              </Button>
            </div>
          </Col>
        </Row>
        <Row className="g-5">
          <Col xl={8}>
            <Row className="gx-3 gy-4">
              <EventDetailsForm />
              <EventsSchedule />
              <EventDescriptionForm />
            </Row>
          </Col>
          <Col xl={4}>
            <div className="border-bottom pb-6 mb-6">
              <h4 className="mb-4">Privacy</h4>
              <Form.Check type="radio" id="privacy1" className="mb-2">
                <Form.Check.Input
                  type="radio"
                  name="vrivacyRadio"
                  value="option1"
                  defaultChecked
                />
                <Form.Check.Label className="fw-normal" htmlFor="privacy1">
                  On Phoenix, our distribution partners, and search engines,{' '}
                  <br />
                  anybody can find the event
                </Form.Check.Label>
              </Form.Check>
              <Form.Check type="radio" id="privacy2" className="mb-0">
                <Form.Check.Input
                  type="radio"
                  name="vrivacyRadio"
                  value="option1"
                />
                <Form.Check.Label className="fw-normal" htmlFor="privacy2">
                  Only the individuals you select have access to it.
                </Form.Check.Label>
              </Form.Check>
            </div>
            <div className="border-bottom mb-6">
              <Form.Check type="checkbox" id="flexChecked">
                <Form.Check.Input
                  type="checkbox"
                  value="option1"
                  defaultChecked
                />
                <Form.Check.Label
                  className="fw-bold fs-8 mb-5"
                  htmlFor="flexChecked"
                >
                  Show the number of available tickets
                </Form.Check.Label>
              </Form.Check>
            </div>
            <EventTicketPricing />
            <EventCustomFields />
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default CreateAnEvent;
