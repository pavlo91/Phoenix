import Section from 'components/base/Section';
import PageBreadcrumb from 'components/common/PageBreadcrumb';
import CheckoutSummaryCard from 'components/modules/e-commerce/checkout/CheckoutSummaryCard';
import { defaultBreadcrumbItems } from 'data/commonData';
import { Button, Col, Form, Row } from 'react-bootstrap';

const ShippingInfo = () => {
  return (
    <div className="pt-5 mb-9">
      <Section small className="py-0">
        <PageBreadcrumb items={defaultBreadcrumbItems} />
        <h2 className="mb-5">Check out</h2>
        <Row className="justify-content-between gy-6 gx-5">
          <Col lg={7}>
            <h3 className="mb-5">Shipping Info</h3>
            <Row className="g-4">
              <Col xs={12}>
                <Form.Group>
                  <h5 className="text-1000 mb-2">Full name</h5>
                  <Form.Control type="text" placeholder="Full name" />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group>
                  <h5 className="text-1000 mb-2">Email</h5>
                  <Form.Control type="email" placeholder="Email" />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group>
                  <h5 className="text-1000 mb-2">Phone</h5>
                  <Form.Control type="tel" placeholder="+1234567890" />
                </Form.Group>
              </Col>
              <Col md={12}>
                <Form.Group>
                  <h5 className="text-1000 mb-2">Address line 1</h5>
                  <Form.Control type="text" placeholder="Address line 1" />
                </Form.Group>
              </Col>
              <Col md={12}>
                <Form.Group>
                  <h5 className="text-1000 mb-2">Address line 2</h5>
                  <Form.Control type="text" placeholder="Address line 2" />
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group>
                  <h5 className="text-1000 mb-2">City</h5>
                  <Form.Select defaultValue="van-nuys">
                    <option value="van-nuys">Van Nuys</option>
                    <option value="los-angeles">Los Angeles</option>
                    <option value="chicago">Chicago</option>
                    <option value="houston">Houston</option>
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group>
                  <h5 className="text-1000 mb-2">State</h5>
                  <Form.Select defaultValue="california">
                    <option value="california">California</option>
                    <option value="Alaska">Alaska</option>
                    <option value="alabama">Alabama</option>
                    <option value="florida">Florida</option>
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group>
                  <h5 className="text-1000 mb-2">Zip code</h5>
                  <Form.Control type="text" placeholder="Zip code" />
                </Form.Group>
              </Col>
              <Col md={4} className="mb-3">
                <Form.Group>
                  <h5 className="text-1000 mb-2">Country</h5>
                  <Form.Select defaultValue="usa">
                    <option value="usa">USA</option>
                    <option value="uk">UK</option>
                    <option value="aus">AUS</option>
                    <option value="nz">NZ</option>
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col xs={12}>
                <Button className="px-8 px-sm-11 me-2" type="submit">
                  Save
                </Button>
                <Button
                  variant="phoenix-secondary"
                  className="text-nowrap"
                  type="button"
                >
                  Exit Without Saving
                </Button>
              </Col>
            </Row>
          </Col>
          <Col lg={5} xl={{ span: 4, offset: 1 }}>
            <CheckoutSummaryCard />
          </Col>
        </Row>
      </Section>
    </div>
  );
};

export default ShippingInfo;
