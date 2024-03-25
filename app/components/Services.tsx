'use client'
import { Swiper, useSwiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import { CardArticle } from '@/components/CardArticle';

export const Services = () => {
  const swiperNavigate = useSwiper();

  const handlePrev = () => {
    swiperNavigate?.slidePrev;
  };

  const handleNext = () => {
    swiperNavigate?.slideNext;
  };

  return (
    <>
    <section className="service-area bg-white th-radius space-extra3 space">
        <div className="container">
            <div className="row justify-content-center align-items-end">
                <div className="col-lg-5">
                    <div className="title-area text-center">
                        <span className="sub-title style1">Our Services</span>
                        <h2 className="sec-title">Nous Offrons des services adéquats.</h2>
                    </div>
                </div>
            </div>
            <div className="slider-area">
                <div className="swiper th-slider has-shadow">
                  <Swiper
                    //ref={swiperRef}
                    className="th-slider has-shadow"
                    id="blogSlider1"
                    breakpoints={{
                      0: { slidesPerView: 1 },
                      576: { slidesPerView: 2 },
                      768: { slidesPerView: 3 },
                      992: { slidesPerView: 4 },
                      1200: { slidesPerView: 5}
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
                      [
                        { image: 'assets/img/icon/service_1_2.svg' ,title: 'Meilleur maintenance' },
                        { image: 'assets/img/icon/service_1_3.svg' ,title: 'Service d\'Assistance 24/7' },
                        { image: 'assets/img/icon/service_1_4.svg' ,title: 'Une Estimation Gratuite' },
                        { image: 'assets/img/icon/service_1_6.svg' ,title: 'Une Sécurité Garantie' },
                        { image: 'assets/img/icon/feature_1_3.svg' ,title: 'Équipe Professionel' },
                        { image: 'assets/img/icon/feature_1_2.svg' ,title: 'Technologies Récentes' },
                        
                      ].map((e, index) => (
                      <SwiperSlide key={index}>
                        <div className="service-box th-ani" style={{marginRight: '15px', marginLeft: '15px', minHeight: '150px'}}>
                          <div className="service-box_icon">
                            <img src={e.image} alt="Icon" />
                          </div>
                          <h3 className="box-title"><a >{e.title}</a></h3>
                          <a className="icon-btn"><i className="fa-regular fa-check"></i></a>
                        </div>
                      </SwiperSlide>
                      ))
                    }
                  </Swiper>
                </div>
                <button className="slider-arrow slider-prev" onClick={handlePrev}><i className="far fa-arrow-left"></i></button>
                <button className="slider-arrow slider-next" onClick={handleNext}><i className="far fa-arrow-right"></i></button>
            </div>
        </div>
    </section>
    </>
  )
}