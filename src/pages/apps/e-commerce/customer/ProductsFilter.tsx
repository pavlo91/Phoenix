import PhoenixOffcanvas from 'components/base/PhoenixOffcanvas';
import Section from 'components/base/Section';
import { useState } from 'react';
import { Button, Col, Pagination, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Scrollbar from 'components/base/Scrollbar';
import ProductFilterItems from 'components/modules/e-commerce/products-filter/ProductFilterItems';
import ProductCard from 'components/common/ProductCard';
import { allProducts } from 'data/e-commerce/products';

const ProductsFilter = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <PhoenixOffcanvas
        open={show}
        onHide={handleClose}
        style={{ width: 300, top: 92 }}
        className="py-5 ps-5"
        fixed
      >
        <Scrollbar className="table-scrollbar">
          <div className="pe-5">
            <ProductFilterItems handleClose={handleClose} />
          </div>
        </Scrollbar>
      </PhoenixOffcanvas>
      <Section className="pt-5 pb-9">
        <Button
          variant="phoenix-secondary"
          size="sm"
          className="text-700 mb-5 d-lg-none"
          onClick={handleShow}
        >
          <FontAwesomeIcon icon="filter" className="me-2" />
          Filter
        </Button>
        <Row>
          <Col lg={3} xxl={2} className="d-none d-lg-block ps-xl-0 ps-xxl-3">
            <div
              className="position-sticky"
              style={{ top: '1rem', height: 'calc(100vh - 2rem) ' }}
            >
              <Scrollbar className="product-scrollbar">
                <ProductFilterItems handleClose={handleClose} />
              </Scrollbar>
            </div>
          </Col>
          <Col lg={9} xxl={10}>
            <Row className="gx-3 gy-6 mb-8">
              {allProducts.map(product => (
                <Col xs={12} sm={6} md={4} xxl={2} key={product.id}>
                  <div className="product-card-container h-100">
                    <ProductCard product={product} />
                  </div>
                </Col>
              ))}
            </Row>

            <Pagination className="mb-0 justify-content-end">
              <Pagination.Prev>
                <FontAwesomeIcon icon="chevron-left" />
              </Pagination.Prev>
              <Pagination.Item>1</Pagination.Item>
              <Pagination.Item>2</Pagination.Item>
              <Pagination.Item>3</Pagination.Item>
              <Pagination.Item active>4</Pagination.Item>
              <Pagination.Item>5</Pagination.Item>
              <Pagination.Next>
                <FontAwesomeIcon icon="chevron-right" />
              </Pagination.Next>
            </Pagination>
          </Col>
        </Row>
      </Section>
    </div>
  );
};

export default ProductsFilter;
