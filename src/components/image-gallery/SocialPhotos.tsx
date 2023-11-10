import { Link } from 'react-router-dom';
import useLightbox from 'hooks/useLightbox';
import { Col, Row } from 'react-bootstrap';
import Lightbox from 'components/base/LightBox';

interface SocialPhotosProps {
  className?: string;
  photos: string[];
}

const SocialPhotos = ({ className, photos }: SocialPhotosProps) => {
  const { lightboxProps, openLightbox } = useLightbox(photos);
  return (
    <div className={className}>
      <div className="d-flex pb-4 align-items-end">
        <h3 className="flex-1 mb-0">Photos</h3>
        <Link to="#!" className="fw-bold fs-9 me-4">
          Albums
        </Link>
        <Link to="#!" className="fw-bold fs-9">
          See all
        </Link>
      </div>
      <Lightbox {...lightboxProps} />
      <Row className="g-3">
        {photos.map((img, index) => (
          <Col key={img} xs={4}>
            <img
              src={img}
              alt=""
              className="w-100 rounded-3 cursor-pointer"
              onClick={() => openLightbox(index + 1)}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default SocialPhotos;
