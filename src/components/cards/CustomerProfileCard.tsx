import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AvatarUpload from 'components/common/AvatarUpload';
import { Card, Col, Row } from 'react-bootstrap';
import team15 from 'assets/phoenix/img/team/15.webp';

const CustomerProfileCard = () => {
  return (
    <Card className="h-100">
      <Card.Body className="d-flex flex-column justify-content-between pb-3">
        <Row className="align-items-center g-5 mb-3 text-center text-sm-start">
          <Col xs={12} sm="auto" className="mb-sm-3">
            <AvatarUpload size="5xl" src={team15} />
          </Col>
          <Col xs={12} sm="auto" className="flex-1">
            <h3>Ansolo Lazinatov</h3>
            <p className="text-800">Joined 3 months ago</p>
            <div className="d-inline-flex gap-2">
              <a href="#!">
                <FontAwesomeIcon
                  icon={['fab', 'linkedin-in']}
                  className="text-400 hover-primary"
                />
              </a>
              <a href="#!">
                <FontAwesomeIcon
                  icon={['fab', 'facebook']}
                  className="text-400 hover-primary"
                />
              </a>
              <a href="#!">
                <FontAwesomeIcon
                  icon={['fab', 'twitter']}
                  className="text-400 hover-primary"
                />
              </a>
            </div>
          </Col>
        </Row>

        <div className="d-flex flex-between-center border-top border-dashed border-300 pt-4">
          <div>
            <h6>Following</h6>
            <p className="fs-7 text-800 mb-0">297</p>
          </div>
          <div className="">
            <h6>Projects</h6>
            <p className="fs-7 text-800 mb-0">56</p>
          </div>
          <div className="">
            <h6>Completion</h6>
            <p className="fs-7 text-800 mb-0">97</p>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default CustomerProfileCard;
