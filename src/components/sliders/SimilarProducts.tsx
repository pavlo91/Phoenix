import { Product } from 'data/e-commerce/products';
import ProductCard from 'components/common/ProductCard';
import Swiper from 'components/base/Swiper';
import { SwiperSlide } from 'swiper/react';
import Button from 'components/base/Button';

const SimilarProducts = ({ products }: { products: Product[] }) => {
  return (
    <>
      <div className="d-flex flex-between-center mb-3">
        <div>
          <h3>Similar Products</h3>
          <p className="mb-0 text-700 fw-semi-bold">
            Essential for a better life
          </p>
        </div>
        <Button variant="phoenix-primary" size="sm">
          View all
        </Button>
      </div>

      <Swiper
        slidesPerView={1}
        spaceBetween={16}
        navigationPosition={{ top: '25%' }}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 16
          },
          450: {
            slidesPerView: 2,
            spaceBetween: 16
          },
          576: {
            slidesPerView: 3,
            spaceBetween: 20
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 20
          },
          992: {
            slidesPerView: 5,
            spaceBetween: 20
          },
          1200: {
            slidesPerView: 6,
            spaceBetween: 16
          }
        }}
      >
        {products.map(product => (
          <SwiperSlide key={product.id}>
            <ProductCard product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default SimilarProducts;
