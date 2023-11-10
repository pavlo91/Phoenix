import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'components/base/Button';
import FilterButtonGroup, {
  FilterMenu
} from 'components/common/FilterButtonGroup';
import FilterTab, { FilterTabItem } from 'components/common/FilterTab';
import PageBreadcrumb from 'components/common/PageBreadcrumb';
import SearchBox from 'components/common/SearchBox';
import OrdersTable, { ordersTableColumns } from 'components/tables/OrdersTable';
import { defaultBreadcrumbItems } from 'data/commonData';
import { ordersTableData } from 'data/e-commerce/orders';
import useAdvanceTable from 'hooks/useAdvanceTable';
import AdvanceTableProvider from 'providers/AdvanceTableProvider';
import { ChangeEvent } from 'react';

const tabItems: FilterTabItem[] = [
  {
    label: 'All',
    value: 'all',
    count: 68817
  },
  {
    label: 'Pending payment',
    value: 'pending_payment',
    count: 6
  },
  {
    label: 'Unfulfilled',
    value: 'unfulfilled',
    count: 17
  },
  {
    label: 'Completed',
    value: 'completed',
    count: 6810
  },
  {
    label: 'Refunded',
    value: 'refunded',
    count: 8
  },
  {
    label: 'Failed',
    value: 'failed',
    count: 2
  }
];

const filterMenus: FilterMenu[] = [
  {
    label: 'Payment status',
    items: [
      {
        label: 'Action'
      },
      {
        label: 'Another Action'
      },
      {
        label: 'Something else here'
      }
    ]
  },
  {
    label: 'Fulfilment status',
    items: [
      {
        label: 'Action'
      },
      {
        label: 'Another Action'
      },
      {
        label: 'Something else here'
      }
    ]
  }
];

const Orders = () => {
  const table = useAdvanceTable({
    data: ordersTableData,
    columns: ordersTableColumns,
    pageSize: 10,
    pagination: true,
    sortable: true,
    selection: true
  });

  const handleSearchInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    table.setGlobalFilter(e.target.value || undefined);
  };

  return (
    <div>
      <PageBreadcrumb items={defaultBreadcrumbItems} />
      <div className="mb-9">
        <h2 className="mb-4">Orders</h2>
        <FilterTab tabItems={tabItems} className="mb-2" />

        <AdvanceTableProvider {...table}>
          <div className="mb-4">
            <div className="d-flex flex-wrap gap-3">
              <SearchBox
                placeholder="Search orders"
                onChange={handleSearchInputChange}
              />
              <div className="scrollbar overflow-hidden-y">
                <FilterButtonGroup menus={filterMenus} />
              </div>
              <div className="ms-xxl-auto">
                <Button variant="link" className="text-900 me-4 px-0">
                  <FontAwesomeIcon icon="file-export" className="fs-9 me-2" />
                  Export
                </Button>
                <Button variant="primary">
                  <FontAwesomeIcon icon="plus" className="me-2" />
                  Add order
                </Button>
              </div>
            </div>
          </div>

          <div className="mx-n4 px-4 mx-lg-n6 px-lg-6 bg-white border-top border-bottom border-200 position-relative top-1">
            <OrdersTable />
          </div>
        </AdvanceTableProvider>
      </div>
    </div>
  );
};

export default Orders;
