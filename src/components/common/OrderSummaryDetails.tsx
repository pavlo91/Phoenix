import { currencyFormat } from 'helpers/utils';
import React from 'react';

const OrderSummaryDetails = () => {
  return (
    <div>
      <div className="d-flex justify-content-between">
        <p className="text-900 fw-semi-bold">Items subtotal :</p>
        <p className="text-1100 fw-semi-bold">{currencyFormat(691)}</p>
      </div>
      <div className="d-flex justify-content-between">
        <p className="text-900 fw-semi-bold">Discount :</p>
        <p className="text-danger fw-semi-bold">-{currencyFormat(59)}</p>
      </div>
      <div className="d-flex justify-content-between">
        <p className="text-900 fw-semi-bold">Tax :</p>
        <p className="text-1100 fw-semi-bold">{currencyFormat(126.2)}</p>
      </div>
      <div className="d-flex justify-content-between">
        <p className="text-900 fw-semi-bold">Subtotal :</p>
        <p className="text-1100 fw-semi-bold">{currencyFormat(665)}</p>
      </div>
      <div className="d-flex justify-content-between">
        <p className="text-900 fw-semi-bold">Shipping Cost :</p>
        <p className="text-1100 fw-semi-bold">{currencyFormat(30)}</p>
      </div>
    </div>
  );
};

export default OrderSummaryDetails;
