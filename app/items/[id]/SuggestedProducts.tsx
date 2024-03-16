'use client'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import { Navigation, Autoplay } from 'swiper/modules';
import { useRef } from 'react';
import { CardItem } from '@/components/CardItem';

export const SuggestedProducts = () => {
  const swiperRef = useRef(null);
  
  return (
    <div className="space-extra-top mb-30">
      <div className="row">
        <div className="title-area mb-25 text-center">
          <span className="sub-title">Similar Products</span>
          <h2 className="sec-title">Recently Viewed Items</h2>
        </div>
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
            [1, 2, 3, 4, 5, 6].map((e, index) => (
              <SwiperSlide>
                <CardItem item={e} />
              </SwiperSlide>
            ))
          }
        </Swiper>
        <button className="slider-arrow slider-prev" onClick={() => swiperRef.current.swiper.slidePrev()}><i className="far fa-arrow-left"></i></button>
        <button className="slider-arrow slider-next" onClick={() => swiperRef.current.swiper.slideNext()}><i className="far fa-arrow-right"></i></button>

      </div>
    </div>
  )
}