import { Col, Row } from 'react-bootstrap';
import HelpCenter from './HelpCenter';
import QueryForm from './QueryForm';
import Mapbox from 'components/base/MapBox';

const AddressSection = () => {
  return (
    <section>
      <div className="container-small px-lg-7 px-xxl-3">
        <div className="mb-4">
          <h4 className="text-primary fw-bolder mb-3">Address</h4>
          <h2>If you need to find us:</h2>
        </div>

        <Row className="mb-3 text-center text-sm-start">
          <Col md={6}>
            <p>
              Do not lose your potential customers to others. Tell them exactly
              where you are with Geolocation enabled Phoenix admin dashboard. No
              need to take the burden of communicating directly.
            </p>
          </Col>
          <Col md={6}>
            <p>
              You can easily tell your customers where to find you with a
              precise location map. Getting closer was never easier!
            </p>
          </Col>
        </Row>
        <div className="mb-15">
          <Mapbox
            className="rounded-4"
            style={{ height: 380 }}
            options={{
              center: [-74.0020158, 40.7228022],
              zoom: 14,
              scrollZoom: false
            }}
          />
        </div>
        <Row className="g-5 g-lg-5">
          <Col
            xs={12}
            md={6}
            className="mb-5 mb-md-0 text-center text-md-start"
          >
            <HelpCenter />
          </Col>
          <Col xs={12} md={6} className="text-center text-md-start">
            <QueryForm />
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default AddressSection;
