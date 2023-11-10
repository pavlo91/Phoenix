import { Col, Container, Row } from 'react-bootstrap';
import illustration31 from 'assets/phoenix/img/spot-illustrations/31.png';
import Button from 'components/base/Button';
import { Link } from 'react-router-dom';
import { importantApplications } from 'data/showcase';
import bg29 from 'assets/phoenix/img/bg/29.png';
import bg28 from 'assets/phoenix/img/bg/28.png';
import { useRef } from 'react';
import useParallaxHooks from 'hooks/useParallaxHooks';
import classNames from 'classnames';

const ImportantApplications = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const parallaxElRef = useRef<(HTMLDivElement | null)[]>([]);

  useParallaxHooks(containerRef, parallaxElRef);

  return (
    <section className="py-md-10" ref={containerRef}>
      <div
        className="bg-holder d-none d-lg-block"
        style={{
          backgroundImage: `url(${bg29})`,
          backgroundPosition: 'left 10%',
          backgroundSize: '15%'
        }}
        ref={el => parallaxElRef.current?.push(el)}
        data-parallax={JSON.stringify({ y: '40%' })}
      />

      <div
        className="bg-holder d-none d-lg-block"
        style={{
          backgroundImage: `url(${bg28})`,
          backgroundPosition: 'right 10%',
          backgroundSize: '15%'
        }}
        ref={el => parallaxElRef.current?.push(el)}
        data-parallax={JSON.stringify({ y: '50%' })}
      />

      <Container fluid="lg">
        <Row className="justify-content-center">
          <Col xs={12} lg={9} xl={8} xxl={6} className="text-center">
            <h2 className="mb-6 lh-lg">
              <span className="text-primary position-relative">
                Important applications
                <img
                  src={illustration31}
                  alt=""
                  className="text-illustration-underline"
                />
              </span>
              <span className="text-1000 fw-normal ms-2">
                you’re definitely gonna need
              </span>
            </h2>
          </Col>
        </Row>
        <Row>
          <Col xxl={8} className="mx-auto">
            <Row className="justify-content-center mt-11">
              {importantApplications.map(application => (
                <Col
                  xs={12}
                  lg={6}
                  className="mb-7 mb-lg-10 ms-auto"
                  key={application.title}
                >
                  <div className="text-center">
                    <div
                      className="mx-auto mb-7 mw-100"
                      style={{ width: '550px' }}
                    >
                      <div className="position-relative overflow-hidden">
                        <img
                          src={application.thumb}
                          alt=""
                          className={classNames('shadow rounded mw-100')}
                        />
                        {application.disable && (
                          <div className="coming-soon-badge">Coming soon</div>
                        )}
                      </div>
                    </div>
                    <h4 className="text-1000 mb-3">{application.title}</h4>
                    <p className="text-700 lh-sm pb-4">{application.details}</p>
                    <Button
                      as={Link}
                      target="_blank"
                      to={application.link}
                      disabled={application.disable}
                      variant="primary"
                      className={classNames({
                        disabled: application.disable
                      })}
                    >
                      {application.btnLabel}
                    </Button>
                  </div>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ImportantApplications;
