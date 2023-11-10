import { ColumnDef } from "@tanstack/react-table";
import AdvanceTable from "components/base/AdvanceTable";
import { currencyFormat } from "helpers/utils";
import { Link } from "react-router-dom";
import AdvanceTableFooter from "components/base/Hyper_AdvanceTableFooter";
import { Customer } from "data/e-commerce/customers";
import Avatar from "components/base/Avatar";
import Chart from "react-apexcharts";
import { JsxElement } from "typescript";
import { Column } from "react-table";
import { Seller } from "data/e-commerce/hyper_types";
import { ApexOptions } from "apexcharts";

/* revenue column render */
const RevenueColumn = () => {
  const options: ApexOptions = {
    chart: {
      type: "line",
      sparkline: {
        enabled: true,
      },
    },
    series: [],
    stroke: {
      width: 2,
      curve: "smooth",
    },
    markers: {
      size: 0,
    },
    colors: ["#727cf5"],
    tooltip: {
      fixed: {
        enabled: false,
      },
      x: {
        show: false,
      },
      y: {
        title: {
          formatter: function (seriesName) {
            return "";
          },
        },
      },
      marker: {
        show: false,
      },
    },
  };

  const series = [
    { name: "data", data: [66, 95, 53, 66, 70, 41, 27, 62, 87, 69, 17] },
  ];

  return <Chart options={options} series={series} height={35} width={80} />;
};

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

export const hyper_sellersTablecolumns: ColumnDef<Seller>[] = [
  {
    accessorKey: "name",
    header: "Seller",
    cell: ({ row: { original } }) => {
      const { name, image } = original;
      return (
        <div className="table-user">
          <img src={image} alt="" className="me-2 rounded-circle" />
          <Link to="#" className="text-body fw-semibold">
            {name}
          </Link>
        </div>
      );
    },
  },
  {
    accessorKey: "store",
    header: "Store Name",
  },
  {
    accessorKey: "products",
    header: "Products",
  },
  {
    accessorKey: "balance",
    header: "Wallet Balance",
  },
  {
    accessorKey: "created_on",
    header: "Created Date",
  },
  {
    accessorKey: "revenue",
    header: "Revenue",
    cell: RevenueColumn,
  },
  {
    accessorKey: "action",
    header: "Action",
    cell: ActionColumn,
  },
];

const SellerTable = () => {
  return (
    <div>
      <AdvanceTable tableProps={{ className: "phoenix-table fs-9" }} />
      <AdvanceTableFooter pagination />
    </div>
  );
};

export default SellerTable;
