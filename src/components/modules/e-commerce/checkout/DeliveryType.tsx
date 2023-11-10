import { Col, Row } from 'react-bootstrap';
import DeliveryTypeRadioItem from './DeliveryOptionRadioItem';

export interface DeliveryOptionsType {
  id: string;
  label: string;
  price: number;
  estDelivery: string;
  description: string;
  popular?: boolean;
}

const deliverOptions: DeliveryOptionsType[] = [
  {
    id: 'free_shipping',
    label: 'Free Shipping',
    price: 0,
    estDelivery: 'Jun 21 – Jul 20',
    description: 'Get Free Shipped products in Time!'
  },
  {
    id: 'two_days_shipping',
    label: 'Two days Shipping',
    price: 20,
    estDelivery: 'Jun 1 – Jun 10',
    description: 'Everything faster with minimum shipping fee.'
  },
  {
    id: 'standard_shipping',
    label: 'Standard Shipping',
    price: 10,
    estDelivery: 'Jun 5 – Jun 20',
    description: 'Get timely delivery with economy shipping.'
  },
  {
    id: 'one_day_shipping',
    label: 'One day Shipping',
    price: 30,
    estDelivery: 'Jun 1 – Jun 2',
    description: 'Highest priority shipping at the lowest cost.',
    popular: true
  }
];

const DeliveryType = () => {
  return (
    <>
      <h3 className="mb-5">Delivery Type</h3>
      <Row className="gy-6">
        {deliverOptions.map(option => (
          <Col xs={12} md={6} key={option.id}>
            <DeliveryTypeRadioItem option={option} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default DeliveryType;
