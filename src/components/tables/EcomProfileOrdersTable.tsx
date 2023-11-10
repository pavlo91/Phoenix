import { ColumnDef } from '@tanstack/react-table';
import AdvanceTable from 'components/base/AdvanceTable';
import Badge from 'components/base/Badge';
import { CustomerOrder, customerOrders } from 'data/e-commerce';
import { currencyFormat } from 'helpers/utils';
import useAdvanceTable from 'hooks/useAdvanceTable';
import AdvanceTableProvider from 'providers/AdvanceTableProvider';
import { Link } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';
import AdvanceTableFooter from 'components/base/AdvanceTableFooter';
import RevealDropdown, {
  RevealDropdownTrigger
} from 'components/base/RevealDropdown';
import ActionDropdownItems from 'components/common/ActionDropdownItems';

const columns: ColumnDef<CustomerOrder>[] = [
  {
    accessorKey: 'orderId',
    header: 'Order',
    cell: ({ row: { original } }) => (
      <Link to="#!" className="fw-semi-bold text-primary">
        {original.orderId}
      </Link>
    ),
    meta: {
      headerProps: { style: { width: '15%', minWidth: 140 } },
      cellProps: { className: 'py-2' }
    }
  },
  {
    accessorFn: ({ payment_status }) => payment_status.status,
    header: 'Status',
    cell: ({ row: { original } }) => (
      <Badge
        bg={original.payment_status.type}
        variant="phoenix"
        iconPosition="end"
        className="fs-10"
        icon={
          <FeatherIcon
            icon={original.payment_status.icon}
            size={12}
            className="ms-1"
          />
        }
      >
        {original.payment_status.status}
      </Badge>
    ),
    meta: {
      headerProps: { style: { width: '15%', minWidth: 180 } }
    }
  },
  {
    accessorKey: 'delivery_method',
    header: 'delivery method',
    meta: {
      headerProps: { style: { width: '20%', minWidth: 160 } }
    }
  },
  {
    accessorKey: 'date',
    header: 'Date',
    meta: {
      headerProps: {
        style: { width: '15%', minWidth: 160 },
        className: 'text-end'
      },
      cellProps: { className: 'text-700 text-end' }
    }
  },
  {
    accessorKey: 'totalPrice',
    header: 'Total',
    cell: ({ row: { original } }) => currencyFormat(original.totalPrice),
    meta: {
      headerProps: {
        style: { width: '15%', minWidth: 160 },
        className: 'text-end'
      },
      cellProps: { className: 'fw-semi-bold text-end text-1000' }
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
      headerProps: { style: { width: '15%' }, className: 'text-end' },
      cellProps: { className: 'text-end py-2' }
    }
  }
];

const EcomProfileOrdersTable = () => {
  const table = useAdvanceTable({
    data: customerOrders,
    columns,
    pageSize: 6,
    pagination: true,
    sortable: true
  });

  return (
    <div>
      <AdvanceTableProvider {...table}>
        <div className="border-y">
          <AdvanceTable
            tableProps={{ size: 'sm', className: 'phoenix-table fs-9' }}
          />
          <AdvanceTableFooter pagination />
        </div>
      </AdvanceTableProvider>
    </div>
  );
};

export default EcomProfileOrdersTable;
