import { Col, Row } from 'react-bootstrap';
import bg12 from 'assets/phoenix/img/bg/bg-1-2.png';
import bg28 from 'assets/phoenix/img/bg/bg-28.png';
import bg29 from 'assets/phoenix/img/bg/bg-29.png';
import bg30 from 'assets/phoenix/img/bg/bg-30.png';
import bg31 from 'assets/phoenix/img/bg/bg-31.png';
import bg23 from 'assets/phoenix/img/bg/bg-23.png';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'components/base/Button';

const HeroHeader = () => {
  return (
    <section className="pb-8" id="home">
      <div className="container-small hero-header-container px-lg-7 px-xxl-3">
        <Row className="align-items-center">
          <Col
            xs={12}
            lg="auto"
            className="text-end order-0 order-md-1 order-1"
          >
            <div className="position-relative p-5 p-md-7 d-lg-none">
              <div
                className="bg-holder banner-bg"
                style={{
                  backgroundImage: `url(${bg23})`,
                  backgroundSize: 'contain'
                }}
              />
              <div className="position-relative">
                <img
                  className="w-100 shadow-lg d-dark-none rounded-2"
                  src={bg31}
                  alt="hero-header"
                />
                <img
                  className="w-100 shadow-lg d-light-none rounded-2"
                  src={bg30}
                  alt="hero-header"
                />
              </div>
            </div>
            <div className="hero-image-container position-absolute top-0 bottom-0 end-0 d-none d-lg-block">
              <div className="position-relative h-100 w-100">
                <div className="position-absolute h-100 top-0 d-flex align-items-center end-0 hero-image-container-bg">
                  <img
                    className="pt-7 pt-md-0 w-100"
                    src={bg12}
                    alt="hero-header"
                  />
                </div>
                <div className="position-absolute h-100 top-0 d-flex align-items-center end-0">
                  <img
                    className="pt-7 pt-md-0 w-100 shadow-lg d-dark-none rounded-2"
                    src={bg28}
                    alt="hero-header"
                  />
                  <img
                    className="pt-7 pt-md-0 w-100 shadow-lg d-light-none rounded-2"
                    src={bg29}
                    alt="hero-header"
                  />
                </div>
              </div>
            </div>
          </Col>
          <Col
            xs={12}
            lg={6}
            className="text-lg-start text-center pt-8 pb-6 order-0 position-relative"
          >
            <div>
              <h1 className="fs-3 fs-lg-2 fs-md-1 fs-lg-2 fs-xl-1 fw-black mb-4">
                <span className="text-primary me-3">Elegance</span>for
                <br />
                your web app
              </h1>
              <p className="mb-5">
                Standard, modern and Elegant solution for your next web app so
                you don’t have to look further. Sign up or check the demo below.
              </p>
              <Link
                to="#!"
                className="btn btn-lg btn-primary rounded-pill me-3"
              >
                Sign up
              </Link>
              <Button
                as={Link}
                variant="link"
                to="#!"
                className="me-2 fs-8 p-0 text-decoration-none"
              >
                Check Demo
                <FontAwesomeIcon icon="angle-right" className="ms-2 fs-9" />
              </Button>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default HeroHeader;
