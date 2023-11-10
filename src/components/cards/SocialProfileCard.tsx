import CoverUpload from 'components/common/CoverUpload';
import coverImage from 'assets/phoenix/img/generic/59.png';
import AvatarUpload from 'components/common/AvatarUpload';
import { Card, Col, Row } from 'react-bootstrap';
import { CSSProperties } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

interface SocialProfileCardProps {
  showAbout?: boolean;
  avatar: string;
}

const SocialProfileCard = ({ showAbout, avatar }: SocialProfileCardProps) => {
  return (
    <Card className="mb-5">
      <Card.Header
        className="position-relative mb-6"
        style={{ minHeight: '130px' }}
      >
        <CoverUpload
          src={coverImage}
          gradient={
            'linear-gradient(0deg, #000000 -3%, rgba(0, 0, 0, 0) 83%)' as CSSProperties
          }
        />
        <AvatarUpload
          size="4xl"
          src={avatar}
          status="online"
          thumbnail
          className="feed-avatar-profile"
        />
      </Card.Header>
      <Card.Body>
        <Row>
          <Col xs={12}>
            <div className="d-flex flex-wrap mb-2 align-items-center">
              <h3 className="me-2">Ansolo Lazinatov</h3>
              <span className="fw-normal fs-8">u/hansolo</span>
            </div>
            <div className="d-flex flex-wrap gap-y-2 gap-x-4 d-xl-block d-xxl-flex align-items-center">
              <div className="d-flex mb-xl-2 mb-xxl-0">
                <FontAwesomeIcon
                  icon="user-group"
                  className="fs-10 me-2 me-lg-1 me-xl-2"
                />
                <h6 className="mb-0">
                  1297
                  <span className="fw-semi-bold ms-1">Followers</span>
                </h6>
              </div>
              <div className="d-flex">
                <FontAwesomeIcon
                  icon="user-check"
                  className="fs-10 me-2 me-lg-1 me-xl-2"
                />
                <h6 className="mb-0">
                  3971
                  <span className="fw-semi-bold ms-1">Following</span>
                </h6>
              </div>
            </div>
            {showAbout && (
              <div className="mt-4">
                <p className="fw-semi-bold mb-0">
                  About me
                  <Link to="#!">
                    <FontAwesomeIcon
                      icon="pencil"
                      className="fs-10 text-500 ms-3"
                    />
                  </Link>
                </p>
                <p className="text-700 mb-0">
                  “Le capitalisme exploite. Et le capitalisme exploite les gens
                  de couleur. Comme il exploite les hommes. Ou comme il exploite
                  les femmes.”
                </p>
              </div>
            )}
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default SocialProfileCard;
