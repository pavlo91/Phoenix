import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'components/base/Button';
import Scrollbar from 'components/base/Scrollbar';
import QuantityButtons from 'components/common/QuantityButtons';
import { CartItemType } from 'data/e-commerce/products';
import { currencyFormat } from 'helpers/utils';
import { useMemo, useState } from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

interface EcomCartTableProps {
  products: CartItemType[];
}

const EcomCartTable = ({ products }: EcomCartTableProps) => {
  return (
    <Scrollbar autoHeight autoHeightMax="100%" className="table-scrollbar">
      <Table className="phoenix-table fs-9 mb-0 border-top">
        <thead>
          <tr>
            <th scope="col" />
            <th scope="col" style={{ minWidth: 250 }}>
              PRODUCTS
            </th>
            <th scope="col" style={{ width: 80 }}>
              COLOR
            </th>
            <th scope="col" style={{ width: 150 }}>
              SIZE
            </th>
            <th className="text-end" scope="col" style={{ width: 300 }}>
              PRICE
            </th>
            <th className="ps-5" scope="col" style={{ width: 200 }}>
              QUANTITY
            </th>
            <th className="text-end" scope="col" style={{ width: 250 }}>
              TOTAL
            </th>
            <th className="text-end pe-0" scope="col" />
          </tr>
        </thead>
        <tbody className="list" id="cart-table-body">
          {products.map(product => (
            <EcomCartTableRow product={product} key={product.id} />
          ))}

          <tr className="cart-table-row">
            <td className="text-1100 fw-semi-bold ps-0 fs-8" colSpan={6}>
              Items subtotal :
            </td>
            <td className="text-1100 fw-bold text-end fs-8">$691</td>
            <td />
          </tr>
        </tbody>
      </Table>
    </Scrollbar>
  );
};

const EcomCartTableRow = ({ product }: { product: CartItemType }) => {
  const [quantity, setQuantity] = useState(product.quantity);

  const total = useMemo(() => {
    return product.price * quantity;
  }, [quantity]);

  return (
    <tr className="cart-table-row" key={product.id}>
      <td className="py-0">
        <div className="border rounded-2">
          <img src={product.image} alt={product.name} width={53} />
        </div>
      </td>
      <td>
        <Link className="fw-semi-bold line-clamp-2" to="#!">
          {product.name}
        </Link>
      </td>
      <td className="white-space-nowrap">{product.color}</td>
      <td className="white-space-nowrap text-700 fw-semi-bold">
        {product.size}
      </td>
      <td className="fw-semi-bold text-end">{currencyFormat(product.price)}</td>
      <td className="fs-8 ps-5">
        <QuantityButtons
          type="secondary"
          quantity={quantity}
          setQuantity={setQuantity}
        />
      </td>
      <td className="fw-bold text-1000 text-end">{currencyFormat(total)}</td>
      <td className="text-end ps-3">
        <Button
          size="sm"
          variant="link"
          className="text-500 hover-text-600 me-2"
        >
          <FontAwesomeIcon icon="trash" />
        </Button>
      </td>
    </tr>
  );
};

export default EcomCartTable;
