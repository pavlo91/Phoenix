import EcomTopCouponsChart from 'components/charts/e-charts/EcomTopCouponsChart';
import ChartLegend from 'components/common/ChartLegend';
import { Col, Row } from 'react-bootstrap';

const WorkLoads = () => {
  return (
    <div>
      <div className="mb-5">
        <h4 className="text-black">Work loads</h4>
        <h6 className="text-700">Last 7 days</h6>
      </div>
      <div className="mb-5">
        <EcomTopCouponsChart />
      </div>
      <Row className="justify-content-center">
        <Col xs="auto" sm={12}>
          <div className="d-flex flex-column gap-2">
            <ChartLegend
              bulletBg="primary"
              label="Shantinan Mekalan"
              value="72%"
            />
            <ChartLegend
              bulletBg="primary-200"
              label="Makena Zikonn"
              value="18%"
            />
            <ChartLegend bulletBg="info" label="Meena Kumari" value="70%" />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default WorkLoads;
