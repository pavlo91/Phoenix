import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import {
  Rating as ReactRating,
  RatingProps as ReactRatingProps
} from 'react-simple-star-rating';

export interface RatingProps extends ReactRatingProps {
  iconClass?: string;
  fillIconColor?: string;
  emptyIconColor?: string;
}

const Rating = ({
  iconClass,
  fillIconColor = 'warning',
  emptyIconColor = 'warning-300',
  ...rest
}: RatingProps) => {
  return (
    <ReactRating
      allowFraction
      fillIcon={
        <FontAwesomeIcon
          icon="star"
          className={classNames(iconClass, `text-${fillIconColor}`)}
        />
      }
      emptyIcon={
        <FontAwesomeIcon
          icon={['far', 'star']}
          className={classNames(iconClass, `text-${emptyIconColor}`)}
        />
      }
      {...rest}
    />
  );
};

export default Rating;
