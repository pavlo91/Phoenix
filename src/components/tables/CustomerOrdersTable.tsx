import { ColumnDef } from '@tanstack/react-table';
import AdvanceTable from 'components/base/AdvanceTable';
import { currencyFormat } from 'helpers/utils';
import { Link } from 'react-router-dom';
import AdvanceTableFooter from 'components/base/AdvanceTableFooter';
import { Order, ordersTableData } from 'data/e-commerce/orders';
import Badge from 'components/base/Badge';
import FeatherIcon from 'feather-icons-react';
import AdvanceTableProvider from 'providers/AdvanceTableProvider';
import useAdvanceTable from 'hooks/useAdvanceTable';
import RevealDropdown, {
  RevealDropdownTrigger
} from 'components/base/RevealDropdown';
import ActionDropdownItems from 'components/common/ActionDropdownItems';

export const ordersTableColumns: ColumnDef<Order>[] = [
  {
    accessorKey: 'orderId',
    header: 'Order',
    cell: ({ row: { original } }) => {
      const { orderId } = original;
      return (
        <Link to="#!" className="fw-semi-bold">
          #{orderId}
        </Link>
      );
    },
    meta: {
      headerProps: { style: { width: '10%' }, className: 'pe-3' }
    }
  },
  {
    accessorKey: 'total',
    header: 'Total',
    cell: ({ row: { original } }) => currencyFormat(original.total),
    meta: {
      headerProps: { style: { width: '10%' }, className: 'text-end pe-7' },
      cellProps: { className: 'text-end fw-semi-bold text-1000 pe-7' }
    }
  },
  {
    id: 'payment_status',
    accessorFn: ({ payment_status }) => payment_status.label,
    header: 'Payment status',
    cell: ({ row: { original } }) => {
      const { payment_status } = original;
      return (
        <Badge
          bg={payment_status.type}
          variant="phoenix"
          iconPosition="end"
          className="fs-10"
          icon={
            <FeatherIcon
              icon={payment_status.icon}
              size={12.8}
              className="ms-1"
            />
          }
        >
          {payment_status.label}
        </Badge>
      );
    },
    meta: {
      headerProps: { style: { width: '15%' }, className: 'pe-3' }
    }
  },
  {
    id: 'fulfilment_status',
    accessorFn: ({ fulfilment_status }) => fulfilment_status.label,
    header: 'Fulfilment status',
    cell: ({ row: { original } }) => {
      const { fulfilment_status } = original;
      return (
        <Badge
          bg={fulfilment_status.type}
          variant="phoenix"
          iconPosition="end"
          className="fs-10"
          icon={
            <FeatherIcon
              icon={fulfilment_status.icon}
              size={12.8}
              className="ms-1"
            />
          }
        >
          {fulfilment_status.label}
        </Badge>
      );
    },
    meta: {
      headerProps: { style: { width: '20%' }, className: 'pe-3' }
    }
  },
  {
    accessorKey: 'delivery_type',
    header: 'Delivery type',
    meta: {
      headerProps: { style: { width: '30%' } },
      cellProps: { className: 'text-900 fs-9' }
    }
  },
  {
    accessorKey: 'date',
    header: 'Date',
    meta: {
      headerProps: { className: 'text-end' },
      cellProps: { className: 'text-700 fs-9 ps-4 text-end white-space-nowrap' }
    }
  },
  {
    id: 'action',
    cell: () => (
      <RevealDropdownTrigger>
        <RevealDropdown btnClassName="lh-1">
          <ActionDropdownItems />
        </RevealDropdown>
      </RevealDropdownTrigger>
    ),
    meta: {
      headerProps: { style: { width: '7%' } },
      cellProps: { className: 'text-end' }
    }
  }
];

const CustomerOrdersTable = () => {
  const table = useAdvanceTable({
    data: ordersTableData,
    columns: ordersTableColumns,
    pageSize: 6,
    pagination: true,
    sortable: true
  });

  return (
    <AdvanceTableProvider {...table}>
      <div className="border-y">
        <AdvanceTable
          tableProps={{ className: 'phoenix-table table-sm fs-9' }}
        />
        <AdvanceTableFooter pagination showViewAllBtn={false} />
      </div>
    </AdvanceTableProvider>
  );
};

export default CustomerOrdersTable;
