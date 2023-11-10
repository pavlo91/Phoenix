import { ColumnDef } from '@tanstack/react-table';
import AdvanceTable from 'components/base/AdvanceTable';
import { currencyFormat } from 'helpers/utils';
import { Link } from 'react-router-dom';
import AdvanceTableFooter from 'components/base/AdvanceTableFooter';
import { ProductsTableProductType } from 'data/e-commerce/products';
import Badge from 'components/base/Badge';
import StarCheckbox from 'components/base/StarCheckbox';
import RevealDropdown, {
  RevealDropdownTrigger
} from 'components/base/RevealDropdown';
import ActionDropdownItems from 'components/common/ActionDropdownItems';

export const productsTablecolumns: ColumnDef<ProductsTableProductType>[] = [
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
          <img src={productImage} alt="" width={53} />
        </Link>
      );
    },
    meta: {
      headerProps: { style: { width: 70 } },
      cellProps: { className: 'py-0' }
    },
    enableSorting: false
  },
  {
    accessorKey: 'product',
    header: 'Product name',
    cell: ({ row: { original } }) => {
      const { product } = original;
      return (
        <Link
          to="/apps/e-commerce/customer/product-details"
          className="fw-semi-bold line-clamp-3"
        >
          {product}
        </Link>
      );
    },
    meta: {
      headerProps: { style: { width: 350 }, className: 'ps-4' },
      cellProps: { className: 'ps-4' }
    }
  },
  {
    id: 'price',
    accessorFn: ({ price, priceMax, priceMin }) =>
      `${price} ${priceMax} ${priceMin}`,
    header: 'Price',
    cell: ({ row: { original } }) => {
      const { price, priceMax, priceMin } = original;
      return price
        ? currencyFormat(price)
        : // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          `${currencyFormat(priceMin!)} - ${currencyFormat(priceMax!)}`;
    },
    meta: {
      headerProps: { style: { width: 150 }, className: 'ps-4 text-end' },
      cellProps: { className: 'fw-bold ps-4 text-700 text-end' }
    }
  },
  {
    accessorKey: 'category',
    header: 'Category',
    meta: {
      headerProps: { style: { width: 150 }, className: 'ps-4' },
      cellProps: { className: 'fs-9 fw-semi-bold ps-4 text-600' }
    }
  },
  {
    id: 'tags',
    accessorFn: ({ tags }) => tags.join(''),
    header: 'Tags',
    cell: ({ row: { original } }) => {
      const { tags } = original;
      return (
        <div className="d-flex flex-wrap gap-2">
          {tags.map(tag => (
            <Link key={tag} to="#!" className="text-decoration-none">
              <Badge variant="tag">{tag}</Badge>
            </Link>
          ))}
        </div>
      );
    },
    meta: {
      headerProps: { style: { width: 250 }, className: 'ps-3' },
      cellProps: { style: { minWidth: 225 }, className: 'ps-3' }
    }
  },
  {
    id: 'starred',
    accessorKey: '',
    cell: () => {
      return <StarCheckbox />;
    },
    meta: {
      headerProps: { style: { width: 125 }, className: 'ps-4' },
      cellProps: { className: 'ps-4 text-center' }
    }
  },
  {
    accessorKey: 'vendor',
    header: 'Vendor',
    cell: ({ row: { original } }) => {
      const { vendor } = original;
      return <Link to="#!">{vendor}</Link>;
    },
    meta: {
      headerProps: { style: { width: 200 }, className: 'ps-4' },
      cellProps: { className: 'ps-4 fw-semi-bold text-start' }
    }
  },
  {
    accessorKey: 'publishedOn',
    header: 'Published on',
    meta: {
      headerProps: { style: { width: 50 }, className: 'ps-4' },
      cellProps: { className: 'text-600 ps-4' }
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

const ProductsTable = () => {
  return (
    <div>
      <AdvanceTable tableProps={{ className: 'phoenix-table fs-9' }} />
      <AdvanceTableFooter pagination />
    </div>
  );
};

export default ProductsTable;
