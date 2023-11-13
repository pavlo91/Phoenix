import React, { ChangeEvent, useState } from "react";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FilterButtonGroup, {
  FilterMenu,
} from "components/common/FilterButtonGroup";
import FilterTab, { FilterTabItem } from "components/common/FilterTab";
import SearchBox from "components/common/SearchBox";
import { users } from "data/users/users";
import useAdvanceTable from "hooks/useAdvanceTable";
import { defaultBreadcrumbItems } from "data/commonData";
import PageBreadcrumb from "components/common/PageBreadcrumb";
import AdvanceTableProvider from "providers/AdvanceTableProvider";
import UsersTable, { usersTablecolumns } from "components/tables/UserTable";
import { AddUser } from "./AddUser";

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

const UserList = () => {
  const [isUserPopOpen, setIsUserPopOpen] = useState(false);
  const table = useAdvanceTable({
    data: users,
    columns: usersTablecolumns,
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
          <h2 className="mb-4">Users</h2>

          <div>
            <button type="button" className="btn btn-outline-primary me-4">
              Invite Friends
            </button>

            <Button type="button">New Project</Button>
          </div>
        </div>
        <FilterTab tabItems={tabItems} className="mb-2" />

        <AdvanceTableProvider {...table}>
          <div className="bg-white p-4">
            <div className="d-flex justify-content-between">
              <SearchBox
                placeholder="Search customers"
                onChange={handleSearchInputChange}
              />
              {/* <Button variant="link" className="text-900 me-4 px-0 ">
                  <FontAwesomeIcon icon="file-export" className="fs-9 me-2" />
                  Export
                </Button> */}
                <div>
                  <button
                    type="button"
                    className="btn btn-outline-primary me-4"
                  >
                    {" "}
                    Filter
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-primary me-4"
                  >
                    <FontAwesomeIcon icon="file-export" className="fs-9 me-2" />
                    Export
                  </button>
                  <Button variant="primary" onClick={handleAddUserClick}>
                    <FontAwesomeIcon icon="plus" className="me-2" />
                    Add user
                  </Button>
                  <AddUser
                    isOpen={isUserPopOpen}
                    handleClose={handleUserPopClose}
                  />
              </div>
            </div>
            <UsersTable />
          </div>

          {/* <div className="mx-n4 px-4 mx-lg-n6 px-lg-6 bg-white border-top border-bottom border-200 position-relative top-1">
      
          </div> */}
        </AdvanceTableProvider>
      </div>
    </div>
  );
};

export default UserList;
