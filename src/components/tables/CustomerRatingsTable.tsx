import AdvanceTable from 'components/base/AdvanceTable';
import Badge from 'components/base/Badge';
import useAdvanceTable from 'hooks/useAdvanceTable';
import AdvanceTableProvider from 'providers/AdvanceTableProvider';
import { Link } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';
import AdvanceTableFooter from 'components/base/AdvanceTableFooter';
import { ColumnDef } from '@tanstack/react-table';
import Rating from 'components/base/Rating';
import RevealDropdown, {
  RevealDropdownTrigger
} from 'components/base/RevealDropdown';
import ActionDropdownItems from 'components/common/ActionDropdownItems';
import {
  customerRatingsTableData,
  CustomerReview
} from 'data/e-commerce/customers';

const columns: ColumnDef<CustomerReview>[] = [
  {
    accessorKey: 'product',
    header: () => 'Product',
    cell: ({ row: { original } }) => {
      const { product } = original;
      return (
        <Link to="#!" className="fw-semi-bold line-clamp-1">
          {product}
        </Link>
      );
    },
    enableSorting: true,
    meta: {
      headerProps: { style: { width: '20%' }, className: 'py-2' }
    }
  },

  {
    accessorKey: 'rating',
    header: 'RATING',
    cell: ({ row: { original } }) => {
      const { rating } = original;
      return <Rating readonly initialValue={rating} iconClass="fs-10" />;
    },
    meta: {
      headerProps: { style: { width: '10%' } }
    }
  },
  {
    accessorKey: 'review',
    header: 'REVIEW',
    cell: ({ row: { original } }) => {
      const { review } = original;
      return (
        <p className="fw-semi-bold text-1000 mb-0 line-clamp-2">
          {review.slice(0, 134)}
          {review.length > 134 && (
            <>
              {`...`}
              <Link to="#!">See more</Link>
            </>
          )}
        </p>
      );
    },
    meta: {
      headerProps: { style: { width: '50%' } }
    }
  },
  {
    accessorFn: ({ status: { title } }) => title,
    header: 'STATUS',
    cell: ({ row: { original } }) => {
      const {
        status: { title, badgeBg, icon }
      } = original;
      return (
        <Badge
          bg={badgeBg}
          variant="phoenix"
          iconPosition="end"
          className="fs-10"
          icon={<FeatherIcon icon={icon} size={12} className="ms-1" />}
        >
          {title}
        </Badge>
      );
    },
    meta: {
      headerProps: { style: { width: '10%' }, className: 'text-end' },
      cellProps: { className: 'text-end' }
    }
  },
  {
    accessorKey: 'time',
    header: 'Date',
    cell: ({ row: { original } }) => {
      const { time } = original;
      return <p className="text-1000 mb-0">{time}</p>;
    },
    meta: {
      headerProps: { className: 'text-end', style: { width: '10%' } },
      cellProps: { className: 'text-end white-space-nowrap' }
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
      headerProps: { style: { width: '7%' } },
      cellProps: { className: 'text-end' }
    }
  }
];

const CustomerRatingsTable = () => {
  const table = useAdvanceTable({
    data: customerRatingsTableData,
    columns,
    pageSize: 5,
    pagination: true,
    selection: false,
    selectionColumnWidth: '30px',
    sortable: true
  });

  return (
    <>
      <AdvanceTableProvider {...table}>
        <div className="border-y">
          <AdvanceTable
            tableProps={{ className: 'phoenix-table fs-9 mb-0' }}
            rowClassName="hover-actions-trigger btn-reveal-trigger position-static"
          />
          <AdvanceTableFooter navBtn showViewAllBtn={false} />
        </div>
      </AdvanceTableProvider>
    </>
  );
};

export default CustomerRatingsTable;
