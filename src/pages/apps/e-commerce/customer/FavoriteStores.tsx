import Section from 'components/base/Section';
import PageBreadcrumb from 'components/common/PageBreadcrumb';
import StoreItem from 'components/common/StoreItem';
import { defaultBreadcrumbItems } from 'data/commonData';
import { stores } from 'data/e-commerce/stores';
import React from 'react';
import { Col, Row } from 'react-bootstrap';

const FavoriteStores = () => {
  return (
    <div className="pt-5 mb-9">
      <Section small className="py-0">
        <PageBreadcrumb items={defaultBreadcrumbItems} />
        <div className="mb-5">
          <h2>My Favorite Stores</h2>
          <p className="mb-0 text-700 fw-semi-bold">
            Essential for a better life
          </p>
        </div>
        <Row className="gx-3 gy-5">
          {stores.map(store => (
            <Col key={store.name} xs={6} sm={4} md={3} lg={2}>
              <StoreItem store={store} />
            </Col>
          ))}
        </Row>
      </Section>
    </div>
  );
};

export default FavoriteStores;
