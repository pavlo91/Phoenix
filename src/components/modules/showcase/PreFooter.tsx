import Logo from 'components/common/Logo';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const PreFooter = () => {
  return (
    <section className="bg-100 py-6">
      <div className="container-small">
        <Row className="align-items-center">
          <Col md={6} className="text-center text-md-start">
            <Logo className="flex-column flex-md-row mb-2" />
            <p className="pe-md-5">
              Thank you for downloading Phoenix to create, customize and grow
              with it! Enjoy Phoenix!
            </p>
          </Col>
          <Col md={6} className="d-lg-flex justify-content-lg-end text-center">
            <Link to="/documentation/getting-started" className="me-4">
              Documentation
            </Link>
            <Link to="mailto:support@themewagon.com" className="me-4">
              Support
            </Link>
            <Link to="/changelog">Changelog</Link>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default PreFooter;
