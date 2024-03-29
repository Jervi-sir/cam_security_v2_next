import { Settings } from "@/utils/db"

export const Aside = () => {
  return (
    <aside className="sidebar-area" style={{position: 'sticky', top: '5rem'}}>
      <div className="widget widget_call  ">
        <div className="widget-call">
          <h4 className="box-title text-white">Besoin d'aide ?</h4>
          <p className="text-white">Pour le support et les demandes de CCTV, appelez-nous 24/7</p>
          <div className="widget_call">

            <div className="info-box">
              <div className="info-box_icon">
                <i className="fas fa-phone"></i>
              </div>
              <div>
                <span className="info-box_subtitle"> Appelez-nous</span>
                <p className="info-box_text">
                  <a href="tel:+2869852156" className="info-box_link">{Settings.phone_number}</a>
                </p>
              </div>
            </div>
            <div className="info-box">
              <div className="info-box_icon">
                <i className="fas fa-envelope"></i>
              </div>
              <div>
                <span className="info-box_subtitle">Écrivez-nous</span>
                <p className="info-box_text">
                  <a href="mailto:info@securityservice.com" className="info-box_link">{Settings.email}</a>
                </p>
              </div>
            </div>

            <div className="info-box">
              <div className="info-box_icon">
                <i className="fa-regular fa-location-dot"></i>
              </div>
              <div>
                <span className="info-box_subtitle">Adresse du bureau</span>
                <p className="info-box_text">{Settings.full_location}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  )
}