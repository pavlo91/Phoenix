import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "components/base/Button";
import FilterButtonGroup, {
  FilterMenu,
} from "components/common/FilterButtonGroup";
import FilterTab, { FilterTabItem } from "components/common/FilterTab";
import PageBreadcrumb from "components/common/PageBreadcrumb";
import SearchBox from "components/common/SearchBox";
import CustomersTable, {
  hyper_ordersTablecolumns,
} from "components/tables/Hyper_Orders";
import { defaultBreadcrumbItems } from "data/commonData";
import { orders } from "../hyper_data";
import useAdvanceTable from "hooks/useAdvanceTable";
import AdvanceTableProvider from "providers/AdvanceTableProvider";
import { ChangeEvent } from "react";
import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import { Link } from "react-router-dom";
import Hyper_SellerTable from "components/tables/Hyper_SellerTable";

/* revenue column render */
const RevenueColumn = ({ row }: any) => {
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

const tabItems: FilterTabItem[] = [
  {
    label: "All",
    value: "all",
    count: 68817,
  },
  {
    label: "New",
    value: "new",
    count: 6,
  },
  {
    label: "Abandoned checkouts",
    value: "abandoned_checkouts",
    count: 17,
  },
  {
    label: "Locals",
    value: "locals",
    count: 6810,
  },
  {
    label: "Email subscribers",
    value: "email_subscribers",
    count: 8,
  },
  {
    label: "Top reviews",
    value: "top_reviews",
    count: 2,
  },
];

const filterMenus: FilterMenu[] = [
  {
    label: "Country",
    items: [
      {
        label: "USA",
      },
      {
        label: "UK",
      },
      {
        label: "Australia",
      },
    ],
  },
  {
    label: "VIP",
    items: [
      {
        label: "VIP 1",
      },
      {
        label: "VIP 2",
      },
      {
        label: "VIP 3",
      },
    ],
  },
];

const Orders = () => {
  const table = useAdvanceTable({
    data: orders,
    columns: hyper_ordersTablecolumns,
    pageSize: 10,
    pagination: true,
    sortable: true,
    selection: true,
  });

  const handleSearchInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    table.setGlobalFilter(e.target.value || undefined);
  };

  return (
    <div>
      <div className="mb-9">
        <div className="page-title-box">
          <h2 className="mb-4 page-title">Orders</h2>
        </div>
        <AdvanceTableProvider {...table}>
          <div className="">
            <div className="gap-3 hyper-table-header">
              <div className="d-flex justify-content-between">
                <Button variant="danger" className="mb-2">
                  <i className="mdi mdi-plus-circle me-2"></i> Add New Order
                </Button>
                <div className="text-sm-end">
                  <Button variant="success" className="mb-2 me-1">
                    <i className="mdi mdi-cog"></i>
                  </Button>

                  <Button variant="light" className="mb-2 me-1">
                    Import
                  </Button>

                  <Button variant="light" className="mb-2 me-1">
                    Export
                  </Button>
                </div>
              </div>
              <SearchBox
                placeholder="Search orders"
                onChange={handleSearchInputChange}
              />
            </div>
          </div>
          <div className="mx-n4 px-4 mx-lg-n6 px-lg-6 bg-white border-top border-bottom border-200 position-relative top-1">
            <Hyper_SellerTable />
          </div>
        </AdvanceTableProvider>
      </div>
    </div>
  );
};

export default Orders;
