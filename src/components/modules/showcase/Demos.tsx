import classNames from 'classnames';
import { demos } from 'data/showcase';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Demos = () => {
  return (
    <section className="pt-0">
      <Container fluid>
        <Row>
          {demos.map((demo, index) => (
            <Col
              key={demo.variantName}
              lg={6}
              className="position-relative variant-container"
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
                      src={demo.sideThumb}
                      alt={demo.variantName}
                      className="side-panel-thumb h-100 w-100 rounded"
                    />
                    <div className="layout-thumb">
                      <img
                        src={demo.mainThumb}
                        alt={demo.variantName}
                        className="img-fluid rounded"
                      />
                    </div>
                  </div>
                  <h5 className="py-4 text-1000">{demo.variantName}</h5>
                </div>
              </div>
              <Link
                to={demo.link}
                target="_blank"
                className="stretched-link"
              ></Link>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Demos;
