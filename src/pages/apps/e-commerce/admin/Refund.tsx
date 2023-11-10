import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'components/base/Button';
import OrderDetailsTable from 'components/tables/OrderDetailsTable';
import { Card, Col, Dropdown, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import OrderDetailsSummaryCard from 'components/cards/OrderDetailsSummaryCard';
import PageBreadcrumb from 'components/common/PageBreadcrumb';
import { defaultBreadcrumbItems } from 'data/commonData';

const Refund = () => {
  return (
    <div>
      <PageBreadcrumb items={defaultBreadcrumbItems} />
      <div className="mb-9">
        <h2 className="mb-3">Refund</h2>
        <div className="d-flex flex-wrap align-items-center mb-4 gap-3">
          <p className="text-800 lh-sm mb-0">
            Order :{' '}
            <Link className="fw-bold" to="#!">
              {' '}
              #349
            </Link>
          </p>
          <div className="flex-1 d-flex flex-between-center gap-3">
            <p className="text-800 lh-sm mb-0 flex-1 white-space-nowrap">
              Customer Id :{' '}
              <Link className="fw-bold" to="#!">
                {' '}
                2364847
              </Link>
            </p>
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
            <OrderDetailsTable />
          </Col>
          <Col xs={12} xl={4} xxl={3}>
            <OrderDetailsSummaryCard className="mb-4" />
            <Card>
              <Card.Body>
                <Card.Title as="h4" className="mb-4">
                  Refund Amount
                </Card.Title>
                <Form.Control
                  type="number"
                  placeholder="Amount"
                  className="mb-4 input-spin-none"
                />
                <Button variant="primary" className="w-100">
                  Refund $500
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Refund;
