import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Product } from 'data/e-commerce/products';
import ProductCard from 'components/common/ProductCard';
import Swiper from 'components/base/Swiper';
import { SwiperSlide } from 'swiper/react';

const EcomTopDeals = ({ products }: { products: Product[] }) => {
  return (
    <>
      <div className="d-flex flex-between-center mb-3">
        <div className="d-flex">
          <FontAwesomeIcon icon="bolt" className="text-warning fs-6" />
          <h3 className="mx-2">Top Deals today</h3>
          <FontAwesomeIcon icon="bolt" className="text-warning fs-6" />
        </div>
        <Link to="#!" className="btn btn-link btn-lg p-0 d-none d-md-block">
          Explore more
          <FontAwesomeIcon icon="chevron-right" className="fs-9 ms-1" />
        </Link>
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
          768: {
            slidesPerView: 3,
            spaceBetween: 20
          },
          1200: {
            slidesPerView: 4,
            spaceBetween: 16
          },
          1540: {
            slidesPerView: 5,
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

export default EcomTopDeals;
