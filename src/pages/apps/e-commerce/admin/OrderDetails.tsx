import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'components/base/Button';
import OrderDetailsTable from 'components/tables/OrderDetailsTable';
import { Card, Col, Dropdown, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import OrderDetailsSummaryCard from 'components/cards/OrderDetailsSummaryCard';
import {
  BillingDetails,
  OtherDetails,
  ShippingDetails
} from 'components/modules/e-commerce/OrderDeliveryDetails';
import PageBreadcrumb from 'components/common/PageBreadcrumb';
import { defaultBreadcrumbItems } from 'data/commonData';

const OrderDetails = () => {
  return (
    <div>
      <PageBreadcrumb items={defaultBreadcrumbItems} />
      <div className="mb-9">
        <h2 className="mb-1">
          Order <span>#349</span>
        </h2>
        <div className="d-flex flex-wrap flex-between-center mb-4 gap-2">
          <p className="text-800 lh-sm mb-0">
            Customer ID :{' '}
            <Link className="fw-bold" to="#!">
              {' '}
              2364847
            </Link>
          </p>
          <div className="d-flex gap-5">
            <Button
              variant="link"
              className="p-0 text-900 text-decoration-none"
              startIcon={<FontAwesomeIcon icon="print" className="me-2" />}
            >
              Print
            </Button>
            <Button
              variant="link"
              className="p-0 text-900 text-decoration-none"
              startIcon={<FontAwesomeIcon icon="undo" className="me-2" />}
            >
              Refund
            </Button>
            <Dropdown>
              <Dropdown.Toggle
                variant=""
                className="p-0 dropdown-caret-none text-decoration-none"
              >
                More action
                <FontAwesomeIcon icon="chevron-down" className="ms-2" />
              </Dropdown.Toggle>
              <Dropdown.Menu align="end">
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
        <Row className="g-5 gy-7">
          <Col xs={12} xl={8} xxl={9}>
            <div className="mb-6">
              <OrderDetailsTable />
            </div>
            <Row className="gx-4 gy-6 g-xl-7 justify-content-sm-center justify-content-xl-start">
              <Col xs={12} sm="auto">
                <BillingDetails />
              </Col>

              <Col xs={12} sm="auto">
                <ShippingDetails />
              </Col>

              <Col xs={12} sm="auto">
                <OtherDetails />
              </Col>
            </Row>
          </Col>
          <Col xs={12} xl={4} xxl={3}>
            <OrderDetailsSummaryCard className="mb-4" />
            <Card>
              <Card.Body>
                <Card.Title as="h3" className="mb-4">
                  Order Status
                </Card.Title>
                <h6 className="mb-2">Payment status</h6>
                <Form.Select className="mb-4">
                  <option value="processing">Processing</option>
                  <option value="canceled">Canceled</option>
                  <option value="completed">Completed</option>
                </Form.Select>
                <h6 className="mb-2">Fulfillment status</h6>
                <Form.Select>
                  <option value="unfulfilled">Unfulfilled</option>
                  <option value="fulfilled">Fulfilled</option>
                  <option value="Pending">Pending</option>
                </Form.Select>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default OrderDetails;
