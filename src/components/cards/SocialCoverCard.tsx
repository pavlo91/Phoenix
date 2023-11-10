import { Card, Col, Dropdown, Row } from 'react-bootstrap';
import coverImage from 'assets/phoenix/img/generic/cover-photo.png';
import CoverUpload from 'components/common/CoverUpload';
import profileImage from 'assets/phoenix/img/team/9.webp';
import AvatarUpload from 'components/common/AvatarUpload';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import Button from 'components/base/Button';
import { dropdownData } from 'data/social/dropdownData';
import classNames from 'classnames';

const SocialCoverCard = () => {
  return (
    <Card className="mb-5">
      <Card.Header
        className="d-flex justify-content-center align-items-end position-relative mb-7 mb-xxl-0"
        style={{ minHeight: '214px' }}
      >
        <CoverUpload src={coverImage} />
        <AvatarUpload
          size="5xl"
          src={profileImage}
          thumbnail={true}
          className="feed-profile"
        />
      </Card.Header>
      <Card.Body>
        <Row className="justify-content-xl-between">
          <Col xs="auto">
            <div className="d-flex flex-wrap mb-3 align-items-center">
              <h2 className="me-2">Erza Bridgest</h2>
              <span className="fw-semi-bold fs-7 text-1100">u/hansolo</span>
            </div>
            <div className="mb-5">
              <div className="d-md-flex align-items-center">
                <div className="d-flex align-items-center">
                  <FontAwesomeIcon
                    icon="user-group"
                    className="fs-9 text-700 me-2 me-lg-1 me-xl-2"
                  />
                  <Link to="#!" className="text-1100">
                    <span className="fs-7 fw-bold text-600 hover-text-1100">
                      1297
                      <span className="fw-semi-bold ms-2 me-4">Followers</span>
                    </span>
                  </Link>
                </div>
                <div className="d-flex align-items-center">
                  <FontAwesomeIcon
                    icon="user-check"
                    className="fs-9 text-700 me-2 me-lg-1 me-xl-2"
                  />
                  <Link to="#!" className="text-1100">
                    <span className="fs-7 fw-bold text-600 hover-text-1100">
                      3971
                      <span className="fw-semi-bold ms-2 me-4">Following</span>
                    </span>
                  </Link>
                </div>
                <div className="d-flex align-items-center">
                  <FontAwesomeIcon
                    icon="location-dot"
                    className="fs-9 text-700 me-2 me-lg-1 me-xl-2"
                  />
                  <Link to="#!" className="text-1100">
                    <span className="fs-7 fw-semi-bold text-600 hover-text-1100">
                      Vancouver, Lothal
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            <p className="fs-6 text-800">
              “Whenever you find yourself on the side of the majority, it is
              time to pause and reflect.”
            </p>
          </Col>
          <Col xs="auto">
            <Row className="g-2">
              <Col xs="auto" className="order-xxl-2">
                <Button
                  variant="primary"
                  className="lh-1"
                  startIcon={
                    <FontAwesomeIcon icon="user-plus" className="me-2" />
                  }
                >
                  Follow Request
                </Button>
              </Col>
              <Col xs="auto" className="order-xxl-1">
                <Button
                  variant="phoenix-primary"
                  className="lh-1"
                  startIcon={
                    <FontAwesomeIcon icon="message" className="me-2" />
                  }
                >
                  Send Message
                </Button>
              </Col>
              <Col xs="auto">
                <div className="position-static">
                  <Dropdown align="end">
                    <Dropdown.Toggle
                      className="dropdown-caret-none d-flex align-items-center lh-1"
                      variant="phoenix-secondary"
                    >
                      <FontAwesomeIcon icon="chevron-down" className="me-2" />
                      More
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="py-2">
                      {dropdownData.map((item, index) => (
                        <Dropdown.Item
                          key={item.label}
                          className={classNames({ 'd-xl-none': index < 6 })}
                        >
                          <FontAwesomeIcon
                            icon={item.icon}
                            className="text-800 me-2"
                          />
                          {item.label}
                        </Dropdown.Item>
                      ))}
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default SocialCoverCard;
