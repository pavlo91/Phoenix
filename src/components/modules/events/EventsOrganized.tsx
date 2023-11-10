import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'components/base/Button';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import brandImg from 'assets/phoenix/img/brand2/b.png';

const EventsOrganized = () => {
  return (
    <>
      <h3 className="mb-5 mb-xl-4">Organized by</h3>
      <Row className="g-2 mb-6 align-items-center">
        <Col xs="auto">
          <img
            src={brandImg}
            alt=""
            className="rounded img-fluid"
            width="40"
            height="40"
          />
        </Col>
        <Col sm="auto" className="flex-1">
          <Link to="#!" className="mb-0 text-primary fw-semi-bold lh-sm">
            Bass Events, Inc.
          </Link>
        </Col>
        <Col sm="auto" xl={12} xxl="auto">
          <Button variant="link" className="text-900 p-0 me-2">
            10k Followers
          </Button>
          <Button
            variant="phoenix-primary"
            className="px-3"
            startIcon={<FontAwesomeIcon icon="user-plus" className="me-2" />}
          >
            Follow
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default EventsOrganized;
