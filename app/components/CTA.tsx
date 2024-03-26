'use client'
import { usePopup } from "@/context/PopupContext";
import { Settings } from "@/utils/db"

export const CTA = () => {
  const { togglePopup } = usePopup();

  return (
    <section className="appointment-sec space-extra3 th-radius overflow-hidden space-top space-bottom">
      <div className="container">
        <div className="cta-area bg-white">
          <div className="cta-feature_wrapper">
            <div className="cta-feature_img">
              <img src="/assets/illustrations/cctv_thief2.svg" alt="" style={{width: '30rem'}} />
            </div>
            <div className="cta-title-area">
              <div className="title-area mb-45 text-center">
                <span className="sub-title"> Qu&apos;est-ce qui te Retient !</span>
                <h3 className="sec-title">Nous Offrons des services adéquate à vos besoin de sécurité</h3>
              </div>
              <div className="feature-area2 d-flex flex-column">
                <div className="d-flex gap-3 flex-column flex-xl-row">
                  <a href="/items" className="th-btn style4">Trouver des Produits</a>
                  <button className="th-btn" onClick={togglePopup}>Faire une Estimation</button>
                </div>
                <div className="feature-wrapper style2">
                  <div className="feature-icon">
                    <a href="tel:+2583258235"><i className="fa-solid fa-phone"></i></a>
                  </div>
                  <div className="media-body">
                    <p className="header-info_link"><a href={`tel:${Settings.phone_number}`}>Applez Nous: {Settings.phone_number}</a></p>
                    <span className="header-info_label">Pour plus d&apos;information</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="cta-feature_img" style={{width: '30rem'}}>
              <img src="/assets/illustrations/cctv_thief1.svg" alt="" style={{width: '15rem'}} />
            </div>
          </div>
          <div className="swiper th-slider brand-slider pt-5 mt-3" >
            <div className="brand-card wow ">
              <a>
                <img className="original" src={Settings.logo_url2} alt="Brand Logo" />
                <img className="gray" src={Settings.logo_url2} alt="Brand Logo" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}