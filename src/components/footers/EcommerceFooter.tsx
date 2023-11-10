import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Logo from 'components/common/Logo';
import { PropsWithChildren } from 'react';
import { Col, Row, Stack } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const LinkItem = ({ children, to }: PropsWithChildren<{ to: string }>) => {
  return (
    <Link to={to} className="text-700 fw-semi-bold fs-9 mb-1">
      {children}
    </Link>
  );
};

const EcommerceFooter = () => {
  return (
    <section className="bg-100 dark__bg-1100 py-9">
      <div className="container-small">
        <Row className="justify-content-between gy-4">
          <Col xs={12} lg={4}>
            <Logo className="mb-3" />
            <p className="text-700 mb-1 fw-semi-bold lh-sm fs-9">
              Phoenix is an admin dashboard template with fascinating features
              and amazing layout. The template is responsive to all major
              browsers and is compatible with all available devices and screen
              sizes.
            </p>
          </Col>
          <Col xs={6} md="auto">
            <h5 className="fw-bolder mb-3">About Phoenix</h5>
            <Stack>
              <LinkItem to="#!">Careers</LinkItem>
              <LinkItem to="#!">Affiliate Program</LinkItem>
              <LinkItem to="#!">Privacy Policy</LinkItem>
              <LinkItem to="#!">Terms & Conditions</LinkItem>
            </Stack>
          </Col>
          <Col xs={6} md="auto">
            <h5 className="fw-bolder mb-3">Stay Connected</h5>
            <Stack>
              <LinkItem to="#!">Blogs</LinkItem>
              <Link to="#!" className="mb-1 fw-semi-bold fs-9">
                <FontAwesomeIcon
                  icon={['fab', 'facebook-square']}
                  className="text-primary me-2 fs-8"
                />
                <span className="text-800">Facebook</span>
              </Link>
              <Link to="#!" className="mb-1 fw-semi-bold fs-9">
                <FontAwesomeIcon
                  icon={['fab', 'twitter-square']}
                  className="text-info me-2 fs-8"
                />
                <span className="text-800">Twitter</span>
              </Link>
            </Stack>
          </Col>
          <Col xs={6} md="auto">
            <h5 className="fw-bolder mb-3">Customer Service</h5>
            <Stack>
              <LinkItem to="#!">Help Desk</LinkItem>
              <LinkItem to="#!">Support, 24/7</LinkItem>
              <LinkItem to="#!">Community of Phoenix</LinkItem>
            </Stack>
          </Col>
          <Col xs={6} md="auto">
            <h5 className="fw-bolder mb-3">Payment Method</h5>
            <Stack>
              <LinkItem to="#!">Cash on Delivery</LinkItem>
              <LinkItem to="#!">Online Payment</LinkItem>
              <LinkItem to="#!">PayPal</LinkItem>
              <LinkItem to="#!">Installment</LinkItem>
            </Stack>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default EcommerceFooter;
