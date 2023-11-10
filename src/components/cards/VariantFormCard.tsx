import Button from 'components/base/Button';
import ProductVariant from 'components/forms/ProductVariant';
import { Card, Col, Row } from 'react-bootstrap';

const VariantFormCard = ({ className }: { className?: string }) => {
  return (
    <Card className={className}>
      <Card.Body>
        <h4 className="mb-4">Variants</h4>

        <Row className="gx-3 gy-4 mb-3">
          <Col xs={12} sm={6} xl={12}>
            <ProductVariant className="border-bottom border-dashed border-sm-0 border-bottom-xl pb-4" />
          </Col>
          <Col xs={12} sm={6} xl={12}>
            <ProductVariant />
          </Col>
        </Row>
        <Button variant="phoenix-primary" className="w-100">
          Add another option
        </Button>
      </Card.Body>
    </Card>
  );
};

export default VariantFormCard;
