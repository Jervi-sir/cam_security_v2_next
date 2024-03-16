export const CardItem = ({ item }) => {
  return (
    <div style={{ marginLeft: '15px', marginRight: '15px' }}>
      <div className="th-product">
        <div className="product-img">
          <img src="/assets/img/product/product_1_1.jpg" alt="Product Image" />
          <span className="product-tag">Sale</span>
          <div className="actions">
            <a href="#QuickView" className="icon-btn popup-content"><i className="far fa-eye"></i></a>
            <a href="cart.html" className="icon-btn"><i className="far fa-cart-plus"></i></a>
            <a href="wishlist.html" className="icon-btn"><i className="far fa-heart"></i></a>
          </div>
        </div>
        <div className="product-content">
          <span className="price">$250.00<del>$550.00</del></span>
          <h3 className="product-title"><a href="shop-details.html">Concrete Admixtures</a></h3>
          <div className="woocommerce-product-rating">
            <div className="star-rating" role="img" aria-label="Rated 5.00 out of 5">
              <span>Rated <strong className="rating">5.00</strong> out of 5 based on <span className="rating">1</span> customer rating</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}