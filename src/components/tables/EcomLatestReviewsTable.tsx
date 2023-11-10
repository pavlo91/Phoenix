import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AdvanceTable from 'components/base/AdvanceTable';
import Avatar from 'components/base/Avatar';
import Badge from 'components/base/Badge';
import Button from 'components/base/Button';
import SearchBox from 'components/common/SearchBox';
import {
  latestReviewsTableData,
  LatestReviewsTableDataType
} from 'data/LatestReviewsTableData';
import useAdvanceTable from 'hooks/useAdvanceTable';
import AdvanceTableProvider from 'providers/AdvanceTableProvider';
import { Col, Dropdown, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';
import AdvanceTableFooter from 'components/base/AdvanceTableFooter';
import { ColumnDef } from '@tanstack/react-table';
import { ChangeEvent } from 'react';
import Rating from 'components/base/Rating';
import RevealDropdown from 'components/base/RevealDropdown';
import ActionDropdownItems from 'components/common/ActionDropdownItems';

const columns: ColumnDef<LatestReviewsTableDataType>[] = [
  {
    id: 'productImage',
    accessorKey: '',
    cell: ({ row: { original } }) => {
      const { productImage } = original;
      return (
        <Link
          to="/apps/e-commerce/customer/product-details"
          className="d-block rounded-2 border"
        >
          <img src={productImage} alt="" width={53} />
        </Link>
      );
    },
    meta: { cellProps: { className: 'py-0' } },
    enableSorting: false
  },
  {
    accessorKey: 'product',
    header: () => 'Product',
    cell: ({ row: { original } }) => {
      const { product } = original;
      return (
        <Link
          to="/apps/e-commerce/customer/product-details"
          className="fw-semi-bold"
        >{`${product.slice(0, 46)}${product.length > 46 ? '...' : ''}`}</Link>
      );
    },
    enableSorting: true,
    meta: {
      headerProps: { style: { minWidth: 360 }, className: 'py-2' }
    }
  },
  {
    accessorFn: ({ customer: { name } }) => name,
    header: 'CUSTOMER',
    cell: ({ row: { original } }) => {
      const { customer } = original;
      return (
        <Link
          to="/apps/e-commerce/admin/customer-details"
          className="d-flex align-items-center text-900"
        >
          {customer.variant === 'name' ? (
            <Avatar src={customer.avatar} size="l" variant={customer.variant}>
              {customer.name.charAt(0).toUpperCase()}
            </Avatar>
          ) : (
            <Avatar src={customer.avatar} size="l" variant={customer.variant} />
          )}
          <h6 className="mb-0 ms-3 text-900">{customer.name}</h6>
        </Link>
      );
    },
    meta: {
      headerProps: { style: { minWidth: 200 } }
    }
  },
  {
    accessorKey: 'rating',
    header: 'RATING',
    cell: ({ row: { original } }) => {
      const { rating } = original;
      return <Rating iconClass="fs-10" readonly initialValue={rating} />;
    },
    meta: {
      headerProps: { style: { minWidth: 110 } }
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
      headerProps: { style: { minWidth: 350 } }
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
      headerProps: { className: 'ps-5' },
      cellProps: { className: 'ps-5' }
    }
  },
  {
    accessorKey: 'time',
    header: 'TIME',
    cell: ({ row: { original } }) => {
      const { time } = original;
      return (
        <div className="hover-hide">
          <h6 className="text-1000 mb-0">{time}</h6>
        </div>
      );
    },
    meta: {
      headerProps: { className: 'text-end' },
      cellProps: { className: 'text-end white-space-nowrap' }
    }
  },
  {
    accessorKey: 'action',
    enableSorting: false,
    header: '',
    cell: () => {
      return (
        <>
          <div className="position-relative">
            <div className="hover-actions">
              <Button
                variant="phoenix-secondary"
                className="me-1 fs-10"
                size="sm"
              >
                <FontAwesomeIcon icon="check" />
              </Button>
              <Button variant="phoenix-secondary" className="fs-10" size="sm">
                <FontAwesomeIcon icon="trash" />
              </Button>
            </div>
          </div>
          <RevealDropdown btnClassName="fs-10">
            <ActionDropdownItems />
          </RevealDropdown>
        </>
      );
    },
    meta: {
      cellProps: { className: 'text-end' }
    }
  }
];

const EcomLatestReviewsTable = () => {
  const table = useAdvanceTable({
    data: latestReviewsTableData,
    columns,
    pageSize: 6,
    pagination: true,
    selection: true,
    selectionColumnWidth: '30px',
    sortable: true
  });

  const handleSearchInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    table.setGlobalFilter(e.target.value || undefined);
  };

  return (
    <>
      <AdvanceTableProvider {...table}>
        <Row className="align-items-end justify-content-between pb-5 g-3">
          <Col xs="auto">
            <h3>Latest reviews</h3>
            <p className="text-700 lh-sm mb-0">
              Payment received across all channels
            </p>
          </Col>
          <Col xs={12} md="auto">
            <Row className="g-2 gy-3">
              <Col xs="auto" className="flex-1">
                <SearchBox
                  placeholder="Search..."
                  size="sm"
                  onChange={handleSearchInputChange}
                />
              </Col>
              <Col xs="auto" className="d-flex gap-2">
                <Button
                  variant="phoenix-secondary"
                  size="sm"
                  className="bg-white hover-bg-100"
                >
                  All products
                </Button>
                <Dropdown>
                  <Dropdown.Toggle
                    variant="phoenix-secondary"
                    size="sm"
                    className="bg-white hover-bg-100 dropdown-caret-none"
                  >
                    <FontAwesomeIcon icon="ellipsis-h" className="10" />
                  </Dropdown.Toggle>

                  <Dropdown.Menu align="end">
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">
                      Another action
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">
                      Something else
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Col>
            </Row>
          </Col>
        </Row>

        <AdvanceTable
          tableProps={{
            className: 'phoenix-table fs-9 mb-0 border-top border-200'
          }}
          rowClassName="hover-actions-trigger btn-reveal-trigger position-static"
        />
        <AdvanceTableFooter navBtn />
      </AdvanceTableProvider>
    </>
  );
};

export default EcomLatestReviewsTable;
