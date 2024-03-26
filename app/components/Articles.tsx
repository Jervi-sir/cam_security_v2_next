'use client'
import { useEffect, useRef, useState } from 'react';
import { Swiper, useSwiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import { CardArticle } from '@/components/CardArticle';
import { getRandomArticles } from '@/utils/supabase';
import { Articles } from '@/utils/types';

export function Articles() {
  const [articles, setArticles] = useState<Articles[]>([]);
  //const swiperRef = useRef(null);
  const swiperNavigate = useSwiper();

  const handlePrev = () => {
    swiperNavigate?.slidePrev;
  };

  const handleNext = () => {
    swiperNavigate?.slideNext;
  };

  useEffect(() => {
    getRandomArticles(4).then(e => {
      setArticles(e);
    })
  }, [])

  return (
    <section className="overflow-hidden space" id="blog-sec">
      <div className="container">
        <div className="title-area text-center">
          <span className="sub-title">NOUVELLES et ARTICLES</span>
          <h2 className="sec-title">Dernières nouvelles et mises à jour</h2>
        </div>
        <div className="slider-area">
          <Swiper
            //ref={swiperRef}
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
          >
            {
              articles.map((e, index) => (
              <SwiperSlide key={index}>
                <CardArticle article={e} />
              </SwiperSlide>
              ))
            }
          </Swiper>
          <button className="slider-arrow slider-prev" onClick={handlePrev}><i className="far fa-arrow-left"></i></button>
          <button className="slider-arrow slider-next" onClick={handleNext}><i className="far fa-arrow-right"></i></button>
        </div>
      </div>
    </section>
  );
};
