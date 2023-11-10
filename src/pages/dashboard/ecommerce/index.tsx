import { Col, Form, Row } from 'react-bootstrap';
import EcomTotalOrdersCard from 'components/cards/EcomTotalOrdersCard';
import EcomNewCustomersCard from 'components/cards/EcomNewCustomersCard';
import EcomTopCouponsCard from 'components/cards/EcomTopCouponsCard';
import EcomPayingVsNonPayingCard from 'components/cards/EcomPayingVsNonPayingCard';
import EcomLatestReviewsTable from 'components/tables/EcomLatestReviewsTable';
import EcomProjectionVsActualChart from 'components/charts/e-charts/EcomProjectionVsActualChart';
import EomReturningCustomerRateChart from 'components/charts/e-charts/EomReturningCustomerRateChart';
import EcomTopRegionsTable from 'components/tables/EcomTopRegionsTable';
import EcomTopRegionsMap from 'components/leaflet-maps/EcomTopRegionsMap';
import EcomTotalSellsChart from 'components/charts/e-charts/EcomTotalSellsChart';
import EcomStats from 'components/stats/EcomStats';
import { mapMarkerPoints } from 'data/mapMarkerPoints';

const Ecommerce = () => {
  return (
    <>
      <div className="pb-5">
        <Row className="g-4">
          <Col xs={12} xxl={6}>
            <div className="mb-8">
              <h2 className="mb-2">Ecommerce Dashboard</h2>
              <h5 className="text-700 fw-semi-bold">
                Here’s what’s going on at your business right now
              </h5>
            </div>
            <EcomStats />
            <Row className="justify-content-between align-items-center mb-4 g-3">
              <Col xs="auto">
                <h3>Total sells</h3>
                <p className="text-700 lh-sm mb-0">
                  Payment received across all channels
                </p>
              </Col>
              <Col xs={8} sm={4}>
                <Form.Select size="sm">
                  <option value="mar">Mar 1 - 31, 2023</option>
                  <option value="apr">April 1 - 30, 2023</option>
                  <option value="may">May 1 - 31, 2023</option>
                </Form.Select>
              </Col>
            </Row>
            <EcomTotalSellsChart />
          </Col>
          <Col xs={12} xxl={6}>
            <Row className="g-3">
              <Col xs={12} md={6}>
                <EcomTotalOrdersCard />
              </Col>
              <Col xs={12} md={6}>
                <EcomNewCustomersCard />
              </Col>
              <Col xs={12} md={6}>
                <EcomTopCouponsCard />
              </Col>
              <Col xs={12} md={6}>
                <EcomPayingVsNonPayingCard />
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
      <div className="mx-n4 px-4 mx-lg-n6 px-lg-6 bg-white pt-7 border-y border-300">
        <EcomLatestReviewsTable />
      </div>
      <Row className="gx-6">
        <Col xs={12} xl={6}>
          <div className="mb-5 mt-7">
            <h3> Top regions by revenue</h3>
            <p className="text-700"> Where you generated most of the revenue</p>
          </div>
          <EcomTopRegionsTable />
        </Col>
        <Col xs={12} xl={6}>
          <div className="mx-n4 mx-lg-n6 ms-xl-0 h-100">
            <div className="h-100 w-100" style={{ minHeight: 300 }}>
              <EcomTopRegionsMap data={mapMarkerPoints} />
            </div>
          </div>
        </Col>
      </Row>
      <div className="mx-n4 px-4 mx-lg-n6 px-lg-6 bg-white pt-6 pb-9 border-top border-300">
        <Row className="g-6">
          <Col xs={12} xl={6}>
            <div className="me-xl-4">
              <div>
                <h3>Projection vs actual</h3>
                <p className="mb-1 text-700">
                  Actual earnings vs projected earnings
                </p>
              </div>
              <EcomProjectionVsActualChart height="300px" width="100%" />
            </div>
          </Col>
          <Col xs={12} xl={6}>
            <div>
              <h3>Returning customer rate</h3>
              <p className="mb-1 text-700">
                Rate of customers returning to your shop over time
              </p>
            </div>
            <EomReturningCustomerRateChart />
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Ecommerce;
