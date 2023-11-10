import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'components/base/Button';
import Section from 'components/base/Section';
import EcoimDefaultAddressCard from 'components/cards/EcoimDefaultAddressCard';
import EcomProfileCard from 'components/cards/EcomProfileCard';
import PageBreadcrumb from 'components/common/PageBreadcrumb';
import ProfileDetailsTab from 'components/modules/e-commerce/profile/ProfileDetailsTab';
import { defaultBreadcrumbItems } from 'data/commonData';
import { Col, Row } from 'react-bootstrap';

const Profile = () => {
  return (
    <div className="pt-5 mb-9">
      <Section small className="py-0">
        <PageBreadcrumb items={defaultBreadcrumbItems} />
        <Row className="align-items-center justify-content-between g-3 mb-4">
          <Col xs="auto">
            <h2 className="mb-0">Profile</h2>
          </Col>
          <Col xs="auto" className="d-flex flex-wrap gap-2 gap-sm-3">
            <Button
              variant="phoenix-danger"
              startIcon={<FontAwesomeIcon className="me-2" icon="trash-alt" />}
            >
              Delete customer
            </Button>
            <Button
              variant="phoenix-secondary"
              startIcon={<FontAwesomeIcon className="me-2" icon="key" />}
            >
              Reset password
            </Button>
          </Col>
        </Row>
        <Row className="g-3 mb-6">
          <Col xs={12} lg={8}>
            <EcomProfileCard />
          </Col>
          <Col xs={12} lg={4}>
            <EcoimDefaultAddressCard />
          </Col>
        </Row>
        <ProfileDetailsTab />
      </Section>
    </div>
  );
};

export default Profile;
