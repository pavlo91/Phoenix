import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'components/base/Button';
import React from 'react';
import { Col, Form, Row } from 'react-bootstrap';

const EventTicketPricing = () => {
  return (
    <>
      <h4 className="mb-4">Ticket pricing</h4>
      <Form.Check type="radio" id="freeTicket" className="form-check-inline">
        <Form.Check.Input type="radio" name="pricingRadio" defaultChecked />
        <Form.Check.Label htmlFor="freeTicket">Free</Form.Check.Label>
      </Form.Check>
      <Form.Check type="radio" id="paidTicket" className="form-check-inline">
        <Form.Check.Input type="radio" name="pricingRadio" />
        <Form.Check.Label htmlFor="paidTicket">Paid</Form.Check.Label>
      </Form.Check>
      <Row className="g-3 mb-7 mt-1 border-bottom pb-5">
        <Col xs={6} xl={7}>
          <h6 className="fs--1">Option</h6>
        </Col>
        <Col xs={6} xl={5}>
          <h6 className="fs--1">Price</h6>
        </Col>
        <Col xs={6} xl={7}>
          <Form.Control type="text" placeholder="Top Gallery" />
        </Col>
        <Col xs={6} xl={5}>
          <Form.Control
            type="number"
            placeholder="$0.0"
            className="input-spin-none"
          />
        </Col>
        <Col xs={6} xl={7}>
          <Form.Control type="text" placeholder="VIP" />
        </Col>
        <Col xs={6} xl={5}>
          <Form.Control
            type="number"
            placeholder="$0.0"
            className="input-spin-none"
          />
        </Col>
        <Col xs={6} xl={7}>
          <Form.Control type="text" placeholder="Front row" />
        </Col>
        <Col xs={6} xl={5}>
          <Form.Control
            type="number"
            placeholder="$0.0"
            className="input-spin-none"
          />
        </Col>
        <Col xs={12}>
          <Button
            className="p-0"
            startIcon={<FontAwesomeIcon icon="plus" className="me-2" />}
            variant="link"
          >
            Add an option
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default EventTicketPricing;
