import PhoenixDocCard from 'components/base/PhoenixDocCard';
import DocPageHeader from 'components/docs/DocPageHeader';
import DocPagesLayout from 'layouts/DocPagesLayout';
import React, { useState } from 'react';
import img30 from 'assets/phoenix/img/generic/30.jpg';
import img31 from 'assets/phoenix/img/generic/31.jpg';
import img32 from 'assets/phoenix/img/generic/32.jpg';
import img33 from 'assets/phoenix/img/generic/33.jpg';
import img34 from 'assets/phoenix/img/generic/34.jpg';
import img35 from 'assets/phoenix/img/generic/35.jpg';
import { FreeMode, Navigation, Thumbs } from 'swiper';
import { SwiperSlide } from 'swiper/react';
import Swiper from 'components/base/Swiper';

const swiperWithThumbnailCode = `
import Swiper from 'components/base/Swiper';

function SwiperWithThumbnail(){
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);
  return (
    <div>
      <Swiper
        thumbs={{
          swiper:
            thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null
        }}
        modules={[FreeMode, Navigation, Thumbs]}
      >
        {[img30, img31, img32, img33, img34, img35].map(
          (image, index) => (
            <SwiperSlide className="h-auto" key={index}>
              <div className="pb-1">
                <img src={image} alt="" className="img-fluid rounded-1" />
              </div>
            </SwiperSlide>
          )
        )}
      </Swiper>
      <Swiper
        onInit={setThumbsSwiper}
        spaceBetween={5}
        slidesPerView={5}
        freeMode={true}
        grabCursor={true}
        navigation={false}
      >
        {[img30, img31, img32, img33, img34, img35].map(
          (image, index) => (
            <SwiperSlide className="h-auto" key={index}>
              <img src={image} alt="" className="img-fluid rounded-1" />
            </SwiperSlide>
          )
        )}
      </Swiper>
    </div>
  )
}
`;
const swiperWithoutThumbnailCode = `
import Swiper from 'components/base/Swiper';

function SwiperWithoutThumbnail(){
  return (
    <div>
      <Swiper>
        {[img30, img31, img32, img33, img34, img35].map(
          (image, index) => (
            <SwiperSlide className="h-auto" key={index}>
              <div className="pb-1">
                <img src={image} alt="" className="img-fluid rounded-1" />
              </div>
            </SwiperSlide>
          )
        )}
      </Swiper>
    </div>
  )
}
`;
const withoutNavigationCode = `
import Swiper from 'components/base/Swiper';

function WithoutNavigation(){
  return (
    <div>
      <Swiper navigation={false}>
        {[img30, img31, img32, img33, img34, img35].map(
          (image, index) => (
            <SwiperSlide className="h-auto" key={index}>
              <div className="pb-1">
                <img src={image} alt="" className="img-fluid rounded-1" />
              </div>
            </SwiperSlide>
          )
        )}
      </Swiper>
    </div>
  )
}
`;

const SwiperCarousel = () => {
  return (
    <div className="mb-9">
      <DocPageHeader
        title="Swiper"
        description="Swiper is the most modern free mobile touch slider with hardware accelerated transitions and amazing native behavior. It is intended to be used in mobile websites, mobile web apps, and mobile native/hybrid apps."
        link={{
          text: 'Documentation for swiper',
          url: 'https://swiperjs.com/get-started'
        }}
      />
      <DocPagesLayout>
        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Swiper with thumbnail" />
          <PhoenixDocCard.Body
            code={swiperWithThumbnailCode}
            scope={{
              useState,
              Swiper,
              SwiperSlide,
              FreeMode,
              Navigation,
              Thumbs,
              img30,
              img31,
              img32,
              img33,
              img34,
              img35
            }}
          />
        </PhoenixDocCard>
        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Swiper without thumbnail" />
          <PhoenixDocCard.Body
            code={swiperWithoutThumbnailCode}
            scope={{
              Swiper,
              SwiperSlide,
              img30,
              img31,
              img32,
              img33,
              img34,
              img35
            }}
          />
        </PhoenixDocCard>
        <PhoenixDocCard>
          <PhoenixDocCard.Header title="Swiper without navigation" />
          <PhoenixDocCard.Body
            code={withoutNavigationCode}
            scope={{
              Swiper,
              SwiperSlide,
              img30,
              img31,
              img32,
              img33,
              img34,
              img35
            }}
          />
        </PhoenixDocCard>
      </DocPagesLayout>
    </div>
  );
};

export default SwiperCarousel;
