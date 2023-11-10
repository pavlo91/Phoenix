import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'components/base/Button';
import { ChangeEvent, Dispatch, SetStateAction } from 'react';

interface QuantityButtonsProps {
  type?: 'default' | 'secondary';
  quantity: number;
  setQuantity: Dispatch<SetStateAction<number>>;
}

const QuantityButtons = ({
  type = 'default',
  quantity,
  setQuantity
}: QuantityButtonsProps) => {
  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuantity(Number(e.target.value));
  };

  if (type === 'default') {
    return (
      <div className="d-flex flex-between-center">
        <Button
          variant="phoenix-primary"
          className="px-3"
          onClick={handleDecrease}
        >
          <FontAwesomeIcon icon="minus" />
        </Button>
        <input
          type="number"
          className="form-control text-center input-spin-none bg-transparent border-0 outline-none"
          style={{ width: 50 }}
          min="1"
          value={quantity}
          onChange={handleChange}
        />
        <Button
          variant="phoenix-primary"
          className="px-3"
          onClick={handleIncrease}
        >
          <FontAwesomeIcon icon="plus" />
        </Button>
      </div>
    );
  }
  return (
    <div className="input-group input-group-sm flex-nowrap">
      <Button size="sm" className="px-2" onClick={handleDecrease}>
        -
      </Button>
      <input
        className="form-control text-center input-spin-none bg-transparent border-0 px-0"
        type="number"
        min={1}
        value={quantity}
        onChange={handleChange}
      />
      <Button size="sm" className="px-2" onClick={handleIncrease}>
        +
      </Button>
    </div>
  );
};

export default QuantityButtons;
