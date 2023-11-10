import { ColumnDef } from "@tanstack/react-table";
import AdvanceTable from "components/base/AdvanceTable";
import { currencyFormat } from "helpers/utils";
import { Link } from "react-router-dom";
import AdvanceTableFooter from "components/base/AdvanceTableFooter";
import { Customer } from "data/e-commerce/hyper_types";
import Avatar from "components/base/Avatar";
import Chart from "react-apexcharts";
import { JsxElement } from "typescript";
import { Column } from "react-table";
import { Seller } from "data/e-commerce/hyper_types";
import classNames from "classnames";
import { ApexOptions } from "apexcharts";

/* action column render */
const ActionColumn = () => {
  return (
    <>
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

export const hyper_customersTablecolumns: ColumnDef<Customer>[] = [
  {
    accessorKey: "name",
    header: "Customer",
    cell: ({ row: { original } }) => {
      const { name, avatar } = original;
      return (
        <div className="table-user">
          <img src={avatar} alt="" className="me-2 rounded-circle" />
          <Link to="#" className="text-body fw-semibold">
            {name}
          </Link>
        </div>
      );
    },
  },
  {
    accessorKey: "phone",
    header: "Phone",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "location",
    header: "Location",
  },
  {
    accessorKey: "created_on",
    header: "Created On",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row: { original } }) => {
      const { status } = original;
      return (
        <span
          className={classNames("badge", {
            "badge-success-lighten": status === "Active",
            "badge-danger-lighten": status === "Blocked",
          })}
        >
          {status}
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

const CustomerTable = () => {
  return (
    <div>
      <AdvanceTable tableProps={{ className: "phoenix-table fs-9" }} />
      <AdvanceTableFooter pagination />
    </div>
  );
};

export default CustomerTable;
