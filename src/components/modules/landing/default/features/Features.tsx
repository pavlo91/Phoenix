import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'components/base/Button';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import boltIlls from 'assets/phoenix/img/icons/illustrations/bolt.png';
import pie from 'assets/phoenix/img/icons/illustrations/pie.png';
import { defaultFeatures } from 'data/landing/default-landing-data';
import FeatureSection from './FeatureSection';

const Features = () => {
  return (
    <section className="bg-soft pt-15 pb-18" id="features">
      <div className="container-small px-lg-7 px-xxl-3">
        <div className="position-relative z-index-2">
          <Row className="mb-12">
            <Col lg={6} className="text-center text-lg-start pe-xxl-3">
              <h4 className="text-primary fw-bolder mb-4">Features</h4>
              <h2 className="mb-3 text-black lh-base">
                A fully integrated suite
                <br />
                of payments products
              </h2>
              <p className="mb-5">
                With the power of Phoenix, you can now focus only on
                functionaries for your digital products, while leaving the UI
                design on us!With the power of Phoenix, you can now focus only
                on functionaries for your digital products, while leaving the UI
                design on us!
              </p>
              <Button
                as={Link}
                to="#!"
                size="lg"
                variant="outline-primary"
                className="rounded-pill me-2"
                endIcon={
                  <FontAwesomeIcon icon="angle-right" className="ms-2" />
                }
              >
                Find out more
              </Button>
            </Col>
            <Col sm={6} lg={3} className="mt-7 text-center text-lg-start">
              <div className="h-100 d-flex flex-column justify-content-between">
                <div className="border-start-lg border-dashed ps-4">
                  <img
                    className="mb-4"
                    src={boltIlls}
                    width={48}
                    height={48}
                    alt=""
                  />
                  <div>
                    <h5 className="fw-bolder mb-2">Lightning Speed</h5>
                    <p className="fw-semi-bold lh-sm">
                      Present everything you need in one place within minutes!
                      Grow with Phoenix!
                    </p>
                  </div>
                  <Link to="#!" className="me-2 p-0 fs-9 fw-bold">
                    Check Demo
                    <FontAwesomeIcon icon="angle-right" className="ms-2" />
                  </Link>
                </div>
              </div>
            </Col>
            <Col sm={6} lg={3} className="mt-7 text-center text-lg-start">
              <div className="h-100 d-flex flex-column">
                <div className="border-start-lg border-dashed ps-4">
                  <img
                    className="mb-4"
                    src={pie}
                    width={48}
                    height={48}
                    alt=""
                  />
                  <div>
                    <h5 className="fw-bolder mb-2">All-in-one solution</h5>
                    <p className="fw-semi-bold lh-sm">
                      Show your production and growth graph in one place with
                      Phoenix!
                    </p>
                  </div>
                  <Link to="#!" className="me-2 p-0 fs-9 fw-bold">
                    Check Demo
                    <FontAwesomeIcon icon="angle-right" className="ms-2" />
                  </Link>
                </div>
              </div>
            </Col>
          </Row>

          {defaultFeatures.map((feature, index) => (
            <FeatureSection
              key={feature.label}
              feature={feature}
              orderReverse={index === 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
