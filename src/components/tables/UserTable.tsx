import { ColumnDef } from "@tanstack/react-table";
import AdvanceTable from "components/base/AdvanceTable";
import { currencyFormat } from "helpers/utils";
import { Link } from "react-router-dom";
import AdvanceTableFooter from "components/base/AdvanceTableFooter";
import { Customer } from "data/e-commerce/customers";
import { User, Permission } from "data/users/users";
import Avatar from "components/base/Avatar";
import { Dropdown } from "react-bootstrap";
import { Badge } from "react-bootstrap";

export const usersTablecolumns: ColumnDef<User>[] = [
  {
    accessorKey: "user",
    header: "User",
    cell: ({ row: { original } }) => {
      const { user, avatar, email } = original;
      return (
        // <Link
        //   to="/apps/e-commerce/admin/customer-details"
        //   className="d-flex align-items-center "
        // >
        <div className="d-flex">
          {/* <Avatar src={avatar} size="m" /> */}
          <div>
            <p className="mb-0 ms-3 fw-bold">{user}</p>
            {/* <p className="mb-0 ms-3 fw-bold text-black-50">{email}</p> */}
          </div>
        </div>

        // </Link>
      );
    },
    meta: {
      headerProps: { style: { width: "20%" }, className: "pe-5 ps-0" },
      cellProps: { className: "py-0 pe-5 ps-0 white-space-nowrap" },
    },
  },
  {
    accessorKey: "role",
    header: "Role",

    meta: {
      headerProps: { style: { width: "20%" }, className: "pe-5 ps-1" },
      cellProps: { className: "pe-5 ps-1 text-black-50" },
    },
  },
  {
    accessorKey: "lastLogin",
    header: "Last Login",
    meta: {
      headerProps: { style: { width: "15%" }, className: " px-1" },
      cellProps: { className: "fw-semi-bold text-1000  px-1 " },
    },
    cell: ({ row: { original } }) => {
      const { lastLogin } = original;
      return (
        // <div className="badge badge-light fw-bold">Yesterday</div>
        <div className="badge badge-light-secondary fw-bold">{lastLogin}</div>
      );
    },
  },
  {
    accessorKey: "twoStep",
    header: "Two Step",
    meta: {
      headerProps: { style: { width: "15%" }, className: " ps-3 pe-1" },
      cellProps: { className: "fw-bold text-1100 ps-3  pe-1  " },
    },
    cell: ({ row }) => {
      return <div className="badge badge-light-success fw-bold">Enabled</div>;
    },
  },
  {
    accessorKey: "joinedDate",
    header: "Joined Date",
    meta: {
      headerProps: { style: { width: "15%" }, className: "ps-7" },
      cellProps: { className: "ps-7 text-1000 white-space-nowrap" },
    },
  },
  {
    accessorKey: "actions",
    header: "Actions",
    meta: {
      headerProps: { style: { width: "15%" }, className: "text-end px-1" },
      cellProps: { className: "text-700 text-end px-1" },
    },
    cell: ({ row: { original } }) => {
      return (
        <Dropdown>
          <Dropdown.Toggle
            id="dropdown-basic"
            className="bg-light text-dark shadow-none"
          >
            Action
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">
              {" "}
              <Link
                to="/apps/e-commerce/admin/customer-details"
                className="btn btn-link btn-sm px-0 text-900"
              >
                <i className="fa fa-pencil-alt text-900 me-2" />
                Edit
              </Link>
            </Dropdown.Item>
            <Dropdown.Item href="#/action-2">
              {" "}
              <button className="btn btn-link btn-sm px-0 text-danger">
                <i className="fa fa-trash-alt text-danger me-2" />
                Delete
              </button>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      );
    },
  },
];

export const permissionTablecolumns: ColumnDef<Permission>[] = [
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row: { original } }) => {
      const { name } = original;
      return (
        <div className="d-flex">
          <div>
            <p className="mb-0 ms-0 fw-bold">{name}</p>
          </div>
        </div>
      );
    },
    meta: {
      headerProps: { style: { width: "20%" }, className: "pe-5 ps-0" },
      cellProps: { className: "py-0 pe-5 ps-0 white-space-nowrap" },
    },
  },
  {
    accessorKey: "assignedto",
    header: "Assigned To",
    meta: {
      headerProps: { style: { width: "15%" }, className: " ps-3 pe-1" },
      cellProps: { className: "fw-bold text-1100 ps-3  pe-1  " },
    },
    cell: ({ row }) => {
      return <div className="badge badge-light-primary fs-7 m-1">{}</div>;
    },
  },
  {
    accessorKey: "createdDate",
    header: "Created Date",
    meta: {
      headerProps: { style: { width: "15%" }, className: "ps-7" },
      cellProps: { className: "ps-7 text-1000 white-space-nowrap" },
    },
  },
  {
    accessorKey: "actions",
    header: "Actions",
    meta: {
      headerProps: { style: { width: "15%" }, className: "text-end px-1" },
      cellProps: { className: "text-700 text-end px-1" },
    },
    cell: ({ row: { original } }) => {
      return (
        <div>
          <Link
            to="/apps/e-commerce/admin/customer-details"
            className="btn btn-link btn-sm px-0 text-900"
          >
            <i className="fa fa-pencil-alt text-900 me-2" />
            Edit
          </Link>
          <button className="btn btn-link btn-sm px-0 text-danger">
            <i className="fa fa-trash-alt text-danger me-2" />
            Delete
          </button>
        </div>
      );
    },
  },
];

const UsersTable = () => {
  return (
    <div>
      <AdvanceTable tableProps={{ className: "phoenix-table fs-9" }} />
      <AdvanceTableFooter pagination />
    </div>
  );
};

export default UsersTable;
