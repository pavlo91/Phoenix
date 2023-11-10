import React from 'react';
import bestInMarketBg from 'assets/phoenix/img/e-commerce/best-in-market-bg.png';
import product from 'assets/phoenix/img/e-commerce/5.png';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const EcomBestInMarketBanner = () => {
  return (
    <div className="best-in-market-banner d-flex h-100 px-4 px-sm-7 py-5 px-md-11 rounded-3 overflow-hidden">
      <div
        className="bg-holder banner-bg"
        style={{
          backgroundImage: `url(${bestInMarketBg})`,
          backgroundPosition: 'bottom left'
        }}
      />
      <Row className="position-relative align-items-center w-sm-100">
        <Col xs={8}>
          <div className="banner-text light">
            <h2 className="text-white fw-bolder fs-sm-4 mb-5">
              MI 11 Pro <br />{' '}
              <span className="fs-7 fs-sm-6">Best in the market</span>
            </h2>
            <Link
              to="#!"
              className="btn btn-lg btn-warning rounded-pill banner-button"
            >
              Buy Now
            </Link>
          </div>
        </Col>
        <Col xs={4}>
          <img src={product} alt="" className="w-100 w-sm-75" />
        </Col>
      </Row>
    </div>
  );
};

export default EcomBestInMarketBanner;
