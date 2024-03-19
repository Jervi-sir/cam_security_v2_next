'use client'
import { Fade } from 'react-awesome-reveal';
import styles from './Hero.module.css';
import { Settings } from '@/utils/db';
import { useState } from 'react';
import Estimation from '../estimation/page';
import '../Estimation.css'

import { usePopup } from '@/context/PopupContext';
export function Hero() {
  const { togglePopup } = usePopup();

  return (
    <Fade cascade damping={0.1} triggerOnce>
      <div className="th-hero-wrapper hero-2 " id="hero" data-bg-src="assets/img/bg/hero_bg_1.jpg">
        <div className="container">
          <div className={`row align-items-center ${styles.heroMargins}`}>
            <div className="col-lg-6">
              <div className={`hero-style2 ${styles.leftSide}`}>
                <h2 className="hero-title"> Security doesn’t have to be complicated<span className="title"></span>
                </h2>
                <p className="hero-text">Our expert will help you find the best</p>
                <div className="btn-group  justify-content-center justify-content-lg-start">
                  <a href="service.html" className="th-btn style4">View Services</a>
                  <button className="th-btn" onClick={togglePopup} >Make an Estimation</button>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="hero-style2" style={{height: 400, borderRadius: '1em', overflow: 'hidden'}}>
                <iframe width="560" height="400" src={Settings.youtube_url} title={Settings.site_name} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
              </div>
            </div>
          </div>
        </div>
        <div className="ripple-shape">
          <span className="ripple-1"></span>
          <span className="ripple-2"></span>
          <span className="ripple-3"></span>
          <span className="ripple-4"></span>
          <span className="ripple-5"></span>
        </div>
        <div className="th-circle">
          <span className="circle style1"></span>
          <span className="circle style2"></span>
          <span className="circle style3"></span>
        </div>
      </div>
    </Fade>
  )
}