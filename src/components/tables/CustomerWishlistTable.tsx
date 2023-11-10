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
import AdvanceTableFooter from 'components/base/AdvanceTableFooter';

const columns: ColumnDef<WishlistProductType>[] = [
  {
    id: 'productImage',
    accessorKey: '',
    cell: ({ row: { original } }) => {
      const { productImage } = original;
      return (
        <Link
          to="/apps/e-commerce/customer/product-details"
          className="rounded-2 border d-inline-block"
        >
          <img src={productImage} alt="" width={40} height={40} />
        </Link>
      );
    },
    meta: {
      headerProps: { style: { width: '5%' } },
      cellProps: { className: 'py-1' }
    }
  },
  {
    accessorKey: 'product',
    header: 'Products',
    cell: ({ row: { original } }) => {
      const { product } = original;
      return (
        <Link
          to="/apps/e-commerce/customer/product-details"
          className="fw-semi-bold line-clamp-1"
        >
          {product}
        </Link>
      );
    },
    meta: {
      headerProps: { style: { minWidth: 250, width: '35%' } },
      cellProps: { className: '' }
    }
  },
  {
    accessorKey: 'color',
    header: 'Color',
    meta: {
      headerProps: { style: { width: '15%' } },
      cellProps: { className: 'white-space-nowrap text-900' }
    }
  },
  {
    accessorKey: 'size',
    header: 'Size',
    meta: {
      headerProps: { style: { width: '10%' } },
      cellProps: { className: 'white-space-nowrap text-700 fw-semi-bold' }
    }
  },
  {
    accessorKey: 'price',
    header: 'Price',
    cell: ({ row: { original } }) => currencyFormat(original.price),
    meta: {
      headerProps: { style: { width: '15%' }, className: 'text-end' },
      cellProps: { className: 'text-900 fw-semi-bold text-end' }
    }
  },
  {
    id: 'total',
    accessorFn: ({ price, quantity }) => price * quantity,
    header: 'Total',
    cell: ({ row: { original } }) =>
      currencyFormat(original.price * original.quantity),
    meta: {
      headerProps: { style: { width: '15%' }, className: 'text-end' },
      cellProps: { className: 'fw-bold text-1000 text-end' }
    }
  }
];

const CustomerWishlistTable = () => {
  const table = useAdvanceTable({
    data: wishlistProducts,
    columns,
    pageSize: 5,
    pagination: true,
    sortable: true
  });

  return (
    <div>
      <AdvanceTableProvider {...table}>
        <div className="border-y">
          <AdvanceTable tableProps={{ className: 'phoenix-table fs-9' }} />
          <AdvanceTableFooter pagination showViewAllBtn={false} />
        </div>
      </AdvanceTableProvider>
    </div>
  );
};

export default CustomerWishlistTable;
