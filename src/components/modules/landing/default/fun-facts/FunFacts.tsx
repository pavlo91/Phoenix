import React, { LegacyRef } from 'react';
import { Col, Row } from 'react-bootstrap';
import bg13 from 'assets/phoenix/img/bg/bg-13.png';
import bgRight21 from 'assets/phoenix/img/bg/bg-right-21.png';
import bgLeft21 from 'assets/phoenix/img/bg/bg-left-21.png';
import capterra from 'assets/phoenix/img/generic/capterra.png';
import CountUp from 'react-countup';

const FunFacts = () => {
  return (
    <div className="pb-15">
      <div className="position-relative py-18">
        <div
          className="bg-holder z-index-1 world-map-bg"
          style={{
            transform: 'skew(0,-10deg)',
            backgroundImage: `url(${bg13})`
          }}
        />
        <div
          className="bg-holder z-index-2 opacity-25"
          style={{
            backgroundImage: `url(${bgRight21})`,
            backgroundSize: 'auto',
            backgroundPosition: 'right'
          }}
        />
        <div
          className="bg-holder z-index-2 mt-9 opacity-25"
          style={{
            backgroundImage: `url(${bgLeft21})`,
            backgroundSize: 'auto',
            backgroundPosition: 'left'
          }}
        />

        <section className="overflow-hidden z-index-2">
          <div className="container-small light px-lg-7 px-xxl-3">
            <div className="position-relative">
              <Row className="row mb-6">
                <div className="col-xl-6 text-center text-md-start">
                  <h2 className="text-white mb-2">
                    Being used by millions of users
                  </h2>
                  <h1 className="fs-md-3 fs-xl-2 fw-black text-gradient-info text-uppercase mb-4 mb-md-0">
                    WORLDWIDE
                  </h1>
                </div>
                <div className="col-xl-6 text-center text-md-start">
                  <p className="text-white">
                    You can get all the reports, data analysis, and growth maps
                    you need with the help of Phoenix's power, and you may
                    review and modify them whenever you want. These features
                    make this dashboard outstanding.
                  </p>
                </div>
              </Row>

              <Row>
                <Col xl={8} className="text-center text-md-start mb-6 mb-xl-0">
                  <div className="d-md-flex justify-content-md-between">
                    <div className="mb-6 mb-md-0 me-4">
                      <CountUp
                        end={125}
                        duration={5}
                        suffix="+"
                        enableScrollSpy
                      >
                        {({ countUpRef }) => (
                          <div>
                            <h1
                              className="display-1 text-white fw-bolder"
                              ref={countUpRef as LegacyRef<HTMLHeadingElement>}
                            />
                          </div>
                        )}
                      </CountUp>
                      <p className="text-white">
                        Every month, there are more
                        <br className="d-md-none d-lg-block" />
                        than 125+ sales.
                      </p>
                    </div>
                    <div className="mb-6 mb-md-0 me-4">
                      <CountUp
                        end={308}
                        duration={5}
                        suffix="k"
                        enableScrollSpy
                      >
                        {({ countUpRef }) => (
                          <div>
                            <h1
                              className="display-1 text-white fw-bolder"
                              ref={countUpRef as LegacyRef<HTMLHeadingElement>}
                            />
                          </div>
                        )}
                      </CountUp>
                      <p className="text-white">
                        We have 308+ active paid.
                        <br className="d-md-none d-lg-block" />
                        subscribers.
                      </p>
                    </div>
                    <div className="mb-6 mb-md-0 me-4">
                      <CountUp end={12} duration={5} enableScrollSpy>
                        {({ countUpRef }) => (
                          <div>
                            <h1
                              className="display-1 text-white fw-bolder"
                              ref={countUpRef as LegacyRef<HTMLHeadingElement>}
                            />
                          </div>
                        )}
                      </CountUp>

                      <p className="text-white">
                        We have won 12 awards so
                        <br className="d-md-none d-lg-block" />
                        far with great success.{' '}
                      </p>
                    </div>
                  </div>
                </Col>
                <Col xl={4} className="text-center text-md-start">
                  <img className="img-fluid" src={capterra} alt="" />
                </Col>
              </Row>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default FunFacts;
