import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'components/base/Button';
import Section from 'components/base/Section';
import EcomInvoiceTable from 'components/tables/EcomInvoiceTable';
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import phoenixMart from 'assets/phoenix/img/logos/phoenix-mart.png';
import { defaultBreadcrumbItems } from 'data/commonData';
import PageBreadcrumb from 'components/common/PageBreadcrumb';
const Invoice = () => {
  return (
    <div className="pt-5 pb-9 bg-white dark__bg-1200 border-top border-300">
      <Section small className="py-0">
        <PageBreadcrumb items={defaultBreadcrumbItems} />
        <div className="d-flex gap-2 justify-content-between align-items-end mb-4">
          <h2 className="mb-0 flex-1">Invoice</h2>
          <Button variant="phoenix-secondary">
            <FontAwesomeIcon icon="download" className="me-sm-2" />
            <span className="d-none d-sm-inline-block">Download Invoice</span>
          </Button>
          <Button variant="phoenix-secondary">
            <FontAwesomeIcon icon="print" className="me-sm-2" />
            <span className="d-none d-sm-inline-block">Print</span>
          </Button>
        </div>

        <div className="bg-soft dark__bg-1100 p-4 mb-4 rounded-2">
          <Row className="g-4">
            <Col xs={12} lg={3}>
              <Row className="g-4 g-lg-2">
                <Col xs={12} sm={6} lg={12}>
                  <Row className=" align-items-center g-0">
                    <Col xs="auto" lg={6} xl={5}>
                      <h6 className="mb-0 me-3">Invoice No :</h6>
                    </Col>
                    <Col xs="auto" lg={6} xl={7}>
                      <p className="fs-9 text-800 fw-semi-bold mb-0">
                        #FLR978282
                      </p>
                    </Col>
                  </Row>
                </Col>
                <Col xs={12} sm={6} lg={12}>
                  <Row className=" align-items-center g-0">
                    <Col xs="auto" lg={6} xl={5}>
                      <h6 className="me-3">Invoice Date :</h6>
                    </Col>
                    <Col xs="auto" lg={6} xl={7}>
                      <p className="fs-9 text-800 fw-semi-bold mb-0">
                        19.06.2019
                      </p>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
            <Col xs={12} sm={6} lg={5}>
              <Row className="g-4 gy-lg-5">
                <Col xs={12} lg={8}>
                  <h6 className="mb-2 me-3">Sold by :</h6>
                  <p className="fs-9 text-800 fw-semi-bold mb-0">
                    PhoenixMart
                    <br />
                    36 greendowm road, California, Usa
                  </p>
                </Col>
                <Col xs={12} lg={4}>
                  <h6 className="mb-2"> PAN No :</h6>
                  <p className="fs-9 text-800 fw-semi-bold mb-0">
                    XVCJ963782008
                  </p>
                </Col>
                <Col xs={12} lg={4}>
                  <h6 className="mb-2"> GST Reg No :</h6>
                  <p className="fs-9 text-800 fw-semi-bold mb-0">IX9878123TC</p>
                </Col>
                <Col xs={12} lg={4}>
                  <h6 className="mb-2"> Order No :</h6>
                  <p className="fs-9 text-800 fw-semi-bold mb-0">
                    A-8934792734
                  </p>
                </Col>
                <Col xs={12} lg={4}>
                  <h6 className="mb-2"> Order Date :</h6>
                  <p className="fs-9 text-800 fw-semi-bold mb-0">19.06.2019</p>
                </Col>
              </Row>
            </Col>
            <Col xs={12} sm={6} lg={4}>
              <Row className="g-4">
                <Col xs={12} lg={6}>
                  <h6 className="mb-2"> Billing Address :</h6>
                  <div className="fs-9 text-800 fw-semi-bold mb-0">
                    <p className="mb-2">John Doe,</p>
                    <p className="mb-2">
                      36, Gree Donwtonwn,
                      <br />
                      Golden road, FL,
                    </p>
                    <p className="mb-2">johndoe@jeemail.com</p>
                    <p className="mb-0">+334933029030</p>
                  </div>
                </Col>
                <Col xs={12} lg={6}>
                  <h6 className="mb-2"> Shipping Address :</h6>
                  <div className="fs-9 text-800 fw-semi-bold mb-0">
                    <p className="mb-2">John Doe,</p>
                    <p className="mb-2">
                      36, Gree Donwtonwn,
                      <br />
                      Golden road, FL,
                    </p>
                    <p className="mb-2">johndoe@jeemail.com</p>
                    <p className="mb-0">+334933029030</p>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>

        <EcomInvoiceTable />

        <div className="text-end py-9 border-bottom border-300">
          <img className="mb-3" src={phoenixMart} alt="phoenix-mart" />
          <h4>Authorized Signatory</h4>
        </div>

        <div className="text-center py-4 mb-9">
          <p className="mb-0">
            Thank you for buying with Phoenix | 2022 ©{' '}
            <a href="https://themewagon.com/">Themewagon</a>
          </p>
        </div>

        <div className="d-flex justify-content-between">
          <button className="btn btn-primary">
            <FontAwesomeIcon icon="bag-shopping" className="me-2" />
            Browse more items
          </button>
          <div>
            <button className="btn btn-phoenix-secondary me-2">
              <FontAwesomeIcon icon="download" className="me-sm-2" />
              <span className="d-none d-sm-inline-block">Download Invoice</span>
            </button>
            <button className="btn btn-phoenix-secondary">
              <FontAwesomeIcon icon="print" className="me-sm-2" />
              <span className="d-none d-sm-inline-block">Print</span>
            </button>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Invoice;
