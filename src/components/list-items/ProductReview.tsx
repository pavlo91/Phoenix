import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import Button from 'components/base/Button';
import Lightbox from 'components/base/LightBox';
import Rating from 'components/base/Rating';
import RevealDropdown, {
  RevealDropdownTrigger
} from 'components/base/RevealDropdown';
import ActionDropdownItems from 'components/common/ActionDropdownItems';
import { ProductReviewType } from 'data/e-commerce';
import useLightbox from 'hooks/useLightbox';
import { Link } from 'react-router-dom';

const ProductReview = ({ review }: { review: ProductReviewType }) => {
  const { lightboxProps, openLightbox } = useLightbox(review.images || []);
  return (
    <RevealDropdownTrigger className="mb-4 hover-actions-trigger">
      <div className="d-flex justify-content-between mb-2">
        <div className="d-flex align-items-center">
          <Rating readonly initialValue={review.star} />
          <h5 className="mb-0 ms-2 line-clamp-1">
            <span className="text-800 me-1">by</span>
            {review.customer}
          </h5>
        </div>
        <RevealDropdown>
          <ActionDropdownItems />
        </RevealDropdown>
      </div>
      <p className="text-700 fs-9 mb-1">{review.date}</p>
      <p
        className={classNames('text-1000', {
          'mb-3': review.images,
          'mb-1': !review.images
        })}
      >
        {review.review}
      </p>
      <Lightbox {...lightboxProps} />
      {review.images && (
        <div className="d-flex gap-2 flex-wrap mb-2">
          {review.images.map((image, index) => (
            <Link to="#!" key={image}>
              <img
                src={image}
                key={image}
                alt=""
                className="fit-cover"
                height={164}
                onClick={() => openLightbox(index + 1)}
              />
            </Link>
          ))}
        </div>
      )}

      {review.reply && (
        <div className="d-flex">
          <FontAwesomeIcon
            icon="reply"
            className="me-2"
            transform="rotate-180"
          />
          <div>
            <h5>
              Respond from {review.reply.from}
              <span className="text-700 fs-9 ms-2">{review.reply.time} </span>
            </h5>
            <p className="text-1000 mb-0">{review.reply.text}</p>
          </div>
        </div>
      )}
      <div className="hover-actions top-0">
        <Button className="me-2" variant="phoenix-secondary" size="sm">
          <FontAwesomeIcon icon="thumbs-up" />
        </Button>
        <Button className="me-1" variant="phoenix-secondary" size="sm">
          <FontAwesomeIcon icon="thumbs-down" />
        </Button>
      </div>
    </RevealDropdownTrigger>
  );
};

export default ProductReview;
