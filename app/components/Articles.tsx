'use client'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import { Navigation, Autoplay } from 'swiper/modules';
import { useRef } from 'react';
import { CardArticle } from '@/components/CardArticle';


export function Articles() {
  const swiperRef = useRef(null);
  return (
    <section className="overflow-hidden space" id="blog-sec">
      <div className="container">
        <div className="title-area text-center">
          <span className="sub-title">News & Article</span>
          <h2 className="sec-title">Latest news and updates</h2>
        </div>
        <div className="slider-area">
          <Swiper
            className="th-slider has-shadow"
            id="blogSlider1"
            breakpoints={{
              0: { slidesPerView: 1 },
              576: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              992: { slidesPerView: 2 },
              1200: { slidesPerView: 3 }
            }}
            modules={[Navigation, Autoplay]}
            navigation={{
              prevEl: '.slider-prev',
              nextEl: '.slider-next'
            }}
            autoplay={{ delay: 2000 }}
            loop={true}
            ref={swiperRef}
          >
            {
              [1,2,3,4,5,6].map((e, index) => (
              <SwiperSlide key={index}>
                <CardArticle article={e} />
              </SwiperSlide>
              ))
            }
          </Swiper>
          <button className="slider-arrow slider-prev" onClick={() => swiperRef.current.swiper.slidePrev()}><i className="far fa-arrow-left"></i></button>
          <button className="slider-arrow slider-next" onClick={() => swiperRef.current.swiper.slideNext()}><i className="far fa-arrow-right"></i></button>

        </div>
      </div>
    </section>
  );
};
