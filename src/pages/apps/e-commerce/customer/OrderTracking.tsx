import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'components/base/Button';
import Mapbox from 'components/base/MapBox';
import Section from 'components/base/Section';
import PageBreadcrumb from 'components/common/PageBreadcrumb';
import OrderTrackingTimeline from 'components/timelines/OrderTrackingTimeline';
import { defaultBreadcrumbItems } from 'data/commonData';
import { orderTrackingTimelineData } from 'data/timelineData';
import { Col, Row } from 'react-bootstrap';

const OrderTracking = () => {
  return (
    <div className="pt-5 mb-9">
      <Section small className="py-0">
        <PageBreadcrumb items={defaultBreadcrumbItems} />
        <div className="d-flex gap-3 flex-wrap justify-content-between align-items-end mb-5">
          <div>
            <h2>Order #234 Status</h2>
            <p className="text-800 mb-0">
              Payment Via{' '}
              <a className="fw-bold" href="#!">
                Cash on delivery
              </a>
              ,<br className="d-sm-none" />
              <span className="ms-sm-1">Nov 12, 2021, 8:54AM.</span>
            </p>
          </div>
          <Button variant="outline-primary">
            <FontAwesomeIcon icon="phone" className="me-2" />
            Call Support
          </Button>
        </div>
        <Row className="gy-9 gx-5">
          <Col xs={12} lg={6}>
            <Mapbox
              className="border border-300 rounded-3 min-vh-50"
              options={{
                center: [-74.0020158, 40.7228022],
                zoom: 15,
                scrollZoom: false
              }}
            />
          </Col>
          <Col xs={12} lg={6}>
            <OrderTrackingTimeline data={orderTrackingTimelineData} />
          </Col>
        </Row>
      </Section>
    </div>
  );
};

export default OrderTracking;
