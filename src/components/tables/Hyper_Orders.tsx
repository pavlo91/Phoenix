import { ColumnDef } from "@tanstack/react-table";
import AdvanceTable from "components/base/AdvanceTable";
import { currencyFormat } from "helpers/utils";
import { Link } from "react-router-dom";
import AdvanceTableFooter from "components/base/AdvanceTableFooter";
import { Order } from "data/e-commerce/hyper_types";
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

export const hyper_ordersTablecolumns: ColumnDef<Order>[] = [
  {
    accessorKey: "order_id",
    header: "Order ID",
    cell: ({ row: { original } }) => {
      const { order_id } = original;
      return (
        <Link to="#" className="text-body fw-bold">
          #BM{order_id}
        </Link>
      );
    },
  },
  {
    accessorKey: "order_date",
    header: "Date",
    cell: ({ row }) => {
      return (
        <>
          {row.original.order_date}{" "}
          <small className="text-muted">{row.original.order_time}</small>
        </>
      );
    },
  },
  {
    accessorKey: "payment_status",
    header: "Payment Status",
    cell: ({ row }) => {
      return (
        <h5>
          <span
            className={classNames("badge", {
              "badge-success-lighten": row.original.payment_status === "Paid",
              "badge-danger-lighten":
                row.original.payment_status === "Payment Failed",
              "badge-info-lighten": row.original.payment_status === "Unpaid",
              "badge-warning-lighten":
                row.original.payment_status === "Awaiting Authorization",
            })}
          >
            {row.original.payment_status === "Paid" && (
              <i className="mdi mdi-bitcoin me-1"></i>
            )}
            {row.original.payment_status === "Payment Failed" && (
              <i className="mdi mdi-cancel me-1"></i>
            )}
            {row.original.payment_status === "Unpaid" && (
              <i className="mdi mdi-cash me-1"></i>
            )}
            {row.original.payment_status === "Awaiting Authorization" && (
              <i className="mdi mdi-timer-sand me-1"></i>
            )}
            {row.original.payment_status}
          </span>
        </h5>
      );
    },
  },
  {
    accessorKey: "total",
    header: "Total",
  },
  {
    accessorKey: "payment_method",
    header: "Payment Method",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      return (
        <h5>
          <span
            className={classNames("badge", {
              "badge-success-lighten":
                row.original.order_status === "Delivered",
              "badge-danger-lighten": row.original.order_status === "Cancelled",
              "badge-info-lighten": row.original.order_status === "Shipped",
              "badge-warning-lighten":
                row.original.order_status === "Processing",
            })}
          >
            {row.original.order_status}
          </span>
        </h5>
      );
    },
  },
  {
    accessorKey: "action",
    header: "Action",
    cell: ActionColumn,
  },
];

const CustomerTable = () => {
  return (
    <div>
      <AdvanceTable tableProps={{ className: "phoenix-table fs-9" }} />
      <AdvanceTableFooter pagination />
    </div>
  );
};

export default CustomerTable;
