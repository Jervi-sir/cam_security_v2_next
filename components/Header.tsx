"use client"
import { useCart } from '@/context/CartContext';
import { Settings } from '@/utils/db';
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
        <div className="th-menu-area text-center" >
          <button className="th-menu-toggle" onClick={() => setIsOpened(false)}><i className="fal fa-times"></i></button>
          <div className="mobile-logo">
            <a href="/"><img src={Settings.logo_url2} alt={Settings.site_name} /></a>
          </div>
          <div className="th-mobile-menu">
            <MenuNav />
          </div>
        </div>
      </div>
      <header className="th-header header-layout2 header-absolute">
        <div className={`sticky-wrapper ${isSticky ? 'sticky' : ''}`}>
          <div className="menu-area" style={{paddingTop: 0}}>
            <div className="container">
              <div className="row align-items-center justify-content-between">
                <div className="col-auto">
                  <div className="header-logo">
                    <a href="/"><img src={Settings.logo_url2} alt={Settings.site_name} /></a>
                  </div>
                </div>
                <div className="col-auto">
                  <nav className="main-menu style2 d-none d-lg-inline-block">
                    <MenuNav />
                  </nav>

                </div>
                <div className="col-auto">
                  <div className="header-button">
                    <button type="button" className="th-menu-toggle d-block d-lg-none" onClick={() => setIsOpened(true)}><i className="far fa-bars"></i></button>
                    <a href={`tel:${Settings.phone_number}`} className="th-btn">Call us: {' '}{Settings.phone_number}</a>
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

const MenuNav = () => {
  const { cart } = useCart();
  return (
    <ul>
      <li className="">
        <a href="/">Accueil</a>
      </li>
      <li className="menu-item-has-children">
        <a href="items">Nos Produits</a>
        <ul className="sub-menu">
          <li className=""> {/* menu-item-has-children */}
            <a href="/items?category=3">Cameras</a>
            {/*
          <ul className="sub-menu">
            <li><a href="shop.html">Shop</a></li>
            <li><a href="shop-details.html">Shop Details</a></li>
            <li><a href="cart.html">Cart Page</a></li>
            <li><a href="checkout.html">Checkout</a></li>
            <li><a href="wishlist.html">Wishlist</a></li>
          </ul>*/
            }
          </li>
          <li className="">
            <a href="/items?category=2">Coffre Fort</a>
            {/*
          <ul className="sub-menu">
            <li><a href="career.html">Career</a></li>
            <li><a href="career-details.html">Career Details</a></li>
          </ul>
          */}
          </li>
          <li><a href="/items?category=1">Baby Security</a></li>
          <li><a href="/items?category=4">Detecteur d&apos;Intrusion</a></li>
        </ul>

      </li>
      <li className="menu-item-has-children">
        <a href="#">Nos Services</a>
        <ul className="sub-menu">
          <li><a href="/services/installation">Installation</a></li>
          <li><a href="/services/maintenance">Maintenance</a></li>
        </ul>
      </li>
      <li className="menu-item-has-children" style={{position: 'relative'}}>
        {
          cart.length > 0
          &&
          <div style={{position: 'absolute', width: '20px', height: '20px', borderRadius: '100%', bottom: '-50%', zIndex:99, right: '40%',  background: '#3e66f3', textAlign: 'center' }}>
            <span style={{ textAlign: 'center', color: 'white' }}>{ cart.length }</span>
          </div>
        }
        <a href="#">Cart</a>
        <ul className="sub-menu">
          <li><a href="/checkout">Wishlist</a></li>
          <li><a href="/cart">Panier ( { cart.length } )</a></li>
        </ul>
      </li>
      <li className="menu-item-has-children">
        <a href="#">Extra</a>
        <ul className="sub-menu">
          <li><a href="/about">À propos de nous</a></li>
          <li><a href="/contact">Prenez rendez-vous</a></li>
        </ul>
      </li>
    </ul>
  )
}