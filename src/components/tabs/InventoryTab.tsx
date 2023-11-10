import { CSSProperties } from 'react';
import { Col, Form, Nav, Row, Tab } from 'react-bootstrap';
import FeatherIcon from 'feather-icons-react';
import Button from 'components/base/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Badge from 'components/base/Badge';
import { Link } from 'react-router-dom';
import ReactSelect from 'components/base/ReactSelect';
import classNames from 'classnames';

type NavItemType = {
  label: string;
  icon: string;
  eventKey: string;
};

const options = [
  { value: 'canada', label: 'Canada' },
  { value: 'mexico', label: 'Mexico' },
  { value: 'united-kingdom', label: 'United Kingdom' },
  { value: 'united-states-of-america', label: 'United States of America' }
];

const NavItem = ({ item, isLast }: { item: NavItemType; isLast?: boolean }) => {
  return (
    <Nav.Link
      eventKey={item.eventKey}
      className={classNames(
        'text-center text-sm-start cursor-pointer outline-none d-sm-flex align-items-sm-center',
        {
          'border-bottom-sm border-end border-end-sm-0 border-300': !isLast
        }
      )}
    >
      <FeatherIcon icon={item.icon} size={16} className="me-sm-2 nav-icons" />
      <span className="d-none d-sm-inline">{item.label}</span>
    </Nav.Link>
  );
};

const navItems: NavItemType[] = [
  {
    label: 'Pricing',
    eventKey: 'pricing',
    icon: 'tag'
  },
  {
    label: 'Restock',
    icon: 'package',
    eventKey: 'restock'
  },
  {
    label: 'Shipping',
    icon: 'truck',
    eventKey: 'shipping'
  },
  {
    label: 'Global Delivery',
    icon: 'globe',
    eventKey: 'global-delivery'
  },
  {
    label: 'Attributes',
    icon: 'sliders',
    eventKey: 'attributes'
  },
  {
    label: 'Advanced',
    icon: 'lock',
    eventKey: 'advanced'
  }
];

const InventoryTab = () => {
  return (
    <Tab.Container id="left-tabs-example" defaultActiveKey="pricing">
      <Row className="g-0 border-top border-bottom border-300">
        <Col xs={12} sm={4}>
          <Nav className="flex-sm-column border-bottom border-bottom-sm-0 border-end-sm border-300 fs-9 vertical-tab h-100 justify-content-between">
            {navItems.map((item, index) => (
              <NavItem
                key={item.label}
                item={item}
                isLast={index === navItems.length - 1}
              />
            ))}
          </Nav>
        </Col>

        <Col xs={12} sm={8}>
          <Tab.Content className="py-3 ps-sm-4 h-100">
            <Tab.Pane eventKey="pricing">
              <h4 className="mb-3 d-sm-none">Pricing</h4>
              <Row className="g-3">
                <Col xs={12} lg={6}>
                  <h5 className="mb-2 text-1000">Regular price</h5>
                  <Form.Control type="text" placeholder="$$$" />
                </Col>
                <Col xs={12} lg={6}>
                  <h5 className="mb-2 text-1000">Sale price</h5>
                  <Form.Control type="text" placeholder="$$$" />
                </Col>
              </Row>
            </Tab.Pane>
            <Tab.Pane eventKey="restock" className="h-100">
              <div className="d-flex flex-column h-100">
                <h5 className="mb-3 text-1000">Add to Stock</h5>
                <div className="flex-1 mb-4">
                  <div className="d-flex gap-3">
                    <Form.Control
                      type="number"
                      placeholder="Quantity"
                      style={{ maxWidth: 385 }}
                      className="input-spin-none"
                    />
                    <Button
                      variant="primary"
                      type="button"
                      startIcon={<FontAwesomeIcon icon="check" />}
                      className="text-nowrap"
                    >
                      Confirm
                    </Button>
                  </div>
                </div>
                <table>
                  <thead>
                    <tr>
                      <th style={{ width: 200 }} />
                      <th />
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="text-1000 fw-bold py-1">
                        Product in stock now:
                      </td>
                      <td className="text-700 fw-semi-bold py-1">
                        $1,090
                        <Button className="p-0 ms-1" type="button">
                          <FontAwesomeIcon
                            icon="rotate"
                            className="text-900"
                            style={
                              { '--phoenix-text-opacity': 0.6 } as CSSProperties
                            }
                          />
                        </Button>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-1000 fw-bold py-1">
                        Product in transit:
                      </td>
                      <td className="text-700 fw-semi-bold py-1">5000</td>
                    </tr>
                    <tr>
                      <td className="text-1000 fw-bold py-1">
                        Last time restocked:
                      </td>
                      <td className="text-700 fw-semi-bold py-1">
                        30th June, 2021
                      </td>
                    </tr>
                    <tr>
                      <td className="text-1000 fw-bold py-1">
                        Total stock over lifetime:
                      </td>
                      <td className="text-700 fw-semi-bold py-1">20,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Tab.Pane>

            <Tab.Pane eventKey="shipping" className="h-100">
              <div className="d-flex flex-column h-100">
                <h5 className="mb-3 text-1000">Shipping Type</h5>
                <div className="flex-1">
                  <div className="mb-4">
                    <Form.Check type="radio" id="fullfilledBySeller">
                      <Form.Check.Input type="radio" name="shipping" />
                      <Form.Check.Label className="text-900 fs-8">
                        Fullfilled by Seller
                      </Form.Check.Label>
                    </Form.Check>
                    <div className="ps-4">
                      <p className="text-800 fs-9 mb-0">
                        You’ll be responsible for product delivery. <br />
                        Any damage or delay during shipping may cost you a
                        Damage fee.
                      </p>
                    </div>
                  </div>
                  <div className="mb-4">
                    <Form.Check type="radio" id="fullfilledByPhoenix">
                      <Form.Check.Input type="radio" name="shipping" />
                      <Form.Check.Label className="text-900 fs-8">
                        Fullfilled by Phoenix
                        <Badge variant="phoenix" bg="warning" className="ms-2">
                          Recommended
                        </Badge>
                      </Form.Check.Label>
                    </Form.Check>
                    <div className="ps-4">
                      <p className="text-800 fs-9 mb-0">
                        Your product, Our responsibility.
                        <br />
                        For a measly fee, we will handle the delivery process
                        for you.
                      </p>
                    </div>
                  </div>
                </div>
                <p className="fs-9 fw-semi-bold mb-0">
                  See our{' '}
                  <a className="fw-bold" href="#!">
                    Delivery terms and conditions{' '}
                  </a>
                  for details.
                </p>
              </div>
            </Tab.Pane>

            <Tab.Pane eventKey="global-delivery" className="h-100">
              <h5 className="mb-3 text-1000">Global Delivery</h5>
              <div className="mb-3">
                <Form.Check type="radio" id="globalDelivery">
                  <Form.Check.Input type="radio" name="delivery" />
                  <Form.Check.Label className="text-900 fs-8">
                    Worldwide delivery
                  </Form.Check.Label>
                </Form.Check>
                <div className="ps-4">
                  <p className="fs-9 mb-0 text-800">
                    Only available with Shipping method:{' '}
                    <Link to="#!">Fullfilled by Phoenix</Link>
                  </p>
                </div>
              </div>
              <div className="mb-3">
                <Form.Check type="radio" id="selectedCountries">
                  <Form.Check.Input type="radio" name="delivery" />
                  <Form.Check.Label className="text-900 fs-8">
                    Selected Countries
                  </Form.Check.Label>
                </Form.Check>
                <div className="ps-4">
                  <ReactSelect
                    options={options}
                    isMulti
                    placeholder="Type country name"
                  />
                </div>
              </div>
              <div className="mb-3">
                <Form.Check type="radio" id="localDelivery">
                  <Form.Check.Input type="radio" name="delivery" />
                  <Form.Check.Label className="text-900 fs-8">
                    Local delivery
                  </Form.Check.Label>
                </Form.Check>
                <div className="ps-4">
                  <p className="fs-9 mb-0 text-800">
                    Deliver to your country of residence{' '}
                    <Link to="#!">Change profile address</Link>
                  </p>
                </div>
              </div>
            </Tab.Pane>

            <Tab.Pane eventKey="attributes" className="h-100">
              <h5 className="mb-3 text-1000">Attributes</h5>
              <Form.Check type="checkbox" id="fragileCheck">
                <Form.Check.Input type="checkbox" name="attributes" />
                <Form.Check.Label className="text-900 fs-8">
                  Fragile Product
                </Form.Check.Label>
              </Form.Check>
              <Form.Check type="checkbox" id="biodegradableCheck">
                <Form.Check.Input type="checkbox" name="attributes" />
                <Form.Check.Label className="text-900 fs-8">
                  Biodegradable
                </Form.Check.Label>
              </Form.Check>
              <Form.Check type="checkbox" id="frozenProduct" className="mb-3">
                <Form.Check.Input type="checkbox" name="attributes" />
                <Form.Check.Label className="text-900 fs-8">
                  Frozen Product
                </Form.Check.Label>
                <Form.Control
                  type="text"
                  placeholder="Max. allowed Temperature"
                  style={{ maxWidth: 350 }}
                />
              </Form.Check>
              <Form.Check type="checkbox" id="expDate">
                <Form.Check.Input type="checkbox" name="attributes" />
                <Form.Check.Label className="text-900 fs-8">
                  Expiry Date of Product
                </Form.Check.Label>
                <Form.Control type="date" style={{ maxWidth: 350 }} />
              </Form.Check>
            </Tab.Pane>

            <Tab.Pane eventKey="advanced" className="h-100">
              <h5 className="mb-3 text-1000">Advanced</h5>
              <div className="row g-3">
                <div className="col-12 col-lg-6">
                  <h5 className="mb-2 text-1000">Product ID Type</h5>
                  <Form.Select>
                    <option value="isbn">ISBN</option>
                    <option value="upc">UPC</option>
                    <option value="ean">EAN</option>
                    <option value="jan">JAN</option>
                  </Form.Select>
                </div>
                <div className="col-12 col-lg-6">
                  <h5 className="mb-2 text-1000">Product ID</h5>
                  <Form.Control type="text" placeholder="ISBN Number" />
                </div>
              </div>
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
};

export default InventoryTab;
