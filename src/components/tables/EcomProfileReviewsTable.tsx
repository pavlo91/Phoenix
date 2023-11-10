import AdvanceTable from 'components/base/AdvanceTable';
import Badge from 'components/base/Badge';
import {
  latestReviewsTableData,
  LatestReviewsTableDataType
} from 'data/LatestReviewsTableData';
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

const columns: ColumnDef<LatestReviewsTableDataType>[] = [
  {
    accessorKey: 'product',
    header: () => 'Product',
    cell: ({ row: { original } }) => {
      const { product } = original;
      return (
        <Link to="#!" className="fw-semi-bold line-clamp-1">{`${product.slice(
          0,
          46
        )}${product.length > 46 ? '...' : ''}`}</Link>
      );
    },
    meta: {
      headerProps: { style: { minWidth: 220 } },
      cellProps: { className: 'pe-3' }
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
      headerProps: { style: { maxWidth: '10%' } }
    }
  },
  {
    accessorKey: 'review',
    header: 'REVIEW',
    cell: ({ row: { original } }) => {
      const { review } = original;
      return (
        <p className="fs--1 fw-semi-bold text-1000 mb-0 line-clamp-3">
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
      headerProps: { style: { minWidth: 480 } },
      cellProps: { className: 'pe-7' }
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
      headerProps: { style: { maxWidth: '12%' } },
      cellProps: { className: 'pe-9' }
    }
  },
  {
    accessorKey: 'time',
    header: 'Date',
    meta: {
      headerProps: { className: 'text-end', style: { maxWidth: '10%' } },
      cellProps: { className: 'text-end text-700 white-space-nowrap' }
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

const EcomProfileReviewsTable = () => {
  const table = useAdvanceTable({
    data: latestReviewsTableData,
    columns,
    pageSize: 6,
    pagination: true,
    sortable: true
  });

  return (
    <>
      <AdvanceTableProvider {...table}>
        <div className="border-y">
          <AdvanceTable tableProps={{ className: 'phoenix-table fs-9' }} />
          <AdvanceTableFooter pagination />
        </div>
      </AdvanceTableProvider>
    </>
  );
};

export default EcomProfileReviewsTable;
