import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Form } from 'react-bootstrap';
import { Col, Row } from 'react-bootstrap';

const SettingsSocial = () => {
  return (
    <div className="mb-6">
      <h4 className="mb-4">Social</h4>
      <Row className="g-3">
        <Col xs={12} sm={6}>
          <div className="form-icon-container">
            <Form.Floating>
              <Form.Control
                id="facebook"
                type="text"
                placeholder="Facebook"
                className="form-icon-input"
              />
              <label htmlFor="facebook" className="form-icon-label text-700">
                FACEBOOK
              </label>
            </Form.Floating>
            <FontAwesomeIcon
              icon={['fab', 'facebook']}
              className="text-900 fs-9 form-icon"
            />
          </div>
        </Col>
        <Col xs={12} sm={6}>
          <div className="form-icon-container">
            <Form.Floating>
              <Form.Control
                id="twitter"
                type="text"
                placeholder="Twitter"
                className="form-icon-input"
              />
              <label htmlFor="twitter" className="form-icon-label text-700">
                TWITTER
              </label>
            </Form.Floating>
            <FontAwesomeIcon
              icon={['fab', 'twitter']}
              className="text-900 fs-9 form-icon"
            />
          </div>
        </Col>
        <Col xs={12} sm={6}>
          <div className="form-icon-container">
            <Form.Floating>
              <Form.Control
                id="linkedin"
                type="text"
                placeholder="Linkedin"
                className="form-icon-input"
              />
              <label htmlFor="linkedin" className="form-icon-label text-700">
                LINKEDIN
              </label>
            </Form.Floating>
            <FontAwesomeIcon
              icon={['fab', 'linkedin-in']}
              className="text-900 fs-9 form-icon"
            />
          </div>
        </Col>
        <Col xs={12} sm={6}>
          <div className="form-icon-container">
            <Form.Floating>
              <Form.Control
                id="youtube"
                type="text"
                placeholder="youtube"
                className="form-icon-input"
              />
              <label htmlFor="youtube" className="form-icon-label text-700">
                YOUTUBE
              </label>
            </Form.Floating>
            <FontAwesomeIcon
              icon={['fab', 'youtube']}
              className="text-900 fs-9 form-icon"
            />
          </div>
        </Col>
        <Col xs={12} sm={6}>
          <div className="form-icon-container">
            <Form.Floating>
              <Form.Control
                id="artstation"
                type="text"
                placeholder="Artstation"
                className="form-icon-input"
              />
              <label htmlFor="artstation" className="form-icon-label text-700">
                ARTSTATION
              </label>
            </Form.Floating>
            <FontAwesomeIcon
              icon={['fab', 'artstation']}
              className="text-900 fs-9 form-icon"
            />
          </div>
        </Col>
        <Col xs={12} sm={6}>
          <div className="form-icon-container">
            <Form.Floating>
              <Form.Control
                id="behance"
                type="text"
                placeholder="Behance"
                className="form-icon-input"
              />
              <label htmlFor="behance" className="form-icon-label text-700">
                BEHANCE
              </label>
            </Form.Floating>
            <FontAwesomeIcon
              icon={['fab', 'behance']}
              className="text-900 fs-9 form-icon"
            />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default SettingsSocial;
