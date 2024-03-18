'use client'
import React, { useEffect, useState } from 'react';
// Import Swiper and modules
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import { Autoplay, EffectFade, Thumbs } from 'swiper/modules';

// Install Swiper modules
SwiperCore.use([Autoplay, EffectFade, Thumbs]);


const ProductSlide = ({ thumbnails }: { thumbnails: string | string[] }) => {
  const [thumbsSwiper, setThumbsSwiper] = React.useState(null);
  
  const normalizedThumbnails = Array.isArray(thumbnails) ? thumbnails : [thumbnails];

  const [activeImage, setActiveImage] = useState<string>('');

  const handleThumbnailClick = (image: string) => {
    setActiveImage(image);
  };

  useEffect(() => {
    setActiveImage(normalizedThumbnails[0]);
  }, [thumbnails])

  return (
    <div className="productSlide">
      <div className="th-slider">
        <div className="">
        <div style={{
            height: '460px', // Fixed height for the container
            backgroundSize: 'cover', // Cover the entire area of the container
            backgroundPosition: 'center', // Center the background image
            display: 'flex',
            alignItems: 'center'
          }}>
              <img src={activeImage} alt="Image" />
          </div>
        </div>
      </div>
      <div className="product-thumb-wrap" style={{ position: 'unset' }}>
        <div className="product-thumb">
          {thumbnails.map((item, index) => (
            <div
              key={index}
              className={`tab-btn ${activeImage === item ? 'active' : ''}`}
              onClick={() => handleThumbnailClick(item)}
              style={{
                height: '90px',
                backgroundSize: 'cover', 
                backgroundPosition: 'center',
                display: 'flex',
                alignItems: 'center'
              }}
            >
              <img src={item} alt="Image" width={90} height={90} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default ProductSlide;