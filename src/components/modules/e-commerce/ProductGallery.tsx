import { useBreakpoints } from 'providers/BreakpointsProvider';
import { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { FreeMode, Navigation, Thumbs } from 'swiper';
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';

const ProductGallery = ({ images }: { images: string[] }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);
  const { breakpoints } = useBreakpoints();

  return (
    <Row className="mb-3 g-3">
      <Col xs={12} md={2} lg={12} xl={2}>
        <Swiper
          direction={
            breakpoints.down('md') ||
            (breakpoints.up('lg') && breakpoints.down('xl'))
              ? 'horizontal'
              : 'vertical'
          }
          onInit={setThumbsSwiper}
          loop={true}
          spaceBetween={16}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[Thumbs]}
          className="swiper-products-thumb"
        >
          {images.map((image, index) => (
            <SwiperSlide className="h-auto" key={index}>
              <div className="product-thumb-container p-2 p-sm-3 p-xl-2">
                <img src={image} alt="" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Col>
      <Col xs={12} md={10} lg={12} xl={10}>
        <div className="d-flex align-items-center border rounded-3 text-center p-5 h-100">
          <Swiper
            loop={true}
            spaceBetween={10}
            thumbs={{
              swiper:
                thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null
            }}
            modules={[FreeMode, Navigation, Thumbs]}
          >
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <img src={image} alt="" className="w-100" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Col>
    </Row>
  );
};

export default ProductGallery;
