import { ColumnDef } from '@tanstack/react-table';
import AdvanceTable from 'components/base/AdvanceTable';
import { currencyFormat } from 'helpers/utils';
import { Link } from 'react-router-dom';
import AdvanceTableFooter from 'components/base/AdvanceTableFooter';
import Avatar from 'components/base/Avatar';
import { Order } from 'data/e-commerce/orders';
import Badge from 'components/base/Badge';
import FeatherIcon from 'feather-icons-react';

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
      headerProps: { style: { width: '5%' }, className: 'pe-3 ps-0' },
      cellProps: { className: 'ps-0' }
    }
  },
  {
    accessorKey: 'total',
    header: 'Total',
    cell: ({ row: { original } }) => currencyFormat(original.total),
    meta: {
      headerProps: { style: { width: '6%' }, className: 'text-end' },
      cellProps: { className: 'text-end fw-semi-bold text-1000' }
    }
  },
  {
    id: 'customer',
    accessorFn: ({ customer }) => customer.name,
    header: 'Customer',
    cell: ({ row: { original } }) => {
      const { name, avatar } = original.customer;
      return (
        <Link
          to="/apps/e-commerce/admin/customer-details"
          className="d-flex align-items-center"
        >
          <Avatar src={avatar} size="m" />
          <p className="mb-0 ms-3 text-1100 fw-bold">{name}</p>
        </Link>
      );
    },
    meta: {
      headerProps: {
        style: { width: '28%', minWidth: 250 },
        className: 'ps-8'
      },
      cellProps: { className: 'ps-8 py-0 white-space-nowrap' }
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
      headerProps: { style: { width: '10%' }, className: 'pe-3' }
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
      headerProps: { style: { width: '12%', minWidth: 200 }, className: 'pe-3' }
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
  }
];

const OrdersTable = () => {
  return (
    <div>
      <AdvanceTable tableProps={{ className: 'phoenix-table fs-9' }} />
      <AdvanceTableFooter pagination />
    </div>
  );
};

export default OrdersTable;
