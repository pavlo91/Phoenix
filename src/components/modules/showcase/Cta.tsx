import React from 'react';
import { Col, Row } from 'react-bootstrap';
import spotIllustration33 from 'assets/phoenix/img/spot-illustrations/33-s.webp';
import spotIllustration31 from 'assets/phoenix/img/spot-illustrations/31.png';
import Button from 'components/base/Button';
import { Link } from 'react-router-dom';

const Cta = () => {
  return (
    <section>
      <div className="container-small">
        <Row className="flex-center">
          <Col xs={12} lg={9} xl={7} className="pt-4 pb-11">
            <div className="text-center">
              <img
                src={spotIllustration33}
                className="mw-100 mb-6"
                width="422"
                alt=""
              />
              <h2 className="mb-8 text-1000 fw-normal">
                Still have questions? We are
                <span className="text-primary position-relative fw-bolder ms-2">
                  happy to help
                  <img
                    src={spotIllustration31}
                    className="w-100 text-illustration-underline"
                    alt=""
                  />
                </span>
              </h2>
              <Button
                as={Link}
                to="mailto:support@themewagon.com"
                className="btn-lg btn-primary"
              >
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="me-2 mb-1"
                    width="13"
                    height="12"
                    viewBox="0 0 13 12"
                    fill="none"
                  >
                    <path
                      d="M12.9 5.76484C12.9 8.63984 10.025 10.9648 6.5 10.9648C5.55 10.9648 4.675 10.8148 3.875 10.5398C3.6 10.7398 3.1 11.0398 2.525 11.2898C1.925 11.5648 1.2 11.7648 0.5 11.7648C0.325 11.7648 0.175 11.6898 0.125 11.5398C0.0499999 11.3898 0.0999999 11.2148 0.2 11.0898C0.225 11.0898 0.225 11.0648 0.25 11.0398C0.275 11.0148 0.325 10.9648 0.375 10.9148C0.475 10.7898 0.6 10.5898 0.75 10.3648C1 9.96484 1.225 9.41484 1.275 8.78984C0.525 7.93984 0.0999999 6.91484 0.0999999 5.76484C0.0999999 2.91484 2.95 0.564844 6.5 0.564844C10.025 0.564844 12.9 2.91484 12.9 5.76484Z"
                      fill="white"
                    />
                  </svg>
                  Give us a knock
                </span>
              </Button>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Cta;
