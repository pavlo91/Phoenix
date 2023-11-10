import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'components/base/Button';
import React from 'react';
import { Col, Form, Row } from 'react-bootstrap';

const EventCustomFields = () => {
  return (
    <>
      <h4 className="mb-3">Custom fields</h4>
      <Row className="gx-3">
        <Col md={6} lg={12} xl={6}>
          <Form.Group controlId="formFileSm" className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Item name (e.g. Special T-shirt)"
            />
          </Form.Group>
        </Col>
        <Col md={6} lg={12} xl={6}>
          <Form.Group controlId="formFileSm" className="mb-3">
            <Form.Label>Type</Form.Label>
            <Form.Select>
              <option>Choose...</option>
              <option value="1">Type One</option>
              <option value="2">Type Two</option>
            </Form.Select>
          </Form.Group>
        </Col>
        <Col xs={12}>
          <Form.Group controlId="formFileSm" className="mb-3">
            <Form.Label>Field options</Form.Label>
            <Form.Control as="textarea" rows={6} placeholder="Description" />
          </Form.Group>
        </Col>
        <Col md={6} lg={12} xl={6}>
          <Form.Group controlId="formFileSm" className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Item name (e.g. Special T-shirt)"
            />
          </Form.Group>
        </Col>
        <Col md={6} lg={12} xl={6}>
          <Form.Group controlId="formFileSm" className="mb-3">
            <Form.Label>Type</Form.Label>
            <Form.Select>
              <option>Choose...</option>
              <option value="1">Type One</option>
              <option value="2">Type Two</option>
            </Form.Select>
          </Form.Group>
        </Col>
        <Col xs={12}>
          <Form.Group controlId="formFileSm" className="mb-3">
            <Form.Label>Field options</Form.Label>
            <Form.Control as="textarea" rows={6} placeholder="Description" />
          </Form.Group>
        </Col>
        <Col xs={12}>
          <Button
            className="p-0"
            startIcon={<FontAwesomeIcon icon="plus" className="me-2" />}
            variant="link"
          >
            Add an item
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default EventCustomFields;
