import Button from 'components/base/Button';
import SocialProfileCard from 'components/cards/SocialProfileCard';
import SettingsChangePassword from 'components/forms/SettingsChangePassword';
import SettingsCompanyInfo from 'components/forms/SettingsCompanyInfo';
import SettingsPersonalInfo from 'components/forms/SettingsPersonalInfo';
import SettingsSocial from 'components/forms/SettingsSocial';
import SocialSettingsSideBar from 'components/modules/social/SocialSettingsSideBar';
import { Col, Row } from 'react-bootstrap';
import profileImage from 'assets/phoenix/img/team/20.webp';

const Settings = () => {
  return (
    <div className="mb-9">
      <Row className="g-6">
        <Col xs={12} xl={4}>
          <SocialProfileCard avatar={profileImage} />
          <SocialSettingsSideBar />
        </Col>
        <Col xs={12} xl={8}>
          <div className="border-bottom border-300 mb-4">
            <SettingsPersonalInfo />
            <Row className="gx-3 mb-6 gy-6 gy-sm-3">
              <Col xs={12} sm={6}>
                <SettingsCompanyInfo />
              </Col>
              <Col xs={12} sm={6}>
                <SettingsChangePassword />
              </Col>
            </Row>
            <SettingsSocial />
            <div className="text-end mb-6">
              <Button variant="phoenix-secondary" className="me-2">
                Cancel Changes
              </Button>
              <Button variant="phoenix-primary">Save Information</Button>
            </div>
          </div>
          <Row className="gy-5">
            <Col xs={12} md={6}>
              <h4 className="text-black">Transfer Ownership</h4>
              <p className="text-700">
                Transfer this account to another person or to a company
                repository.
              </p>
              <Button variant="phoenix-warning">Transfer</Button>
            </Col>
            <Col xs={12} md={6}>
              <h4 className="text-black">Account Deletion</h4>
              <p className="text-700">
                Transfer this account to another person or to a company
                repository.
              </p>
              <Button variant="phoenix-danger">Delete account</Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default Settings;
