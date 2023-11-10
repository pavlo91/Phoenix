import TestimonialCarousel from 'components/sliders/TestimonialCarousel';
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import bg12 from 'assets/phoenix/img/bg/bg-12.png';
import bg13 from 'assets/phoenix/img/bg/13.png';

const Testimonial = () => {
  return (
    <div className="bg-soft position-relative py-18">
      <div
        className="position-absolute h-100 w-100 top-0 bg-white"
        style={{ transform: 'skew(0,-10deg)' }}
      />
      <div
        className="bg-holder z-index-2 d-none d-md-block"
        style={{
          backgroundImage: `url(${bg13})`,
          backgroundSize: 'auto',
          backgroundPosition: 'right'
        }}
      />
      <div
        className="bg-holder z-index-2 d-none d-md-block d-lg-none d-xl-block"
        style={{
          backgroundImage: `url(${bg12})`,
          backgroundSize: 'auto',
          backgroundPosition: 'left'
        }}
      />

      <section className="overflow-hidden position-static">
        <div className="container-small px-lg-7 px-xxl-3">
          <Row>
            <Col lg={6} className="text-center text-lg-start z-index-2">
              <div>
                <h4 className="text-primary fw-bolder mb-3">Testimonial</h4>
                <h2 className="mb-3 text-black">
                  More than 2 Millions happy
                  <br />
                  Customers and counting
                </h2>
                <p className="mb-5">
                  You may now concentrate on the functionality and other{' '}
                  <br className="d-none d-sm-block" />
                  aspects of your web products thanks to Phoenix's strength
                  <br className="d-none d-sm-block" />0 before leaving the UI
                  design to us. It is simple to complete
                  <br className="d-none d-sm-block" />
                  the work after checking and double-checking.
                </p>
              </div>
            </Col>
            <Col lg={6} className="z-index-2">
              <TestimonialCarousel />
            </Col>
          </Row>
        </div>
      </section>
    </div>
  );
};

export default Testimonial;
