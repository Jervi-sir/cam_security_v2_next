"use client"
import React, { useState, useEffect, useRef } from 'react';

export function Header() {
  const [isSticky, setSticky] = useState(false);
  const [isOpened, setIsOpened] = useState(false);
  const menuRef = useRef(null);

  const handleScroll = () => {
    setSticky(window.scrollY > 50);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpened(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className={`th-menu-wrapper ${isOpened ? 'th-body-visible' : ''}`} ref={menuRef}>
        <div onClick={() => setIsOpened(false)} style={{width: '100%', height: '100%', position: 'absolute', background: 'blue', opacity: 0.1, zIndex: -1}}></div>
        <div className="th-menu-area text-center">
          <button className="th-menu-toggle" onClick={() => setIsOpened(false)}><i className="fal fa-times"></i></button>
          <div className="mobile-logo">
            <a href="home-web-agency.html"><img src="/assets/img/logo2.svg" alt="Webtek" /></a>
          </div>
          <div className="th-mobile-menu">
            <ul>
              <li className="menu-item-has-children">
                <a href="home-web-agency.html">Home</a>
                <ul className="sub-menu">
                  <li><a href="home-web-agency.html">Home Web Agency</a></li>
                  <li><a href="home-startup-agency.html">Home Startup Agency</a></li>
                  <li><a href="home-digital-agency.html">Home Digital Agency</a></li>
                  <li><a href="home-it-solution.html">Home IT-solution</a></li>

                </ul>
              </li>
              <li className="menu-item-has-children">
                <a href="#">Pages</a>
                <ul className="sub-menu">
                  <li className="menu-item-has-children">
                    <a href="#">Shop</a>
                    <ul className="sub-menu">
                      <li><a href="shop.html">Shop</a></li>
                      <li><a href="shop-details.html">Shop Details</a></li>
                      <li><a href="cart.html">Cart Page</a></li>
                      <li><a href="checkout.html">Checkout</a></li>
                      <li><a href="wishlist.html">Wishlist</a></li>
                    </ul>
                  </li>
                  <li className="menu-item-has-children">
                    <a href="#">Career</a>
                    <ul className="sub-menu">
                      <li><a href="career.html">Career</a></li>
                      <li><a href="career-details.html">Career Details</a></li>
                    </ul>
                  </li>
                  <li><a href="about.html">About Us</a></li>
                  <li><a href="appointment.html">Appointment</a></li>
                  <li><a href="team.html">Team</a></li>
                  <li><a href="team-details.html">Team Details</a></li>
                  <li><a href="project.html">project</a></li>
                  <li><a href="project-details.html">project Details</a></li>
                  <li><a href="faq.html">Faq Page</a></li>
                  <li><a href="price.html">Price Package</a></li>
                  <li><a href="error.html">Error Page</a></li>
                </ul>

              </li>
              <li className="menu-item-has-children">
                <a href="#">Service</a>
                <ul className="sub-menu">
                  <li><a href="service.html">Service</a></li>
                  <li><a href="service-details.html">Service Details</a></li>
                </ul>
              </li>
              <li className="menu-item-has-children">
                <a href="#">Blog</a>
                <ul className="sub-menu">
                  <li><a href="blog-grid.html">Blog Grid</a></li>
                  <li><a href="blog.html">Blog Lists</a></li>
                  <li><a href="blog-details.html">Blog Details</a></li>
                </ul>
              </li>
              <li>
                <a href="contact.html">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <header className="th-header header-layout2 header-absolute">
        <div className={`sticky-wrapper ${isSticky ? 'sticky' : ''}`}>
          <div className="menu-area">
            <div className="container">
              <div className="row align-items-center justify-content-between">
                <div className="col-auto">
                  <div className="header-logo">
                    <a href="home-web-agency.html"><img src="/assets/img/logo2.svg" alt="Webtek" /></a>
                  </div>
                </div>
                <div className="col-auto">
                  <nav className="main-menu style2 d-none d-lg-inline-block">
                    <ul>
                      <li className="">
                        <a href="home-web-agency.html">Home</a>
                      </li>
                      <li className="menu-item-has-children">
                        <a href="#">Products</a>
                        <ul className="sub-menu">
                          <li className="menu-item-has-children">
                            <a href="#">Cameras</a>
                            <ul className="sub-menu">
                              <li><a href="shop.html">Shop</a></li>
                              <li><a href="shop-details.html">Shop Details</a></li>
                              <li><a href="cart.html">Cart Page</a></li>
                              <li><a href="checkout.html">Checkout</a></li>
                              <li><a href="wishlist.html">Wishlist</a></li>
                            </ul>
                          </li>
                          <li className="menu-item-has-children">
                            <a href="#">Safe Box</a>
                            <ul className="sub-menu">
                              <li><a href="career.html">Career</a></li>
                              <li><a href="career-details.html">Career Details</a></li>
                            </ul>
                          </li>
                          <li><a href="about.html">Baby Security</a></li>
                        </ul>

                      </li>
                      <li className="menu-item-has-children">
                        <a href="#">Service</a>
                        <ul className="sub-menu">
                          <li><a href="service.html">Service</a></li>
                          <li><a href="service-details.html">Service Details</a></li>
                        </ul>
                      </li>
                      <li className="menu-item-has-children">
                        <a href="#">Cart</a>
                        <ul className="sub-menu">
                          <li><a href="blog.html">Wishlist</a></li>
                          <li><a href="blog-details.html">Cart</a></li>
                        </ul>
                      </li>
                      <li className="menu-item-has-children">
                        <a href="#">Extra</a>
                        <ul className="sub-menu">
                          <li><a href="blog.html">About Us</a></li>
                          <li><a href="blog-grid.html">Contact Us</a></li>
                          <li><a href="blog-grid.html">Book An appointment</a></li>
                        </ul>
                      </li>
                    </ul>
                  </nav>

                </div>
                <div className="col-auto">
                  <div className="header-button">
                    <button type="button" className="th-menu-toggle d-block d-lg-none" onClick={() => setIsOpened(true)}><i className="far fa-bars"></i></button>
                    <a href="tel:+2586232325" className="th-btn">Call us: +258 6232 3258</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>

  )
}