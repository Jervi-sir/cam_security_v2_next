'use client'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';

import 'swiper/css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import { Navigation, Autoplay } from 'swiper/modules';
import { useEffect, useRef, useState } from 'react';
import { CardItem } from '@/components/CardItem';
import { getRelatedProducts } from '@/utils/supabase';
import { Products } from '@/utils/types';

export const SuggestedProducts = ({ product_id }: { product_id: number }) => {
  const [products, setProducts] = useState<Products[]>([])
  //const swiperRef = useRef(null);
  const swiperNavigate = useSwiper();
  
  useEffect(() => {
    getRelatedProducts(product_id).then(e => setProducts(e))
  }, [])
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
          //ref={swiperRef}
        >
          {
            products.map((e, index) => (
              <SwiperSlide key={index}>
                <CardItem item={e} />
              </SwiperSlide>
            ))
          }
        </Swiper>
        <button className="slider-arrow slider-prev" onClick={() => swiperNavigate?.slidePrev }><i className="far fa-arrow-left"></i></button>
        <button className="slider-arrow slider-next" onClick={() => swiperNavigate?.slideNext }><i className="far fa-arrow-right"></i></button>

      </div>
    </div>
  )
}