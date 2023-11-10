import { ColumnDef } from '@tanstack/react-table';
import AdvanceTable from 'components/base/AdvanceTable';
import { currencyFormat } from 'helpers/utils';
import useAdvanceTable from 'hooks/useAdvanceTable';
import AdvanceTableProvider from 'providers/AdvanceTableProvider';
import { Link } from 'react-router-dom';
import {
  WishlistProductType,
  wishlistProducts
} from 'data/e-commerce/products';
import { useMemo } from 'react';

const columns: ColumnDef<WishlistProductType>[] = [
  {
    id: 'productImage',
    accessorKey: '',
    cell: ({ row: { original } }) => {
      const { productImage } = original;
      return (
        <div className="rounded-2 border d-inline-block">
          <img src={productImage} alt="" width={53} />
        </div>
      );
    },
    meta: { cellProps: { className: 'py-2' } }
  },
  {
    accessorKey: 'product',
    header: 'Products',
    cell: ({ row: { original } }) => {
      const { product } = original;
      return (
        <Link to="#!" className="fw-semi-bold line-clamp-2">
          {product}
        </Link>
      );
    },
    meta: {
      headerProps: { style: { minWidth: 380 } },
      cellProps: { className: '' }
    }
  },
  {
    accessorKey: 'color',
    header: 'Color',
    meta: {
      headerProps: { style: { width: 150 }, className: 'ps-4' },
      cellProps: { className: 'white-space-nowrap text-900 ps-4' }
    }
  },
  {
    accessorKey: 'size',
    header: 'Size',
    meta: {
      headerProps: { style: { width: 300 }, className: 'ps-4' },
      cellProps: { className: 'white-space-nowrap text-700 fw-semi-bold ps-4' }
    }
  },
  {
    accessorKey: 'price',
    header: 'Price',
    cell: ({ row: { original } }) => currencyFormat(original.price),
    meta: {
      headerProps: { style: { width: 150 }, className: 'ps-4 text-end' },
      cellProps: { className: 'text-900 fw-semi-bold text-end ps-4' }
    }
  },
  {
    accessorKey: 'quantity',
    header: 'Quantity',
    meta: {
      headerProps: { style: { width: 200 }, className: 'ps-4 text-end' },
      cellProps: { className: 'text-end ps-4 text-700' }
    }
  },
  {
    id: 'total',
    accessorFn: ({ price, quantity }) => price * quantity,
    header: 'Total',
    cell: ({ row: { original } }) =>
      currencyFormat(original.price * original.quantity),
    meta: {
      headerProps: { style: { width: 250 }, className: 'ps-4 text-end' },
      cellProps: { className: 'fw-bold text-1000 text-end ps-4' }
    }
  }
];

const OrderDetailsTable = () => {
  const table = useAdvanceTable({
    data: wishlistProducts,
    columns,
    pageSize: 6,
    pagination: true,
    sortable: true
  });

  const subtotal = useMemo(() => {
    return wishlistProducts.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
  }, [wishlistProducts]);

  return (
    <div>
      <AdvanceTableProvider {...table}>
        <div className="border-y">
          <AdvanceTable tableProps={{ className: 'phoenix-table fs-9' }} />
          <div className="d-flex flex-between-center py-3">
            <p className="text-1100 fw-semi-bold lh-sm mb-0">
              Items subtotal :
            </p>
            <p className="text-1100 fw-bold lh-sm mb-0">
              {currencyFormat(subtotal)}
            </p>
          </div>
        </div>
      </AdvanceTableProvider>
    </div>
  );
};

export default OrderDetailsTable;
