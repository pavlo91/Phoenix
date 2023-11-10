import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'components/base/Button';
import FilterButtonGroup, {
  FilterMenu
} from 'components/common/FilterButtonGroup';
import FilterTab, { FilterTabItem } from 'components/common/FilterTab';
import PageBreadcrumb from 'components/common/PageBreadcrumb';
import SearchBox from 'components/common/SearchBox';
import ProductsTable, {
  productsTablecolumns
} from 'components/tables/ProductsTable';
import { defaultBreadcrumbItems } from 'data/commonData';
import { productsTableData } from 'data/e-commerce/products';
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
    label: 'Published',
    value: 'published',
    count: 70348
  },
  {
    label: 'Drafts',
    value: 'drafts',
    count: 17
  },
  {
    label: 'On discount',
    value: 'on_discount',
    count: 810
  }
];

const filterMenus: FilterMenu[] = [
  {
    label: 'Category',
    items: [
      {
        label: 'Plants'
      },
      {
        label: 'Furniture'
      },
      {
        label: 'Fashion'
      }
    ]
  },
  {
    label: 'Vendor',
    items: [
      {
        label: 'Blue Olive Plant sellers. Inc'
      },
      {
        label: 'Beatrice Furnitures'
      },
      {
        label: 'Kizzstore'
      }
    ]
  }
];

const Products = () => {
  const table = useAdvanceTable({
    data: productsTableData,
    columns: productsTablecolumns,
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
        <h2 className="mb-4">Products</h2>
        <FilterTab tabItems={tabItems} className="mb-2" />
        <AdvanceTableProvider {...table}>
          <div className="mb-4">
            <div className="d-flex flex-wrap gap-3">
              <SearchBox
                placeholder="Search products"
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
                  Add product
                </Button>
              </div>
            </div>
          </div>

          <div className="mx-n4 px-4 mx-lg-n6 px-lg-6 bg-white border-top border-bottom border-200 position-relative top-1">
            <ProductsTable />
          </div>
        </AdvanceTableProvider>
      </div>
    </div>
  );
};

export default Products;
