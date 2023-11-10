import { ColumnDef } from "@tanstack/react-table";
import AdvanceTable from "components/base/AdvanceTable";
import { currencyFormat } from "helpers/utils";
import { Link } from "react-router-dom";
import AdvanceTableFooter from "components/base/AdvanceTableFooter";
import { Product } from "data/e-commerce/hyper_types";
import Avatar from "components/base/Avatar";
import Chart from "react-apexcharts";
import { JsxElement } from "typescript";
import { Column } from "react-table";
import classNames from "classnames";
import { ApexOptions } from "apexcharts";

/* action column render */
const ActionColumn = () => {
  return (
    <>
      <Link to="#" className="action-icon">
        {" "}
        <i className="mdi mdi-eye"></i>
      </Link>
      <Link to="#" className="action-icon">
        {" "}
        <i className="mdi mdi-square-edit-outline"></i>
      </Link>
      <Link to="#" className="action-icon">
        {" "}
        <i className="mdi mdi-delete"></i>
      </Link>
    </>
  );
};

export const hyper_productsTablecolumns: ColumnDef<Product>[] = [
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => {
      const rating = row.original.rating;
      const emptyStars = rating < 5 ? 5 - rating : 0;
      return (
        <>
          <img
            src={row.original.image}
            alt={row.original.name}
            title={row.original.name}
            className="rounded me-3"
            height="48"
          />
          <p className="m-0 d-inline-block align-middle font-16">
            <Link to="/apps/ecommerce/details" className="text-body">
              {row.original.name}
            </Link>
            <br />
            {[...Array(rating)].map((x, index) => (
              <span
                key={index.toString()}
                className="text-warning mdi mdi-star"
              ></span>
            ))}
            {[...Array(emptyStars)].map((x, index) => (
              <span
                key={index.toString()}
                className="text-warning mdi mdi-star-outline"
              ></span>
            ))}
          </p>
        </>
      );
    },
  },
  {
    accessorKey: "category",
    header: "Category",
  },
  {
    accessorKey: "added_date",
    header: "Added Date",
  },
  {
    accessorKey: "price",
    header: "Price",
  },
  {
    accessorKey: "quantity",
    header: "Quantity",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      return (
        <span
          className={classNames("badge", {
            "bg-success": row.original.status,
            "bg-danger": !row.original.status,
          })}
        >
          {row.original.status ? "Active" : "Deactivated"}
        </span>
      );
    },
  },
  {
    accessorKey: "action",
    header: "Action",
    cell: ActionColumn,
  },
];

const ProductsTable = () => {
  return (
    <div>
      <AdvanceTable tableProps={{ className: "phoenix-table fs-9" }} />
      <AdvanceTableFooter pagination />
    </div>
  );
};

export default ProductsTable;
