'use client'
import React, { useState } from 'react';
// Import Swiper and modules
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import { Autoplay, EffectFade, Thumbs } from 'swiper/modules';

// Install Swiper modules
SwiperCore.use([Autoplay, EffectFade, Thumbs]);

const ProductSlide = ({ thumbnails }) => {
  const [thumbsSwiper, setThumbsSwiper] = React.useState(null);
  
  const [activeImage, setActiveImage] = useState(thumbnails[0].big);
  const handleThumbnailClick = (image) => {
    setActiveImage(image);
  };

  return (
    <div className="productSlide">
      <span className="product-tag">Sale</span>
      <div className="th-slider">
        <div className="">
          <div >
            <img src={activeImage} alt="" />
          </div>
        </div>
      </div>
      <div className="product-thumb-wrap">
        <div className="product-thumb">
          {thumbnails.map((item, index) => (
            <div
              key={index}
              className={`tab-btn ${activeImage === item.big ? 'active' : ''}`}
              onClick={() => handleThumbnailClick(item.big)}
            >
              <img src={item.thumb} alt="Image" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductSlide;