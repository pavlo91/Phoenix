import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SuggestedProductType } from 'data/e-commerce/products';
import { currencyFormat } from 'helpers/utils';
import { useState } from 'react';
import { Button, Card, Form, Stack } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ProductListItem = ({ product }: { product: SuggestedProductType }) => {
  const [checked, setChecked] = useState(product.checked);
  return (
    <div className="d-flex align-items-center">
      <Form.Check
        checked={checked}
        className="me-2"
        onChange={e => {
          setChecked(e.target.checked);
        }}
      />
      <img className="border rounded" src={product.img} width="53" alt="" />
      <div className="ms-2">
        <Link className="fs-9 fw-bold line-clamp-2 mb-2" to="#!">
          {product.name}
        </Link>
        <h5>{currencyFormat(product.price)}</h5>
      </div>
    </div>
  );
};

const UsuallyBoughtTogetherCard = ({
  className,
  products
}: {
  className?: string;
  products: SuggestedProductType[];
}) => {
  return (
    <Card className={className}>
      <Card.Body>
        <h5 className="text-black">Usually Bought Together</h5>
        <div className="w-75">
          <p className="text-700 fs-9 fw-bold line-clamp-1">
            with 24" iMac® with Retina 4.5K display - Apple M1 8GB Memory -
            256GB SSD - w/Touch ID (Latest Model) - Blue
          </p>
        </div>
        <Stack className="border-dashed border-y py-4 gap-5 mb-3">
          {products.map(product => (
            <ProductListItem product={product} key={product.id} />
          ))}
        </Stack>
        <div className="d-flex align-items-end justify-content-between">
          <div>
            <h5 className="mb-2 text-600">Total</h5>
            <h4 className="mb-0 text-1100">{currencyFormat(958.99)}</h4>
          </div>
          <Button variant="outline-warning">
            Add 3 items to cart
            <FontAwesomeIcon icon="shopping-cart" className="ms-2" />
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default UsuallyBoughtTogetherCard;
