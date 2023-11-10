import Button from 'components/base/Button';
import errorIllustration from 'assets/phoenix/img/spot-illustrations/404-illustration.png';
import dark404illustrations from 'assets/phoenix/img/spot-illustrations/dark_404-illustration.png';
import error404 from 'assets/phoenix/img/spot-illustrations/404.png';
import darkError40 from 'assets/phoenix/img/spot-illustrations/dark_404.png';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useSettingsMountEffect from 'hooks/useSettingsMountEffect';

const Error404 = () => {
  useSettingsMountEffect({
    disableNavigationType: true,
    disableHorizontalNavbarAppearance: true,
    disableVerticalNavbarAppearance: true,
    disableHorizontalNavbarShape: true
  });
  return (
    <div>
      <div className="px-3">
        <Row className="min-vh-100 flex-center p-5">
          <Col xs={12} xl={10} xxl={8}>
            <Row className="justify-content-center align-items-center g-5">
              <Col xs={12} lg={6} className="text-center order-lg-1">
                <img
                  src={errorIllustration}
                  alt=""
                  width={400}
                  className="img-fluid w-lg-100 d-dark-none"
                />
                <img
                  src={dark404illustrations}
                  alt=""
                  width={540}
                  className="img-fluid w-md-50 w-lg-100 d-light-none"
                />
              </Col>
              <Col xs={12} lg={6} className="text-center text-lg-start">
                <img
                  src={error404}
                  className="img-fluid mb-6 w-50 w-lg-75 d-dark-none"
                  alt=""
                />
                <img
                  src={darkError40}
                  className="img-fluid mb-6 w-50 w-lg-75 d-light-none"
                  alt=""
                />
                <h2 className="text-800 fw-bolder mb-3">Page Missing!</h2>
                <p className="text-900 mb-5">
                  But no worries! Our ostrich is looking everywhere
                  <br className="d-none d-sm-block" />
                  while you wait safely.
                </p>
                <Button variant="primary" size="lg" as={Link} to="/">
                  Go Home
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Error404;
