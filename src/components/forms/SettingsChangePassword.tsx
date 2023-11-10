import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Form } from 'react-bootstrap';

const SettingsChangePassword = () => {
  return (
    <>
      <h4 className="mb-4">Change Password</h4>
      <div className="form-icon-container mb-3">
        <Form.Floating>
          <Form.Control
            id="oldPassword"
            type="password"
            placeholder="Old Password"
            className="form-icon-input"
          />
          <label htmlFor="oldPassword" className="form-icon-label text-700">
            OLD PASSWORD
          </label>
        </Form.Floating>
        <FontAwesomeIcon icon="lock" className="text-900 fs-9 form-icon" />
      </div>
      <div className="form-icon-container mb-3">
        <Form.Floating>
          <Form.Control
            id="newPassword"
            type="password"
            placeholder="New password"
            className="form-icon-input"
          />
          <label htmlFor="newPassword" className="form-icon-label text-700">
            NEW PASSWORD
          </label>
        </Form.Floating>
        <FontAwesomeIcon icon="key" className="text-900 fs-9 form-icon" />
      </div>
      <div className="form-icon-container">
        <Form.Floating>
          <Form.Control
            id="newPassword2"
            type="password"
            placeholder="Confirm New password"
            className="form-icon-input"
          />
          <label htmlFor="newPassword2" className="form-icon-label text-700">
            CONFIRM NEW PASSWORD
          </label>
        </Form.Floating>
        <FontAwesomeIcon icon="key" className="text-900 fs-9 form-icon" />
      </div>
    </>
  );
};

export default SettingsChangePassword;
