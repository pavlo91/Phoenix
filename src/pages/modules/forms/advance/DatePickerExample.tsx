import PhoenixDocCard from 'components/base/PhoenixDocCard';
import DocPageHeader from 'components/docs/DocPageHeader';
import DocPagesLayout from 'layouts/DocPagesLayout';
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import DatePicker from 'components/base/DatePicker';

const datePickerCode = `
import DatePicker from 'components/base/DatePicker';

function DatePickerExample() {
  return(
    <DatePicker placeholder="Select Date" />
  )
}
`;
const timePickerCode = `
import DatePicker from 'components/base/DatePicker';

function TimePicker() {
  return(
    <DatePicker
      options={{
        enableTime: true,
        noCalendar: true,
        dateFormat: 'H:i'
      }}
      placeholder="Select Time"
      hideIcon={true}
    />
  )
}
`;
const dateAndTimePickerCode = `
import DatePicker from 'components/base/DatePicker';

function DateAndTimePicker() {
  return(
    <DatePicker
      options={{
        enableTime: true,
        dateFormat: 'M j, Y H:i',
      }}
      placeholder="Select date & time"
    />
  )
}
`;
const dateFormatCode = `
import DatePicker from 'components/base/DatePicker';

function DateFormat() {
  return(
    <DatePicker
      options={{
        enableTime: true,
        dateFormat: 'd-m-y h:i',
      }}
      placeholder="d-m-y h:i"
    />
  )
}
`;
const selectMultipleCode = `
import DatePicker from 'components/base/DatePicker';

function SelectMultiple() {
  return(
    <DatePicker
      options={{
        mode: "multiple",
        dateFormat: "Y-m-d"
      }}
      placeholder="Select multiple date"
    />
  )
}
`;
const rangeCalenderCode = `
import DatePicker from 'components/base/DatePicker';

function RangeCalender() {
  return(
    <DatePicker
      options={{
        mode: "range",
        minDate: "today",
        dateFormat: "Y-m-d",
        disable: [
            function(date) {
                // disable every multiple of 8
                return !(date.getDate() % 8);
            }
        ]
      }}
      placeholder="Select date"
    />
  )
}
`;

const DatePickerExample = () => {
  return (
    <div className="mb-9">
      <DocPageHeader
        title="React Flatpickr"
        description={`${process.env.REACT_APP_TITLE}-React uses React Flatpickr as datepicker. React Flatpickr is a simple and reusable Datepicker component for React.`}
        link={{
          text: 'React Flatpickr Documentation',
          url: 'https://github.com/Hacker0x01/react-datepicker'
        }}
      />
      <DocPagesLayout>
        <Row className="g-4">
          <Col md={6}>
            <PhoenixDocCard>
              <PhoenixDocCard.Header title="Date picker" />
              <PhoenixDocCard.Body
                code={datePickerCode}
                scope={{ DatePicker }}
              />
            </PhoenixDocCard>
          </Col>
          <Col md={6}>
            <PhoenixDocCard>
              <PhoenixDocCard.Header title="Time picker" />
              <PhoenixDocCard.Body
                code={timePickerCode}
                scope={{ DatePicker }}
              />
            </PhoenixDocCard>
          </Col>
          <Col md={6}>
            <PhoenixDocCard>
              <PhoenixDocCard.Header title="Date & Time picker" />
              <PhoenixDocCard.Body
                code={dateAndTimePickerCode}
                scope={{ DatePicker }}
              />
            </PhoenixDocCard>
          </Col>
          <Col md={6}>
            <PhoenixDocCard>
              <PhoenixDocCard.Header title="Date Format" />
              <PhoenixDocCard.Body
                code={dateFormatCode}
                scope={{ DatePicker }}
              />
            </PhoenixDocCard>
          </Col>
          <Col md={6}>
            <PhoenixDocCard>
              <PhoenixDocCard.Header title="Select multiple date" />
              <PhoenixDocCard.Body
                code={selectMultipleCode}
                scope={{ DatePicker }}
              />
            </PhoenixDocCard>
          </Col>
          <Col md={6}>
            <PhoenixDocCard>
              <PhoenixDocCard.Header title="Range calender" />
              <PhoenixDocCard.Body
                code={rangeCalenderCode}
                scope={{ DatePicker }}
              />
            </PhoenixDocCard>
          </Col>
        </Row>
      </DocPagesLayout>
    </div>
  );
};

export default DatePickerExample;
