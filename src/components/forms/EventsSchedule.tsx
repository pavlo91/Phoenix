import DatePicker from 'components/base/DatePicker';
import { Col, FloatingLabel, Form } from 'react-bootstrap';

const EventsSchedule = () => {
  return (
    <>
      <h4 className="mt-7">Schedule</h4>
      <Col sm={6}>
        <DatePicker
          render={(_, ref) => {
            return (
              <Form.Floating>
                <Form.Control
                  type="text"
                  placeholder="start date"
                  ref={ref}
                  id="startDatepicker"
                />
                <label htmlFor="startDatepicker" className="ps-6">
                  Start date
                </label>
              </Form.Floating>
            );
          }}
        />
      </Col>
      <Col sm={6}>
        <DatePicker
          render={(_, ref) => {
            return (
              <Form.Floating>
                <Form.Control
                  type="text"
                  placeholder="H:i"
                  ref={ref}
                  id="startTimepickerEvent"
                  className="ps-3"
                />
                <label htmlFor="startTimepickerEvent">Start Time</label>
              </Form.Floating>
            );
          }}
          hideIcon={true}
          options={{
            enableTime: true,
            noCalendar: true,
            dateFormat: 'H:i'
          }}
        />
      </Col>
      <Col sm={6}>
        <DatePicker
          render={(_, ref) => {
            return (
              <Form.Floating>
                <Form.Control
                  type="text"
                  placeholder="End date"
                  ref={ref}
                  id="endDatepicker"
                />
                <label htmlFor="endDatepicker" className="ps-6">
                  End date
                </label>
              </Form.Floating>
            );
          }}
        />
      </Col>
      <Col sm={6}>
        <DatePicker
          render={(_, ref) => {
            return (
              <Form.Floating>
                <Form.Control
                  type="text"
                  placeholder="H:i"
                  ref={ref}
                  id="endTimepickerEvent"
                  className="ps-3"
                />
                <label htmlFor="endTimepickerEvent">End Time</label>
              </Form.Floating>
            );
          }}
          hideIcon={true}
          options={{
            enableTime: true,
            noCalendar: true,
            dateFormat: 'H:i'
          }}
        />
      </Col>
      <Col sm={6}>
        <FloatingLabel controlId="floatingSelectTimeZone" label="city">
          <Form.Select>
            <option>Select time zone</option>
            <option value="1">Time zone One</option>
            <option value="2">Time zone Two</option>
            <option value="3">Time zone Three</option>
          </Form.Select>
        </FloatingLabel>
      </Col>
      <Col sm={6}>
        <DatePicker
          render={(_, ref) => {
            return (
              <Form.Floating>
                <Form.Control
                  type="text"
                  placeholder="registration deadline"
                  ref={ref}
                  id="registrationDatepicker"
                  className="ps-3"
                />
                <label htmlFor="registrationDatepicker">
                  registration deadline
                </label>
              </Form.Floating>
            );
          }}
          hideIcon={true}
        />
      </Col>
    </>
  );
};

export default EventsSchedule;
