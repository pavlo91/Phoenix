import { Col, FloatingLabel, Form } from 'react-bootstrap';

const EventDetailsForm = () => {
  return (
    <>
      <h4 className="mb-0">Event Details</h4>
      <Col sm={6} md={12}>
        <FloatingLabel controlId="floatingEventInput" label="Event title">
          <Form.Control type="text" placeholder="Event title" />
        </FloatingLabel>
      </Col>
      <Col sm={6}>
        <FloatingLabel controlId="floatingSelectTask" label="type">
          <Form.Select>
            <option>Select event type</option>
            <option value="1">technical</option>
            <option value="2">external</option>
            <option value="3">organizational</option>
          </Form.Select>
        </FloatingLabel>
      </Col>
      <Col sm={6}>
        <FloatingLabel controlId="floatingSelectPrivacy" label="topic">
          <Form.Select>
            <option>Select topic</option>
            <option value="1">Data Privacy One</option>
            <option value="2">Data Privacy Two</option>
            <option value="3">Data Privacy Three</option>
          </Form.Select>
        </FloatingLabel>
      </Col>
      <Col xs={12} className="mt-4">
        <Form.Check type="radio" id="online" className="form-check-inline">
          <Form.Check.Input
            type="radio"
            name="statusRadio"
            value="option1"
            defaultChecked
          />
          <Form.Check.Label htmlFor="online">Online</Form.Check.Label>
        </Form.Check>
        <Form.Check type="radio" id="offline" className="form-check-inline">
          <Form.Check.Input type="radio" name="statusRadio" value="option2" />
          <Form.Check.Label htmlFor="offline">Offline</Form.Check.Label>
        </Form.Check>
        <Form.Check type="radio" id="both" className="form-check-inline">
          <Form.Check.Input type="radio" name="statusRadio" value="option3" />
          <Form.Check.Label htmlFor="both">Both</Form.Check.Label>
        </Form.Check>
      </Col>
      <Col sm={6} md={12} className="gy-1">
        <FloatingLabel controlId="floatingVenueInput" label="Venue">
          <Form.Control type="text" placeholder="Venue" />
        </FloatingLabel>
      </Col>
      <Col sm={6} md={4} className="gy-sm-1 gy-md-4">
        <FloatingLabel controlId="floatingSelectCountry" label="country">
          <Form.Select>
            <option>Select Country</option>
            <option value="1">Country One</option>
            <option value="2">Country Two</option>
            <option value="3">Country Three</option>
          </Form.Select>
        </FloatingLabel>
      </Col>
      <Col sm={6} md={4}>
        <FloatingLabel controlId="floatingSelectState" label="state">
          <Form.Select>
            <option>Select State</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
        </FloatingLabel>
      </Col>
      <Col sm={6} md={4}>
        <FloatingLabel controlId="floatingSelectCity" label="city">
          <Form.Select>
            <option>Select city</option>
            <option value="1">Data Privacy One</option>
            <option value="2">Data Privacy Two</option>
            <option value="3">Data Privacy Three</option>
          </Form.Select>
        </FloatingLabel>
      </Col>
    </>
  );
};

export default EventDetailsForm;
