import { currencyFormat } from 'helpers/utils';
import { Form } from 'react-bootstrap';
import { DeliveryOptionsType } from './DeliveryType';
import Badge from 'components/base/Badge';

const DeliveryOptionRadioItem = ({
  option
}: {
  option: DeliveryOptionsType;
}) => {
  const { id, label, price, estDelivery, description, popular } = option;
  return (
    <div>
      <div className="d-flex flex-wrap align-items-center mb-3">
        <Form.Check type="radio" id={id} className="mb-0">
          <Form.Check.Input type="radio" name="delivery_type" />
          <Form.Check.Label className="fs-8 text-900">{label}</Form.Check.Label>
        </Form.Check>
        <span className="d-inline-block text-1100 fw-bold ms-2">
          {currencyFormat(price, { minimumFractionDigits: 2 })}
        </span>
        {popular && (
          <Badge
            bg="warning"
            variant="phoenix"
            className="ms-2 ms-lg-4 ms-xl-2"
          >
            Popular
          </Badge>
        )}
      </div>
      <div className="ps-4">
        <h6 className="text-700 mb-2">Est. delivery: ${estDelivery}</h6>
        <h6 className="text-info lh-base mb-0">{description}</h6>
      </div>
    </div>
  );
};

export default DeliveryOptionRadioItem;
