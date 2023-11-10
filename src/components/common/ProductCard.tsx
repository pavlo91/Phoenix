import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import Badge from 'components/base/Badge';
import Button from 'components/base/Button';
import Rating from 'components/base/Rating';
import { Product as ProductType } from 'data/e-commerce/products';
import { currencyFormat } from 'helpers/utils';
import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }: { product: ProductType }) => {
  return (
    <div className="position-relative text-decoration-none product-card h-100">
      <div className="d-flex flex-column justify-content-between h-100">
        <div>
          <div className="border border-1 rounded-3 position-relative mb-3">
            <Button
              variant={product.wishListed ? 'primary' : 'outline-primary'}
              className="rounded-circle p-0 d-flex flex-center btn-wish z-index-2 d-toggle-container"
            >
              {product.wishListed ? (
                <FontAwesomeIcon icon="heart" />
              ) : (
                <>
                  <FontAwesomeIcon icon="heart" className="d-block-hover" />
                  <FontAwesomeIcon
                    icon={['far', 'heart']}
                    className="d-none-hover"
                  />
                </>
              )}
            </Button>
            <img src={product.image} alt="" className="img-fluid" />
            {product.verified && (
              <Badge bg="success" className="fs-10 product-verified-badge">
                Verified
                <FontAwesomeIcon icon="check" className="ms-1" />
              </Badge>
            )}
          </div>
          <Link to="#!" className="stretched-link text-decoration-none">
            <h6 className="mb-2 lh-sm line-clamp-3 product-name">
              {product.name}
            </h6>
          </Link>
          {product.rating && (
            <p className="fs-9">
              <Rating readonly initialValue={product.rating} />
              {product.rated && (
                <span className="text-500 fw-semi-bold ms-1">
                  ({product.rated} people rated)
                </span>
              )}
            </p>
          )}
        </div>
        <div>
          {product.extra && (
            <p className={classNames(product.extraClass, 'fs-9')}>
              {product.extra}
            </p>
          )}
          {product.extra2 && (
            <p className={classNames(product.extra2Class, 'fs-9')}>
              {product.extra2}
            </p>
          )}

          {product.salePrice && (
            <>
              {product.price ? (
                <div className="d-flex align-items-center mb-1">
                  <p className="me-2 text-900 text-decoration-line-through mb-0">
                    {currencyFormat(product.price)}
                  </p>
                  <h3 className="text-1100 mb-0">
                    {currencyFormat(product.salePrice)}
                  </h3>
                </div>
              ) : (
                <h3 className="text-1100">
                  {currencyFormat(product.salePrice)}
                </h3>
              )}
            </>
          )}

          {product.colors && (
            <p
              className={classNames('text-700 fw-semi-bold fs-9 lh-1', {
                'mb-0': !product.dealEndTime
              })}
            >
              {product.colors} colors
            </p>
          )}

          {product.dealEndTime && (
            <p className="text-success fw-bold fs-9 lh-1 mb-0">
              Deal time ends in {product.dealEndTime}
            </p>
          )}

          {product.offer && (
            <h6 className="text-success lh-1 mb-0">{product.offer} off</h6>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
