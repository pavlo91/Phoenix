import React, { ChangeEvent, useState } from "react";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FilterButtonGroup, {
  FilterMenu,
} from "components/common/FilterButtonGroup";
import FilterTab, { FilterTabItem } from "components/common/FilterTab";
import SearchBox from "components/common/SearchBox";
import { users } from "data/users/users";
import { permission } from "data/users/users";
import useAdvanceTable from "hooks/useAdvanceTable";
import { defaultBreadcrumbItems } from "data/commonData";
import PageBreadcrumb from "components/common/PageBreadcrumb";
import AdvanceTableProvider from "providers/AdvanceTableProvider";
import UsersTable, { permissionTablecolumns } from "components/tables/UserTable";
import { AddPomission } from "./AddPermission";

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

const Permission = () => {
  const [isUserPopOpen, setIsUserPopOpen] = useState(false);
  const table = useAdvanceTable({
    data: permission,
    columns: permissionTablecolumns,
    pageSize: 10,
    pagination: true,
    sortable: true,
    selection: true,
  });
  const handleSearchInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    table.setGlobalFilter(e.target.value || undefined);
  };

  const handleAddUserClick = () => {
    setIsUserPopOpen(true);
  };

  const handleUserPopClose = () => {
    setIsUserPopOpen(false);
  };

  const location = window.location.pathname;
  console.log("location :>> ", location);
  return (
    <div>
      <PageBreadcrumb items={defaultBreadcrumbItems} />
      <div className="mb-9">
        <div className="d-flex justify-content-between">
          <h2 className="mb-4">Permission List</h2>

          <div>
            <button type="button" className="btn btn-outline-primary me-4">
              Invite Friends
            </button>

            <Button type="button">New Project</Button>
          </div>
        </div>

        <AdvanceTableProvider {...table}>
          <div className="bg-white p-4">
            <div className="d-flex justify-content-between">
              <SearchBox
                placeholder="Search customers"
                onChange={handleSearchInputChange}
              />
              <div className="mb-4">
                <Button variant="primary" onClick={handleAddUserClick}>
                  <FontAwesomeIcon icon="plus" className="me-2" />
                  Add Permission
                </Button>
                <AddPomission
                  isOpen={isUserPopOpen}
                  handleClose={handleUserPopClose}
                />
              </div>
            </div>
            <UsersTable />
          </div>
        </AdvanceTableProvider>
      </div>
    </div>
  );
};

export default Permission;
