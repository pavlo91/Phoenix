import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'components/base/Button';
import DatePicker from 'components/base/DatePicker';
import { actionItems, addToCardItems } from 'data/project-management/actions';
import { Col, Dropdown, Row } from 'react-bootstrap';

const ActionSection = () => {
  return (
    <Row className="gx-0 gy-3 border-bottom border-300 px-5 px-lg-6 py-4 p-xl-0">
      <Col xs={12} xl={5} className="border-end-xl border-300">
        <Row className="h-100 align-items-center px-xl-6 justify-content-between justify-content-xl-start">
          <Col xs="auto">
            <div>
              <p className="text-700 fs-10 fw-semi-bold mb-0">Created</p>
              <p className="text-1000 fs-9 mb-0">Jan 3, 3:24 pm</p>
            </div>
          </Col>
          <Col xs={7} lg={6}>
            <DatePicker
              placeholder="Set the due date"
              options={{
                defaultDate: 'May 1, 2023'
              }}
            />
          </Col>
        </Row>
      </Col>
      <Col xs={12} xl={7}>
        <div className="px-xl-6 py-xl-4">
          <div className="d-flex gap-2 justify-content-between align-items-center">
            <div className="d-flex gap-2">
              <Dropdown align="end">
                <Dropdown.Toggle
                  className="d-none d-sm-block btn btn-soft-secondary dropdown-toggle dropdown-caret-none d-flex align-items-center"
                  variant="soft-secondary"
                >
                  Add to card
                  <FontAwesomeIcon icon="plus" className="ms-2" />
                </Dropdown.Toggle>
                <Dropdown.Toggle
                  className="d-sm-none btn btn-icon btn-icon-lg btn-soft-secondary dropdown-toggle dropdown-caret-none d-flex align-items-center show"
                  variant="soft-secondary"
                >
                  <FontAwesomeIcon icon="plus" />
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <div className="px-2 d-flex flex-column gap-2">
                    {addToCardItems.map(item => (
                      <Dropdown.Item
                        key={item.label}
                        as={Button}
                        variant="soft-secondary"
                        startIcon={
                          <FontAwesomeIcon icon={item.icon} className="me-2" />
                        }
                        className="w-100 text-start"
                        size="sm"
                      >
                        {item.label}
                      </Dropdown.Item>
                    ))}
                  </div>
                </Dropdown.Menu>
              </Dropdown>
              <Dropdown align="end">
                <Dropdown.Toggle
                  className="btn-icon btn-icon-lg bg-100 text-1100 hover-bg-200 rounded-2 me-2 dropdown-caret-none"
                  variant=""
                >
                  <FontAwesomeIcon icon="ellipsis-vertical" />
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <div className="px-2 d-flex flex-column gap-2">
                    {actionItems.map(item => (
                      <Dropdown.Item
                        as={Button}
                        variant="soft-secondary"
                        startIcon={
                          <FontAwesomeIcon icon={item.icon} className="me-2" />
                        }
                        className="w-100 text-start"
                        size="sm"
                        key={item.label}
                      >
                        {item.label}
                      </Dropdown.Item>
                    ))}
                  </div>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <div className="d-flex gap-2">
              <Dropdown align="end">
                <Dropdown.Toggle
                  className="dropdown-caret-none d-flex align-items-center"
                  variant="soft-info"
                >
                  Review
                  <FontAwesomeIcon icon="angle-down" className="ms-2" />
                </Dropdown.Toggle>
                <Dropdown.Menu className="py-2">
                  <Dropdown.Item eventKey="1">View</Dropdown.Item>
                  <Dropdown.Item eventKey="2">Export</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item eventKey="4" className="text-danger">
                    Remove
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

              <Button className="btn-icon btn-icon-lg" variant="soft-secondary">
                <FontAwesomeIcon icon="check" />
              </Button>
            </div>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default ActionSection;
