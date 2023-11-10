import React, { CSSProperties } from 'react';
import { Pricing, pricingColumnFeatures } from 'data/pricing';
import { Col } from 'react-bootstrap';
import Button from 'components/base/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import Badge from 'components/base/Badge';
import { currencyFormat } from 'helpers/utils';

interface PricingColumnItemProps {
  pricing: Pricing;
}

const PricingColumnItem = ({ pricing }: PricingColumnItemProps) => {
  return (
    <Col sm={6} xxl={3} key={pricing.title}>
      <img
        src={pricing.icon}
        alt=""
        className="mb-4 d-dark-none"
        width={120}
        height={96}
      />
      <img
        src={pricing.iconDark}
        alt=""
        className="mb-4 d-light-none"
        width={120}
        height={96}
      />
      <div className="pricing-column-title-box mb-sm-5">
        <h3 className="mb-2">{pricing.title}</h3>
        <p className="text-800 mb-0 pe-3">{pricing.description}</p>
      </div>
      <div className="d-flex align-items-center mb-4">
        {pricing.price === 0 ? (
          <h3 className="display-3 fw-bolder">Free</h3>
        ) : (
          <>
            <h3 className="display-3 fw-bolder">
              {currencyFormat(pricing.price)}
            </h3>
            <h5 className="fs-0 fw-normal ms-1">/ month</h5>
          </>
        )}
      </div>
      <Button
        variant={pricing.selected ? 'primary' : 'outline-primary'}
        size="lg"
        className="w-100 mb-6"
      >
        Buy
      </Button>
      <h5 className="mb-4">What’s included</h5>
      <ul
        className="fa-ul"
        style={{ '--fa-li-margin': '1.5em' } as CSSProperties}
      >
        <li className="text-800 mb-2">
          <span className="fa-li">
            <FontAwesomeIcon icon="check" className="text-primary" />
          </span>
          Timeline
        </li>
        {pricingColumnFeatures.map(item => (
          <li
            key={item.id}
            className={classNames('mb-2 text-500', {
              'text-900': pricing.features.includes(item.id)
            })}
          >
            <span className="fa-li me-2 stack-icon-item">
              <span className="fa-layers fa-fw">
                <FontAwesomeIcon
                  icon="circle"
                  className={classNames('text-300', {
                    'text-success': pricing.features.includes(item.id)
                  })}
                />
                <FontAwesomeIcon
                  icon={pricing.features.includes(item.id) ? 'check' : 'times'}
                  inverse
                  className={classNames('text-600 fs-11', {
                    'text-white': pricing.features.includes(item.id)
                  })}
                />
              </span>
            </span>
            {item.label}
            {pricing.features.includes(item.id) && item.new && (
              <Badge variant="phoenix" bg="primary" className="ms-2 fs-10">
                New
              </Badge>
            )}
          </li>
        ))}
      </ul>
    </Col>
  );
};

export default PricingColumnItem;
