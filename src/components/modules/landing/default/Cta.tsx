import Button from 'components/base/Button';
import { Card, Col, Form } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import bg18 from 'assets/phoenix/img/bg/bg-18.png';
import illustrations27 from 'assets/phoenix/img/spot-illustrations/27.png';
import illustrations27dark from 'assets/phoenix/img/spot-illustrations/dark_27.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Cta = () => {
  return (
    <section className="pb-0">
      <div className="container-small px-lg-7 px-xxl-3">
        <Row className="justify-content-center">
          <Col xs={12} className="text-center">
            <Card className="py-md-9 px-md-13 border-0 z-index-1 shadow-lg cta-card">
              <div
                className="bg-holder"
                style={{
                  backgroundImage: `url(${bg18})`,
                  backgroundPosition: 'right',
                  backgroundSize: 'auto'
                }}
              />

              <Card.Body className="position-relative">
                <img
                  className="img-fluid mb-5 d-dark-none"
                  src={illustrations27}
                  width={210}
                  alt="..."
                />
                <img
                  className="img-fluid mb-5 d-light-none"
                  src={illustrations27dark}
                  width={210}
                  alt="..."
                />
                <div className="d-flex align-items-center fw-bold justify-content-center mb-3">
                  <p className="mb-0">2008 Premium Icons</p>
                  <FontAwesomeIcon
                    icon="circle"
                    className="text-primary"
                    transform="shrink-12"
                  />
                  <p className="mb-0">Included FREE with it</p>
                </div>
                <h1 className="fs-6 fs-sm-4 fs-lg-2 fw-bolder lh-sm mb-3">
                  Join
                  <span className="gradient-text-primary mx-2">Phoenix</span>
                  Today
                </h1>
                <Form className="d-flex gap-3 justify-content-center mb-3 px-xxl-12">
                  <Form.Control
                    type="email"
                    placeholder="Email"
                    id="ctaEmail1"
                  />
                  <Button variant="primary" type="submit">
                    Subscribe
                  </Button>
                </Form>
                <p className="text-center">
                  Best support in the world, Only Phoenix can ensure
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Cta;
