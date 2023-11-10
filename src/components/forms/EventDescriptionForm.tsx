import Dropzone from 'components/base/Dropzone';
import ReactSelect from 'components/base/ReactSelect';
import { Col, FloatingLabel, Form } from 'react-bootstrap';

const options = [
  { value: 'MUSIC', label: 'music' },
  { value: 'CONCEERT', label: 'conceert' },
  { value: 'GREATEST SHOW ON EARTH', label: 'greatest-show-on-earth' }
];

const EventDescriptionForm = () => {
  return (
    <>
      <Col xs={12} className="gy-6">
        <FloatingLabel controlId="eventDescription" label="Description">
          <Form.Control
            as="textarea"
            placeholder="Description"
            style={{ height: '128px' }}
          />
        </FloatingLabel>
      </Col>
      <Col sm={6} className="gy-6">
        <FloatingLabel controlId="floatingOrganizersInput" label="ORGANIZERS">
          <Form.Control type="text" placeholder="ORGANIZERS" />
        </FloatingLabel>
      </Col>
      <Col sm={6} className="gy-6">
        <FloatingLabel controlId="floatingSponsorsInput" label="SPONSORS">
          <Form.Control type="text" placeholder="SPONSORS" />
        </FloatingLabel>
      </Col>
      <Col xs={12} className="gy-6">
        <Dropzone
          accept={{
            'image/*': ['.png', '.gif', '.jpeg', '.jpg']
          }}
        />
      </Col>
      <Col xs={12} className="gy-6">
        <ReactSelect
          options={options}
          isMulti
          placeholder="Add tags"
          styles={{
            control: baseStyles => ({
              ...baseStyles,
              height: '128px',
              alignItems: 'start'
            }),
            dropdownIndicator: baseStyles => ({
              ...baseStyles,
              display: 'none'
            })
          }}
        />
      </Col>
    </>
  );
};

export default EventDescriptionForm;
