import { useState } from 'react';
import Rating, { RatingProps } from './Rating';

interface StarCheckboxProps extends RatingProps {
  defaultChecked?: boolean;
  onClick?: () => void;
}

const StarCheckbox = ({
  defaultChecked,
  onClick,
  ...rest
}: StarCheckboxProps) => {
  const [rating, setRating] = useState(defaultChecked ? 1 : 0);

  const handleRating = () => {
    if (rating === 0) {
      setRating(1);
    } else {
      setRating(0);
    }
    if (onClick) {
      onClick();
    }
  };

  return (
    <Rating
      key={rating}
      iconClass="fs-8"
      {...rest}
      initialValue={rating}
      iconsCount={1}
      allowFraction={false}
      onClick={handleRating}
    />
  );
};

export default StarCheckbox;
