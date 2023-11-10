import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Col, Form, Row } from 'react-bootstrap';

const SettingsPersonalInfo = () => {
  return (
    <div className="mb-6">
      <h4 className="mb-4">Personal Information</h4>
      <Row className="g-3">
        <Col xs={12} sm={6}>
          <div className="form-icon-container">
            <Form.Floating>
              <Form.Control
                id="firstName"
                type="text"
                placeholder="First Name"
                className="form-icon-input"
              />
              <label htmlFor="firstName" className="form-icon-label text-700">
                FIRST NAME
              </label>
            </Form.Floating>
            <FontAwesomeIcon icon="user" className="text-900 fs-9 form-icon" />
          </div>
        </Col>
        <Col xs={12} sm={6}>
          <div className="form-icon-container">
            <Form.Floating>
              <Form.Control
                id="lastName"
                type="text"
                placeholder="Last Name"
                className="form-icon-input"
              />
              <label htmlFor="lastName" className="form-icon-label text-700">
                LAST NAME
              </label>
            </Form.Floating>
            <FontAwesomeIcon icon="user" className="text-900 fs-9 form-icon" />
          </div>
        </Col>
        <Col xs={12} sm={6}>
          <div className="form-icon-container">
            <Form.Floating>
              <Form.Control
                id="email"
                type="email"
                placeholder="Enter your email"
                className="form-icon-input"
              />
              <label htmlFor="email" className="form-icon-label text-700">
                ENTER YOUR EMAIL
              </label>
            </Form.Floating>
            <FontAwesomeIcon
              icon="envelope"
              className="text-900 fs-9 form-icon"
            />
          </div>
        </Col>
        <Col xs={12} sm={6}>
          <div className="form-icon-container">
            <Form.Floating>
              <Form.Control
                id="phone"
                type="tel"
                placeholder="Enter your phone"
                className="form-icon-input"
              />
              <label htmlFor="phone" className="form-icon-label text-700">
                ENTER YOUR PHONE
              </label>
            </Form.Floating>
            <FontAwesomeIcon icon="phone" className="text-900 fs-9 form-icon" />
          </div>
        </Col>
        <Col xs={12} sm={6}>
          <div className="form-icon-container">
            <Form.Floating>
              <Form.Control
                id="info"
                as="textarea"
                style={{ height: '115px' }}
                type="text"
                placeholder="info"
                className="form-icon-input"
              />
              <label htmlFor="lastName" className="form-icon-label text-700">
                INFO
              </label>
            </Form.Floating>
            <FontAwesomeIcon
              icon="circle-info"
              className="text-900 fs-9 form-icon"
            />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default SettingsPersonalInfo;
