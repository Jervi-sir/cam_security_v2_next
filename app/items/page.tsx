export default function Items() {
  return (
<section className="space-top space-extra-bottom">
        <div className="container">
            <div className="th-sort-bar">
                <div className="row justify-content-between align-items-center">
                    <div className="col-md">
                        <p className="woocommerce-result-count">Showing 1–12 of 16 results</p>
                    </div>

                    <div className="col-md-auto">
                        <form className="woocommerce-ordering" method="get">
                            <select name="orderby" className="orderby" aria-label="Shop order">
                                <option value="menu_order" >Default Sorting</option>
                                <option value="popularity">Sort by popularity</option>
                                <option value="rating">Sort by average rating</option>
                                <option value="date">Sort by latest</option>
                                <option value="price">Sort by price: low to high</option>
                                <option value="price-desc">Sort by price: high to low</option>
                            </select>
                        </form>
                    </div>
                    <div className="col-md-auto">
                        <div className="nav" >
                            <a href="#" className="active" id="tab-shop-grid" data-bs-toggle="tab" data-bs-target="#tab-grid" role="tab" aria-controls="tab-grid" aria-selected="true"><i className="fas fa-th"></i></a>
                            <a href="#" id="tab-shop-list" data-bs-toggle="tab" data-bs-target="#tab-list" role="tab" aria-controls="tab-grid" aria-selected="false"><i className="fas fa-list"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row gy-40">
                <div className="tab-content" id="nav-tabContent">
                    <div className="tab-pane fade active show" id="tab-grid" role="tabpanel" aria-labelledby="tab-shop-grid">
                        <div className="row gy-40">

                            <div className="col-xl-3 col-sm-6">
                                <div className="th-product">
                                    <div className="product-img">
                                        <img src="assets/img/product/product_1_1.jpg" alt="Product Image"/>
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


                            <div className="col-xl-3 col-sm-6">
                                <div className="th-product">
                                    <div className="product-img">
                                        <img src="assets/img/product/product_1_2.jpg" alt="Product Image"/>
                                        <span className="product-tag">Sale</span>
                                        <div className="actions">
                                            <a href="#QuickView" className="icon-btn popup-content"><i className="far fa-eye"></i></a>
                                            <a href="cart.html" className="icon-btn"><i className="far fa-cart-plus"></i></a>
                                            <a href="wishlist.html" className="icon-btn"><i className="far fa-heart"></i></a>
                                        </div>
                                    </div>
                                    <div className="product-content">
                                        <span className="price">$220.00</span>
                                        <h3 className="product-title"><a href="shop-details.html">Wireless Headphone</a></h3>
                                        <div className="woocommerce-product-rating">
                                            <div className="star-rating" role="img" aria-label="Rated 5.00 out of 5">
                                                <span>Rated <strong className="rating">5.00</strong> out of 5 based on <span className="rating">1</span> customer rating</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="col-xl-3 col-sm-6">
                                <div className="th-product">
                                    <div className="product-img">
                                        <img src="assets/img/product/product_1_3.jpg" alt="Product Image"/>
                                        <span className="product-tag">New</span>
                                        <div className="actions">
                                            <a href="#QuickView" className="icon-btn popup-content"><i className="far fa-eye"></i></a>
                                            <a href="cart.html" className="icon-btn"><i className="far fa-cart-plus"></i></a>
                                            <a href="wishlist.html" className="icon-btn"><i className="far fa-heart"></i></a>
                                        </div>
                                    </div>
                                    <div className="product-content">
                                        <span className="price">$240.00</span>
                                        <h3 className="product-title"><a href="shop-details.html">Battery Cartoon</a></h3>
                                        <div className="woocommerce-product-rating">
                                            <div className="star-rating" role="img" aria-label="Rated 5.00 out of 5">
                                                <span>Rated <strong className="rating">5.00</strong> out of 5 based on <span className="rating">1</span> customer rating</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="col-xl-3 col-sm-6">
                                <div className="th-product">
                                    <div className="product-img">
                                        <img src="assets/img/product/product_1_4.jpg" alt="Product Image"/>
                                        <span className="product-tag">Sale</span>
                                        <div className="actions">
                                            <a href="#QuickView" className="icon-btn popup-content"><i className="far fa-eye"></i></a>
                                            <a href="cart.html" className="icon-btn"><i className="far fa-cart-plus"></i></a>
                                            <a href="wishlist.html" className="icon-btn"><i className="far fa-heart"></i></a>
                                        </div>
                                    </div>
                                    <div className="product-content">
                                        <span className="price">$265.00</span>
                                        <h3 className="product-title"><a href="shop-details.html">Wireless Headphone</a></h3>
                                        <div className="woocommerce-product-rating">
                                            <div className="star-rating" role="img" aria-label="Rated 5.00 out of 5">
                                                <span>Rated <strong className="rating">5.00</strong> out of 5 based on <span className="rating">1</span> customer rating</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="col-xl-3 col-sm-6">
                                <div className="th-product">
                                    <div className="product-img">
                                        <img src="assets/img/product/product_1_5.jpg" alt="Product Image"/>
                                        <span className="product-tag">New</span>
                                        <div className="actions">
                                            <a href="#QuickView" className="icon-btn popup-content"><i className="far fa-eye"></i></a>
                                            <a href="cart.html" className="icon-btn"><i className="far fa-cart-plus"></i></a>
                                            <a href="wishlist.html" className="icon-btn"><i className="far fa-heart"></i></a>
                                        </div>
                                    </div>
                                    <div className="product-content">
                                        <span className="price">$235.00</span>
                                        <h3 className="product-title"><a href="shop-details.html">CORSAIR VS450 450W</a></h3>
                                        <div className="woocommerce-product-rating">
                                            <div className="star-rating" role="img" aria-label="Rated 5.00 out of 5">
                                                <span>Rated <strong className="rating">5.00</strong> out of 5 based on <span className="rating">1</span> customer rating</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="col-xl-3 col-sm-6">
                                <div className="th-product">
                                    <div className="product-img">
                                        <img src="assets/img/product/product_1_6.jpg" alt="Product Image" />
                                        <span className="product-tag">Sale</span>
                                        <div className="actions">
                                            <a href="#QuickView" className="icon-btn popup-content"><i className="far fa-eye"></i></a>
                                            <a href="cart.html" className="icon-btn"><i className="far fa-cart-plus"></i></a>
                                            <a href="wishlist.html" className="icon-btn"><i className="far fa-heart"></i></a>
                                        </div>
                                    </div>
                                    <div className="product-content">
                                        <span className="price">$225.00</span>
                                        <h3 className="product-title"><a href="shop-details.html">Pioneer dj DM-40BT</a></h3>
                                        <div className="woocommerce-product-rating">
                                            <div className="star-rating" role="img" aria-label="Rated 5.00 out of 5">
                                                <span>Rated <strong className="rating">5.00</strong> out of 5 based on <span className="rating">1</span> customer rating</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="col-xl-3 col-sm-6">
                                <div className="th-product">
                                    <div className="product-img">
                                        <img src="assets/img/product/product_1_7.jpg" alt="Product Image" />
                                        <span className="product-tag">New</span>
                                        <div className="actions">
                                            <a href="#QuickView" className="icon-btn popup-content"><i className="far fa-eye"></i></a>
                                            <a href="cart.html" className="icon-btn"><i className="far fa-cart-plus"></i></a>
                                            <a href="wishlist.html" className="icon-btn"><i className="far fa-heart"></i></a>
                                        </div>
                                    </div>
                                    <div className="product-content">
                                        <span className="price">$235.00</span>
                                        <h3 className="product-title"><a href="shop-details.html">Play Station 4 Pro</a></h3>
                                        <div className="woocommerce-product-rating">
                                            <div className="star-rating" role="img" aria-label="Rated 5.00 out of 5">
                                                <span>Rated <strong className="rating">5.00</strong> out of 5 based on <span className="rating">1</span> customer rating</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="col-xl-3 col-sm-6">
                                <div className="th-product">
                                    <div className="product-img">
                                        <img src="assets/img/product/product_1_8.jpg" alt="Product Image" />
                                        <span className="product-tag">Sale</span>
                                        <div className="actions">
                                            <a href="#QuickView" className="icon-btn popup-content"><i className="far fa-eye"></i></a>
                                            <a href="cart.html" className="icon-btn"><i className="far fa-cart-plus"></i></a>
                                            <a href="wishlist.html" className="icon-btn"><i className="far fa-heart"></i></a>
                                        </div>
                                    </div>
                                    <div className="product-content">
                                        <span className="price">$250.00<del>$550.00</del></span>
                                        <h3 className="product-title"><a href="shop-details.html">Cooler Master</a></h3>
                                        <div className="woocommerce-product-rating">
                                            <div className="star-rating" role="img" aria-label="Rated 5.00 out of 5">
                                                <span>Rated <strong className="rating">5.00</strong> out of 5 based on <span className="rating">1</span> customer rating</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                    <div className="tab-pane fade " id="tab-list" role="tabpanel" aria-labelledby="tab-shop-list">
                        <div className="row gy-30">

                            <div className="col-md-6">
                                <div className="th-product list-view">
                                    <div className="product-img">
                                        <img src="assets/img/product/product_1_1.jpg" alt="Product Image" />
                                        <div className="actions">
                                            <a href="cart.html" className="icon-btn"><i className="far fa-cart-plus"></i></a>
                                        </div>
                                    </div>
                                    <div className="product-content">
                                        <span className="price">$250.00<del>$550.00</del></span>
                                        <h3 className="product-title"><a href="shop-details.html">Concrete Admixtures</a></h3>
                                        <div className="star-rating" role="img" aria-label="Rated 5.00 out of 5">
                                            <span>Rated <strong className="rating">5.00</strong> out of 5 based on <span className="rating">1</span> customer rating</span>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="col-md-6">
                                <div className="th-product list-view">
                                    <div className="product-img">
                                        <img src="assets/img/product/product_1_2.jpg" alt="Product Image" />
                                        <div className="actions">
                                            <a href="cart.html" className="icon-btn"><i className="far fa-cart-plus"></i></a>
                                        </div>
                                    </div>
                                    <div className="product-content">
                                        <span className="price">$220.00</span>
                                        <h3 className="product-title"><a href="shop-details.html">Wireless Headphone</a></h3>
                                        <div className="star-rating" role="img" aria-label="Rated 5.00 out of 5">
                                            <span>Rated <strong className="rating">5.00</strong> out of 5 based on <span className="rating">1</span> customer rating</span>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="col-md-6">
                                <div className="th-product list-view">
                                    <div className="product-img">
                                        <img src="assets/img/product/product_1_3.jpg" alt="Product Image" />
                                        <div className="actions">
                                            <a href="cart.html" className="icon-btn"><i className="far fa-cart-plus"></i></a>
                                        </div>
                                    </div>
                                    <div className="product-content">
                                        <span className="price">$240.00</span>
                                        <h3 className="product-title"><a href="shop-details.html">Battery Cartoon</a></h3>
                                        <div className="star-rating" role="img" aria-label="Rated 5.00 out of 5">
                                            <span>Rated <strong className="rating">5.00</strong> out of 5 based on <span className="rating">1</span> customer rating</span>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="col-md-6">
                                <div className="th-product list-view">
                                    <div className="product-img">
                                        <img src="assets/img/product/product_1_4.jpg" alt="Product Image" />
                                        <div className="actions">
                                            <a href="cart.html" className="icon-btn"><i className="far fa-cart-plus"></i></a>
                                        </div>
                                    </div>
                                    <div className="product-content">
                                        <span className="price">$265.00</span>
                                        <h3 className="product-title"><a href="shop-details.html">Wireless Headphone</a></h3>
                                        <div className="star-rating" role="img" aria-label="Rated 5.00 out of 5">
                                            <span>Rated <strong className="rating">5.00</strong> out of 5 based on <span className="rating">1</span> customer rating</span>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="col-md-6">
                                <div className="th-product list-view">
                                    <div className="product-img">
                                        <img src="assets/img/product/product_1_5.jpg" alt="Product Image" />
                                        <div className="actions">
                                            <a href="cart.html" className="icon-btn"><i className="far fa-cart-plus"></i></a>
                                        </div>
                                    </div>
                                    <div className="product-content">
                                        <span className="price">$235.00</span>
                                        <h3 className="product-title"><a href="shop-details.html">CORSAIR VS450 450W</a></h3>
                                        <div className="star-rating" role="img" aria-label="Rated 5.00 out of 5">
                                            <span>Rated <strong className="rating">5.00</strong> out of 5 based on <span className="rating">1</span> customer rating</span>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="col-md-6">
                                <div className="th-product list-view">
                                    <div className="product-img">
                                        <img src="assets/img/product/product_1_6.jpg" alt="Product Image" />
                                        <div className="actions">
                                            <a href="cart.html" className="icon-btn"><i className="far fa-cart-plus"></i></a>
                                        </div>
                                    </div>
                                    <div className="product-content">
                                        <span className="price">$225.00</span>
                                        <h3 className="product-title"><a href="shop-details.html">Pioneer dj DM-40BT</a></h3>
                                        <div className="star-rating" role="img" aria-label="Rated 5.00 out of 5">
                                            <span>Rated <strong className="rating">5.00</strong> out of 5 based on <span className="rating">1</span> customer rating</span>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="col-md-6">
                                <div className="th-product list-view">
                                    <div className="product-img">
                                        <img src="assets/img/product/product_1_7.jpg" alt="Product Image" />
                                        <div className="actions">
                                            <a href="cart.html" className="icon-btn"><i className="far fa-cart-plus"></i></a>
                                        </div>
                                    </div>
                                    <div className="product-content">
                                        <span className="price">$235.00</span>
                                        <h3 className="product-title"><a href="shop-details.html">Play Station 4 Pro</a></h3>
                                        <div className="star-rating" role="img" aria-label="Rated 5.00 out of 5">
                                            <span>Rated <strong className="rating">5.00</strong> out of 5 based on <span className="rating">1</span> customer rating</span>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="col-md-6">
                                <div className="th-product list-view">
                                    <div className="product-img">
                                        <img src="assets/img/product/product_1_8.jpg" alt="Product Image"/>
                                        <div className="actions">
                                            <a href="cart.html" className="icon-btn"><i className="far fa-cart-plus"></i></a>
                                        </div>
                                    </div>
                                    <div className="product-content">
                                        <span className="price">$250.00<del>$550.00</del></span>
                                        <h3 className="product-title"><a href="shop-details.html">Cooler Master</a></h3>
                                        <div className="star-rating" role="img" aria-label="Rated 5.00 out of 5">
                                            <span>Rated <strong className="rating">5.00</strong> out of 5 based on <span className="rating">1</span> customer rating</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>


            </div>
            <div className="th-pagination text-center pt-50">
                <ul>
                    <li><a href="blog.html">1</a></li>
                    <li><a href="blog.html">2</a></li>
                    <li><a href="blog.html">3</a></li>
                    <li><a href="blog.html"><i className="fa-solid fa-angles-right"></i></a></li>
                </ul>
            </div>
        </div>
    </section>
  )
}