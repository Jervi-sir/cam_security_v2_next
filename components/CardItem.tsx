'use client'

import { Products } from "@/utils/types"

export const CardItem = ({ item }: { item: Products }) => {
  const imageUrl = item.images !== null ? item.images[0] : "/assets/img/product/product_1_1.jpg";

  return (
    <>
      <div style={{ marginLeft: '15px', marginRight: '15px' }}>
        <a href={`/items/${item.id}`}>
        <div className="th-product">
          <div className="product-img" style={{
            height: '200px', // Fixed height for the container
            backgroundSize: 'cover', // Cover the entire area of the container
            backgroundPosition: 'center', // Center the background image
            backgroundImage: `url(${imageUrl})` // Use background-image
          }}>
            <span className="product-tag">{item.category_name}</span>
            {/* <hover /> */}
          </div>
          <div className="product-content">
            <span className="price">{item.price} DA<del>{item.price} DA</del></span>
            <h3 className="product-title">{item.title}</h3>
            <div className="woocommerce-product-rating">
              <div className="star-rating" role="img" aria-label="Rated 5.00 out of 5">
                <span>Rated <strong className="rating">5.00</strong> out of 5 based on <span className="rating">1</span> customer rating</span>
              </div>
            </div>
          </div>
        </div>
        </a>
      </div>
    </>
  )
}

const hover = () => {
  return (
    <>
      <div className="actions">
        <a href="#QuickView" className="icon-btn popup-content"><i className="far fa-eye"></i></a>
        <a href="cart.html" className="icon-btn"><i className="far fa-cart-plus"></i></a>
        <a href="wishlist.html" className="icon-btn"><i className="far fa-heart"></i></a>
      </div>
    </>
  )
}