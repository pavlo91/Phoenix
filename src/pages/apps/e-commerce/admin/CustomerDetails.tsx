import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'components/base/Button';
import CustomerNotesCard from 'components/cards/CustomerNotesCard';
import CustomerProfileCard from 'components/cards/CustomerProfileCard';
import PageBreadcrumb from 'components/common/PageBreadcrumb';
import CustomerOrdersTable from 'components/tables/CustomerOrdersTable';
import CustomerRatingsTable from 'components/tables/CustomerRatingsTable';
import CustomerWishlistTable from 'components/tables/CustomerWishlistTable';
import { defaultBreadcrumbItems } from 'data/commonData';
import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';

const CustomerDetails = () => {
  return (
    <div>
      <PageBreadcrumb items={defaultBreadcrumbItems} />
      <div className="mb-9">
        <Row className="d-flex align-items-center justify-content-between g-3 mb-4">
          <Col xs="auto">
            <h2 className="mb-0 flex-1">Customer details</h2>
          </Col>
          <Col xs="auto" className="d-flex gap-3 flex-wrap">
            <Button
              variant="phoenix-danger"
              startIcon={<FontAwesomeIcon icon="trash-alt" className="me-2" />}
            >
              Delete customer
            </Button>
            <Button
              variant="phoenix-secondary"
              startIcon={<FontAwesomeIcon icon="key" className="me-2" />}
            >
              Reset password
            </Button>
          </Col>
        </Row>
        <Row className="g-5">
          <Col xs={12} xxl={4}>
            <Row className="g-3 xxl-0 h-100">
              <Col xs={12} md={7} xxl={12}>
                <CustomerProfileCard />
              </Col>
              <Col xs={12} md={5} xxl={12}>
                <Card className="h-100">
                  <Card.Body className="">
                    <div className="d-flex align-items-center mb-3">
                      <h3 className="me-1">Default Address</h3>
                      <Button variant="link" className="p-0">
                        <FontAwesomeIcon
                          icon="pen"
                          className="fs-8 ms-3 text-500"
                        />
                      </Button>
                    </div>
                    <h5 className="text-800">Address</h5>
                    <p className="text-800">
                      Shatinon Mekalan
                      <br />
                      Vancouver, British Columbia
                      <br />
                      Canada
                    </p>
                    <div className="mb-3">
                      <h5 className="text-800">Email</h5>
                      <a href="mailto:shatinon@jeemail.com">
                        shatinon@jeemail.com
                      </a>
                    </div>
                    <h5 className="text-800">Phone</h5>
                    <a className="text-800" href="tel:+1234567890">
                      +1234567890
                    </a>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={12}>
                <CustomerNotesCard className="h-100" />
              </Col>
            </Row>
          </Col>
          <Col xs={12} xxl={8}>
            <div className="d-flex flex-column gap-6">
              <div>
                <h3 className="mb-4">
                  Orders <span className="text-700 fw-normal">(97)</span>
                </h3>
                <CustomerOrdersTable />
              </div>
              <div>
                <h3 className="mb-4">
                  Wishlist <span className="text-700 fw-normal">(43)</span>
                </h3>
                <CustomerWishlistTable />
              </div>
              <div>
                <h3 className="mb-4">
                  Ratings & reviews{' '}
                  <span className="text-700 fw-normal">(43)</span>
                </h3>
                <CustomerRatingsTable />
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default CustomerDetails;
