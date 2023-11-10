import EcomPayingVsNonPayingChart from 'components/charts/e-charts/EcomPayingVsNonPayingChart';
import React from 'react';
import { Card } from 'react-bootstrap';

const EcomPayingVsNonPayingCard = () => {
  return (
    <Card className="h-100">
      <Card.Body className="d-flex flex-column">
        <div className="d-flex justify-content-between">
          <div>
            <h5 className="mb-2">Paying vs non paying</h5>
            <h6 className="text-700">Last 7 days</h6>
          </div>
        </div>
        <div className="d-flex justify-content-center pt-3 flex-1">
          <EcomPayingVsNonPayingChart />
        </div>
        <div className="mt-3">
          <div className="d-flex align-items-center mb-2">
            <div className="bullet-item bg-primary me-2"></div>
            <h6 className="text-900 fw-semi-bold flex-1 mb-0">
              Paying customer
            </h6>
            <h6 className="text-900 fw-semi-bold mb-0">30%</h6>
          </div>
          <div className="d-flex align-items-center">
            <div className="bullet-item bg-primary-100 me-2"></div>
            <h6 className="text-900 fw-semi-bold flex-1 mb-0">
              Non-paying customer
            </h6>
            <h6 className="text-900 fw-semi-bold mb-0">70%</h6>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default EcomPayingVsNonPayingCard;
