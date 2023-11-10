import Lightbox from 'components/base/LightBox';
import { Image } from 'data/social/postsData';
import useLightbox from 'hooks/useLightbox';
import { Col, Row } from 'react-bootstrap';

interface PostGalleryProps {
  images: Image[];
}

const PostGallery = ({ images }: PostGalleryProps) => {
  const imageArray = images.map(image => image.src);
  const { lightboxProps, openLightbox } = useLightbox(imageArray);

  return (
    <>
      <Lightbox {...lightboxProps} />
      <Row className="g-1 mb-5">
        {images?.map((image, index) => (
          <Col key={index} xs={image.cols}>
            <img
              src={image.src}
              alt=""
              className="rounded h-100 w-100 cursor-pointer"
              onClick={() => openLightbox(index + 1)}
            />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default PostGallery;
