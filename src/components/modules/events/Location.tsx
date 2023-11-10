import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'components/base/Button';
import Mapbox from 'components/base/MapBox';
import { Col, Row } from 'react-bootstrap';

const Location = () => {
  return (
    <div className="mb-8">
      <h3 className="mb-5 mb-xl-4">Location</h3>
      <div className="mb-3 mb-xl-4 location-map border overflow-hidden">
        <Mapbox
          className="border border-300 rounded-3"
          options={{
            center: [-74.0020158, 40.7228022],
            zoom: 14,
            scrollZoom: false
          }}
        />
      </div>
      <Row className="flex-between-center gx-0 gy-3">
        <Col xs={12} sm="auto" className="me-1">
          <div className="d-flex">
            <h5 className="fw-bold text-1000 me-2 mb-0">
              James Tiberius Auditorium
            </h5>
            <p className="mb-0 text-1000 fs-9">Vancouver</p>
          </div>
        </Col>
        <Col xs={12} sm="auto" xl={12}>
          <Button
            variant="phoenix-primary"
            className="w-100"
            startIcon={<FontAwesomeIcon icon="route" className="me-2" />}
          >
            Get directions
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default Location;
