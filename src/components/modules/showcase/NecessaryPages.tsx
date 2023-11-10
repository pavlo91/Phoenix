import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import illustration31 from 'assets/phoenix/img/spot-illustrations/31.png';
import { necessaryPages } from 'data/showcase';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

const NecessaryPages = () => {
  return (
    <section className="pb-13">
      <Container fluid>
        <Row className="justify-content-center">
          <Col xs={12} lg={9} xl={8} xxl={6} className="text-center">
            <h2 className="mb-6 text-1000 fw-normal">
              Smartly designed
              <span className="text-primary position-relative fw-bolder ms-2">
                necessary pages
                <img
                  src={illustration31}
                  alt=""
                  className="w-100 text-illustration-underline"
                />
              </span>
            </h2>
          </Col>
        </Row>
        <Row>
          {necessaryPages.map((page, index) => (
            <Col
              key={page.pageName}
              lg={6}
              className="position-relative page-container"
            >
              <div
                className={classNames(
                  'd-flex px-4 pt-6 justify-content-center',
                  {
                    'justify-content-lg-end': (index + 1) % 2 !== 0,
                    'justify-content-lg-start': (index + 1) % 2 === 0
                  }
                )}
              >
                <div className="text-center">
                  <div className="img-container w-100">
                    <img
                      src={page.thumb}
                      alt=""
                      className="img-fluid page-thumb rounded z-index-2"
                    />
                  </div>
                  <h5 className="py-4 text-1000">{page.pageName}</h5>
                </div>
              </div>
              <Link
                className="stretched-link"
                target="_blank"
                to={page.pageLink}
              ></Link>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default NecessaryPages;
