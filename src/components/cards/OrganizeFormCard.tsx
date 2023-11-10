import { Card, Col, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const OrganizeFormCard = ({ className }: { className?: string }) => {
  return (
    <Card className={className}>
      <Card.Body>
        <h4 className="mb-4">Organize</h4>
        <Row className="gx-3 gy-4">
          <Col xs={12} sm={6} xl={12}>
            <div className="d-flex gap-2 mb-2">
              <h5 className="mb-0 text-1000">Category</h5>
              <Link className="fw-bold fs-9" to="#!">
                Add new category
              </Link>
            </div>
            <Form.Select aria-label="category">
              <option value="men-cloth">Men's Clothing</option>
              <option value="women-cloth">Womens's Clothing</option>
              <option value="kid-cloth">Kid's Clothing</option>
            </Form.Select>
          </Col>
          <Col xs={12} sm={6} xl={12}>
            <div className="d-flex gap-2 mb-2">
              <h5 className="mb-0 text-1000">Vendor</h5>
              <Link className="fw-bold fs-9" to="#!">
                Add new vendor
              </Link>
            </div>
            <Form.Select aria-label="vendor">
              <option value="men-cloth">Men's Clothing</option>
              <option value="women-cloth">Womens's Clothing</option>
              <option value="kid-cloth">Kid's Clothing</option>
            </Form.Select>
          </Col>
          <Col xs={12} sm={6} xl={12}>
            <h5 className="mb-2 text-1000">Collection</h5>
            <Form.Control placeholder="Collection" />
          </Col>
          <Col xs={12} sm={6} xl={12}>
            <div className="d-flex gap-2 mb-2">
              <h5 className="mb-0 text-1000">Tags</h5>
              <Link className="fw-bold fs-9 lh-sm" to="#!">
                View all tags
              </Link>
            </div>
            <Form.Select aria-label="vendor">
              <option value="men-cloth">Men's Clothing</option>
              <option value="women-cloth">Womens's Clothing</option>
              <option value="kid-cloth">Kid's Clothing</option>
            </Form.Select>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default OrganizeFormCard;
