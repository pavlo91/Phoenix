import Badge from 'components/base/Badge';
import EcomTotalOrdersChart from 'components/charts/e-charts/EcomTotalOrdersChart';
import React from 'react';
import { Card } from 'react-bootstrap';

const EcomTotalOrdersCard = () => {
  return (
    <Card className="h-100">
      <Card.Body>
        <div className="d-flex justify-content-between">
          <div>
            <h5 className="mb-1">
              Total orders
              <Badge bg="warning" variant="phoenix" pill className="ms-2">
                -6.8%
              </Badge>
            </h5>
            <h6 className="text-700">Last 7 days</h6>
          </div>
          <h4>16,247</h4>
        </div>
        <div className="d-flex justify-content-center px-4 py-6">
          <EcomTotalOrdersChart />
        </div>
        <div className="mt-2">
          <div className="d-flex align-items-center mb-2">
            <div className="bullet-item bg-primary me-2"></div>
            <h6 className="text-900 fw-semi-bold flex-1 mb-0">Completed</h6>
            <h6 className="text-900 fw-semi-bold mb-0">52%</h6>
          </div>
          <div className="d-flex align-items-center">
            <div className="bullet-item bg-primary-100 me-2"></div>
            <h6 className="text-900 fw-semi-bold flex-1 mb-0">
              Pending payment
            </h6>
            <h6 className="text-900 fw-semi-bold mb-0">48%</h6>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default EcomTotalOrdersCard;
