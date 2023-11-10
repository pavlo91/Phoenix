import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import { Feature } from 'data/landing/default-landing-data';
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

interface FeatureSectionProps {
  feature: Feature;
  orderReverse?: boolean;
}

const FeatureSection = ({ feature, orderReverse }: FeatureSectionProps) => {
  const { lightImage, darkImage, label, title, details, link } = feature;
  return (
    <Row className="align-items-center justify-content-between text-center text-lg-start mb-6 mb-lg-2">
      <Col
        lg={5}
        className={classNames({
          'order-lg-1': orderReverse
        })}
      >
        <img
          className="feature-image mb-9 mb-lg-0 d-dark-none"
          src={lightImage}
          alt=""
        />
        <img
          className="feature-image mb-9 mb-lg-0 d-light-none"
          src={darkImage}
          alt=""
        />
      </Col>
      <Col lg={6}>
        <h6 className="text-primary mb-2 ls-2">{label}</h6>
        <h3 className="fw-bolder mb-3">{title}</h3>
        <p className="mb-4 px-md-7 px-lg-0">{details}</p>
        <Link to={link} className="me-2 p-0 fs-9 fw-bold">
          Check Demo
          <FontAwesomeIcon icon="angle-right" className="ms-2" />
        </Link>
      </Col>
    </Row>
  );
};

export default FeatureSection;
