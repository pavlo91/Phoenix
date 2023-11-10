import { pricingItems } from 'data/landing/pricingData';
import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import PricingItem from './PricingItem';
import classNames from 'classnames';
import bgLeft15 from 'assets/phoenix/img/bg/bg-left-15.png';
import bgRight15 from 'assets/phoenix/img/bg/bg-right-15.png';

const Pricing = () => {
  return (
    <section className="pt-lg-0 pt-xl-8">
      <div>
        <div
          className="bg-holder d-none d-md-block"
          style={{
            backgroundImage: `url(${bgLeft15})`,
            backgroundPosition: 'left',
            backgroundSize: 'auto'
          }}
        />
        <div
          className="bg-holder d-none d-md-block"
          style={{
            backgroundImage: `url(${bgRight15})`,
            backgroundPosition: 'right',
            backgroundSize: 'auto'
          }}
        />
      </div>

      <div className="container-small position-relative px-lg-7 px-xxl-3">
        <Row>
          <Col xs={12} className="mb-4 text-center text-sm-start">
            <h4 className="text-primary fw-bolder mb-3">Pricing</h4>
            <h2>Choose the best deal for you</h2>
          </Col>
          <Col md={6} className="text-center text-sm-start">
            <p>
              Entice your customers with {process.env.REACT_APP_TITLE} admin
              dashboard. Show your best deal in this section to help customers
              choose from your best offers and place them all in one place with
              this efficient template. If you are availing more than one offer
              to your customers, let them compare among them and search for what
              they need to get. Show offer details here and entice them to buy.
            </p>
          </Col>
          <Col md={6} className="text-center text-sm-start">
            <p>
              offer to your customers, let them compare among them and search
              for what they need to get. Show offer details here and entice them
              to buy.
            </p>
          </Col>
        </Row>
        <Row className="pt-9 g-3 g-xl-0 mb-4 mb-md-8">
          {pricingItems.slice(0, 3).map((item, index) => (
            <Col key={item.id} md={6} xl={3}>
              <>
                <Card
                  className={classNames('h-100', {
                    'border border-2 border-primary dark__border-primary mt-5 mt-md-0':
                      item.popular,
                    'rounded-xl-end-0 rounded-start': index === 0,
                    'rounded-top-0 rounded-xl-0': index === 1,
                    'rounded-start rounded-xl-start-0 mt-5 mt-md-0': index === 2
                  })}
                >
                  {item.popular && (
                    <div className="position-absolute d-flex flex-center bg-primary-100 rounded-top py-1 end-0 start-0 badge-pricing">
                      <p className="text-primary-600 mb-0 dark__text-primary-200">
                        Most popular
                      </p>
                    </div>
                  )}
                  <Card.Body className="px-6">
                    <PricingItem pricing={item} />
                  </Card.Body>
                </Card>
              </>
            </Col>
          ))}

          <Col xs={12} md={6} xl={3} className="ps-xl-3">
            <Card className="mt-5 mt-md-0">
              <Card.Body className="px-6">
                <PricingItem pricing={pricingItems[3]} />
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <div className="text-center">
          <p>
            For Enterprise Solution with Managed SMTP, Custom API setup,
            Dedicated Support, and more - <a href="#!">Contact us</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
