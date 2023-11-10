import React, { useState } from 'react';
import { Card, Col, Nav, Pagination, Row, Stack, Tab } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import product23 from 'assets/phoenix/img/products/23.png';
import ProductSpecificationTables from './ProductSpecificationTables';
import Rating from 'components/base/Rating';
import Button from 'components/base/Button';
import { productReviews } from 'data/e-commerce';
import ProductReview from 'components/list-items/ProductReview';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ReviewModal from 'components/modals/ReviewModal';
import UsuallyBoughtTogetherCard from 'components/cards/UsuallyBoughtTogetherCard';
import { suggestedProducts } from 'data/e-commerce/products';
import useLightbox from 'hooks/useLightbox';
import Lightbox from 'components/base/LightBox';

const ProductDetailsTab = () => {
  const [openReviewModal, setOpenReviewModal] = useState(false);
  const { lightboxProps, openLightbox } = useLightbox([product23]);
  return (
    <>
      <Tab.Container defaultActiveKey="description">
        <Nav variant="underline" className="mb-4">
          <Nav.Item>
            <Nav.Link eventKey="description">Description</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="specification">Specification</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="reviews">Ratings & reviews</Nav.Link>
          </Nav.Item>
        </Nav>
        <Row className="gx-3 gy-7">
          <Col xs={12} lg={7} xl={8}>
            <Tab.Content>
              <Tab.Pane
                eventKey="description"
                className="text-1100 pe-lg-6 pe-xl-12"
              >
                <p className="mb-5">
                  CUPERTINO, CA , The M1 CPU allows Apple to deliver an all-new
                  iMac with a lot more compact and impressively thin design. The
                  new iMac delivers tremendous performance in an
                  11.5-millimeter-thin design with a stunning side profile that
                  almost vanishes. iMac includes a 24-inch 4.5K Retina display
                  with 11.3 million pixels, 500 nits of brightness, and over a
                  billion colors, giving a beautiful and vivid viewing
                  experience. It is available in a variety of striking colors to
                  match a user's own style and brighten any area. A 1080p
                  FaceTime HD camera, studio-quality mics, and a six-speaker
                  sound system are all included in the new iMac, making it the
                  greatest camera and audio system ever in a Mac. Touch ID is
                  also making its debut on the iMac, making it easier than ever
                  to securely log in, make Apple Pay transactions, and switch
                  user accounts with the touch of a finger. Apps launch at
                  lightning speed, everyday chores seem astonishingly fast and
                  fluid, and demanding workloads like editing 4K video and
                  working with large photos are faster than ever before thanks
                  to the power and performance of M1 and macOS Big Sur.
                </p>
                <Lightbox {...lightboxProps} />
                <Link to="#!">
                  <img
                    src={product23}
                    alt=""
                    className="img-fluid mb-5 rounded-3"
                    onClick={() => openLightbox(1)}
                  />
                </Link>
                <p className="mb-0">
                  The new iMac joins Apple's fantastic M1-powered Mac family,
                  which includes the MacBook Air, 13-inch MacBook Pro, and Mac
                  mini, and represents yet another step ahead in the company's
                  shift to Apple silicon. Customers may order iMac starting
                  Friday, April 30. It's the most personal, powerful, capable,
                  and enjoyable it's ever been. In the second half of May, the
                  iMac will be available."M1 is a huge step forward for the
                  Mac," said Greg Joswiak, Apple's senior vice president of
                  Worldwide Marketing. "Today, we're delighted to present the
                  all-new iMac, the first Mac developed around the
                  groundbreaking M1 processor." "The new iMac takes everything
                  people love about iMac to an entirely new level, with its
                  beautiful design in seven breathtaking colors, its immersive
                  4.5K Retina display, the greatest camera, mics, and speakers
                  ever in a Mac, and Touch ID, combined with M1's incredible
                  performance and macOS Big Sur's power."
                </p>
              </Tab.Pane>
              <Tab.Pane eventKey="specification" className="pe-lg-6 pe-xl-12">
                <ProductSpecificationTables />
              </Tab.Pane>
              <Tab.Pane eventKey="reviews">
                <Card>
                  <Card.Header className="pb-0 border-bottom-0">
                    <Stack
                      gap={3}
                      direction="horizontal"
                      className="flex-wrap justify-content-between"
                    >
                      <div className="d-flex align-items-center flex-wrap">
                        <h2 className="fw-bolder me-3">
                          4.9
                          <span className="fs-8 text-500 fw-bold">/5</span>
                        </h2>
                        <div className="me-3">
                          <Rating
                            initialValue={4.5}
                            readonly
                            iconClass="fs-6"
                          />
                        </div>
                        <p className="text-900 mb-0 fw-semi-bold fs-7">
                          6548 ratings and 567 reviews
                        </p>
                      </div>
                      <Button
                        variant="primary"
                        className="rounded-pill"
                        onClick={() => setOpenReviewModal(true)}
                      >
                        Rate this product
                      </Button>
                    </Stack>
                  </Card.Header>
                  <Card.Body>
                    {productReviews.map(review => (
                      <ProductReview key={review.id} review={review} />
                    ))}

                    <Pagination className="mb-0 justify-content-center">
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
                  </Card.Body>
                </Card>
              </Tab.Pane>
            </Tab.Content>
          </Col>
          <Col xs={12} lg={5} xl={4}>
            <UsuallyBoughtTogetherCard products={suggestedProducts} />
          </Col>
        </Row>
      </Tab.Container>
      <ReviewModal
        show={openReviewModal}
        handleClose={() => setOpenReviewModal(false)}
      />
    </>
  );
};

export default ProductDetailsTab;
