import { Container, Row, Col } from 'react-bootstrap';
import thumbsUpIcon from 'assets/phoenix/img/icons/thumbs-up.png';
import bg26 from 'assets/phoenix/img/bg/26.png';
import section63 from 'assets/phoenix/img/sections/63.webp';
import { useRef } from 'react';
import useParallaxHooks from 'hooks/useParallaxHooks';

const Feature = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const parallaxElRef = useRef<HTMLDivElement | null>(null);

  useParallaxHooks(containerRef, parallaxElRef);

  return (
    <section
      className="overflow-hidden py-0"
      style={{
        background: 'linear-gradient(94.41deg, #193D91 -6.4%, #091F51 105.25%)'
      }}
      ref={containerRef}
    >
      <div
        className="bg-holder gsap-parallax opacity-50"
        style={{
          backgroundImage: `url(${bg26})`,
          backgroundPosition: '14%',
          backgroundSize: 'contain',
          height: '150%'
        }}
        ref={parallaxElRef}
        data-parallax={JSON.stringify({ y: '-40%' })}
      />
      <Container className="container-small position-relative py-8">
        <Row className="align-items-center gx-xxl-13">
          <Col lg={6} className="mb-6 z-index-1">
            <img src={section63} alt="" className="mw-100" />
          </Col>
          <Col lg={6}>
            <h1 className="text-soft fw-normal mb-4 text-center text-lg-start">
              Coded for
              <br className="d-none d-lg-block d-xl-none" />
              <span className="text-primary-300 ms-2 fw-bolder">
                any screen size
                <img src={thumbsUpIcon} alt="" className="mb-2 ms-2" />
              </span>
            </h1>
            <p className="text-200 text-center text-lg-start">
              Built with all top-notch technologies, this admin dashboard is
              fully responsive, and the clean codebase helps it to stay intact
              without breaking down the layout around any device or screen size
              or web browser.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Feature;
