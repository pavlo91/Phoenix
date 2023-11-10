import Button from 'components/base/Button';
import StoreItem from 'components/common/StoreItem';
import { stores } from 'data/e-commerce/stores';
import { Col, Row } from 'react-bootstrap';

const MyFavoriteStores = () => {
  return (
    <div>
      <div className="d-flex flex-between-center mb-5">
        <div>
          <h3 className="text-1100 mb-2">My Favorite Stores</h3>
          <h5 className="text-700 fw-semi-bold">Essential for a better life</h5>
        </div>
        <Button variant="phoenix-primary">View all</Button>
      </div>
      <Row className="gx-3 gy-5">
        {stores.slice(0, 12).map(store => (
          <Col key={store.name} xs={6} sm={4} md={3} lg={2}>
            <StoreItem store={store} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default MyFavoriteStores;
