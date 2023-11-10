import { ColumnDef } from '@tanstack/react-table';
import AdvanceTable from 'components/base/AdvanceTable';
import { currencyFormat } from 'helpers/utils';
import useAdvanceTable from 'hooks/useAdvanceTable';
import AdvanceTableProvider from 'providers/AdvanceTableProvider';
import { Link } from 'react-router-dom';
import AdvanceTableFooter from 'components/base/AdvanceTableFooter';
import { StoreProductType, storeProducts } from 'data/e-commerce/products';
import Rating from 'components/base/Rating';
import RevealDropdown, {
  RevealDropdownTrigger
} from 'components/base/RevealDropdown';
import MyFavoriteStores from 'components/modules/e-commerce/profile/MyFavoriteStores';
import ActionDropdownItems from 'components/common/ActionDropdownItems';

const columns: ColumnDef<StoreProductType>[] = [
  {
    id: 'productImage',
    accessorKey: '',
    cell: ({ row: { original } }) => {
      const { productImage } = original;
      return <img src={productImage} alt="" width={53} />;
    },
    meta: {
      cellProps: { className: 'py-0' },
      headerProps: { style: { width: '7%', minWidth: 80 } }
    }
  },
  {
    accessorKey: 'product',
    header: 'Vendor',
    cell: ({ row: { original } }) => {
      const { product } = original;
      return (
        <Link to="#!" className="fw-semi-bold line-clamp-1">
          {product}
        </Link>
      );
    },
    meta: {
      headerProps: { style: { minWidth: 150, width: '20%' } },
      cellProps: { className: 'pe-11' }
    }
  },
  {
    accessorKey: 'rating',
    header: 'Store rating',
    cell: ({ row: { original } }) => {
      const { rating } = original;
      return <Rating readonly initialValue={rating} iconClass="fs-9" />;
    },
    meta: {
      headerProps: { style: { width: '15%', minWidth: 150 } }
    }
  },
  {
    accessorKey: 'orders',
    header: 'orders',
    meta: {
      headerProps: {
        style: { width: '12%', minWidth: 150 },
        className: 'text-end'
      },
      cellProps: { className: 'text-primary fw-bold text-end' }
    }
  },
  {
    accessorKey: 'totalSpent',
    header: () => 'Total Spent',
    cell: ({ row: { original } }) => currencyFormat(original.totalSpent),
    meta: {
      headerProps: {
        style: { width: '15%', minWidth: 150 },
        className: 'text-end'
      },
      cellProps: { className: 'text-end fw-semi-bold' }
    }
  },
  {
    accessorKey: 'lastOrderDate',
    header: 'Last Order',
    meta: {
      headerProps: {
        style: { width: '15%', minWidth: 150 },
        className: 'text-end'
      },
      cellProps: { className: 'text-end text-700' }
    }
  },
  {
    id: 'action',
    cell: () => (
      <RevealDropdownTrigger>
        <RevealDropdown>
          <ActionDropdownItems />
        </RevealDropdown>
      </RevealDropdownTrigger>
    ),
    meta: {
      headerProps: { style: { width: '30%' } },
      cellProps: {
        className: 'text-end'
      }
    }
  }
];

const EcomProfileStoresTable = () => {
  const table = useAdvanceTable({
    data: storeProducts,
    columns,
    pageSize: 6,
    pagination: true,
    sortable: true
  });

  return (
    <div>
      <AdvanceTableProvider {...table}>
        <div className="border-y mb-6">
          <AdvanceTable
            tableProps={{ className: 'phoenix-table table-sm fs-9' }}
          />
          <AdvanceTableFooter pagination />
        </div>
      </AdvanceTableProvider>
      <MyFavoriteStores />
    </div>
  );
};

export default EcomProfileStoresTable;
