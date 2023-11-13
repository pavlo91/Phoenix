import { Button, Card, CardBody, CardFooter } from "react-bootstrap";
import FilterTab, { FilterTabItem } from "components/common/FilterTab";
import { defaultBreadcrumbItems } from "data/commonData";
import PageBreadcrumb from "components/common/PageBreadcrumb";

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

export interface CardItem {
  title: string;
  totalUser: number;
  items: string[];
}

const cardItmes: CardItem[] = [
  {
    title: "Administrator",
    totalUser: 5,
    items: [
      "All Admin Controls",
      "View and Edit Financial Summaries",
      "Enabled Bulk Reports",
      "View and Edit Payouts",
      "View and Edit Disputes",
      "View and Edit Disputes",
      "View and Edit Disputes",
      "View and Edit Disputes",
      "View and Edit Disputes",
      "View and Edit Disputes",
      "View and Edit Disputes",
      "View and Edit Disputes",
    ],
  },
  {
    title: "Developer",
    totalUser: 5,
    items: [
      "Some Admin Controls",
      "View Financial Summaries only",
      "View and Edit API Controls",
      "View Payouts only",
      "View and Edit Disputes",
      "View and Edit Disputes",
      "View and Edit Disputes",
      "View and Edit Disputes",
    ],
  },
  {
    title: "Analyst",
    totalUser: 5,
    items: [
      "All Admin Controls",
      "View and Edit Financial Summaries",
      "Enabled Bulk Reports",
      "View and Edit Payouts",
      "View and Edit Disputes",
      "View and Edit Disputes",
      "View and Edit Disputes",
    ],
  },
  {
    title: "Support",
    totalUser: 5,
    items: [
      "All Admin Controls",
      "View and Edit Financial Summaries",
      "Enabled Bulk Reports",
      "View and Edit Payouts",
      "View and Edit Disputes",
    ],
  },
  {
    title: "Trial",
    totalUser: 5,
    items: [
      "All Admin Controls",
      "View and Edit Financial Summaries",
      "Enabled Bulk Reports",
      "View and Edit Payouts",
      "View and Edit Disputes",
    ],
  },
];

const RoleList = () => {
  const location = window.location.pathname;
  console.log("location :>> ", location);
  return (
    <div>
      <PageBreadcrumb items={defaultBreadcrumbItems} />
      <div className="mb-2">
        <div className="d-flex justify-content-between">
          <h2 className="mb-4">Users</h2>

          <div>
            <button type="button" className="btn btn-outline-primary me-4">
              Invite Friends
            </button>
            <Button type="button">New Project</Button>
          </div>
        </div>
      </div>
      <div className="row row-cols-3">
        {cardItmes.map((item) => {
          return (
            <div className="col">
              <div className="card">
                <div className="card-body">
                  <h3 className="card-title">{item.title}</h3>
                  <h4 className="card-title">
                    Total users with this role: {item.totalUser}
                  </h4>
                  <div className="d-flex flex-column text-gray-600">
                    {item.items.map((list, index) => {
                      if (index > 4) {
                        return;
                      }
                      return (
                        <div className="d-flex align-items-center py-2">
                          <i className="bi bi-dash"></i>
                          {list}
                        </div>
                      );
                    })}
                    <div className="d-flex align-items-center py-2">
                      {!(item.items.length <= 5) && <></>}
                      {item.items.length > 5 && (
                        <>
                          <i className="bi bi-dash"></i>
                          <em>and {item.items.length - 5} more...</em>
                        </>
                      )}
                    </div>
                    <div className="row mt-4">
                      <div className="col">
                      <button type="button" className="btn btn-outline-primary py-2">View Role</button>
                      </div>
                      <div className="col">
                      <button type="button" className="btn btn-primary py-2">Edit Role</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        <div className="col">
          <div className="card" style={{}}>
            <div className="card-body d-flex flex-center">
              <button
                type="button"
                className="btn btn-clear d-flex flex-column flex-center"
                data-bs-toggle="modal"
                data-bs-target="#kt_modal_add_role"
              >
                <img
                  src="assets/images/add_new_role.png"
                  className="mw-100 mh-150px mb-7"
                />
                <div className="fw-bold fs-5 text-gray-600 text-hover-primary">
                  Add New Role
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoleList;
