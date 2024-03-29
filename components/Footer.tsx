import { Settings } from "@/utils/db";

export function Footer() {
  return (
    <footer className="footer-wrapper footer-layout1" data-bg-src="/assets/img/bg/footer_bg_1.jpg">
        <div className="widget-area">
            <div className="container">
                <div className="row justify-content-between">
                    <div className="col-xl-12">
                        <div className="footer-top-area">
                            <div className="footer-top">
                                <div className="footer-logo">
                                    <a href="index.html"><img src={ Settings.footer_logo_url } alt={ Settings.site_name } /></a>
                                </div>
                                <div className="">
                                    <p className="footer-text">{Settings.description}</p>
                                </div>
                            </div>
                            <div className="footer-menu-area">
                                <ul className="footer-menu">
                                    <li>
                                        <a href="/">Home</a>
                                    </li>
                                    <li><a href="/items">Products</a></li>
                                    <li><a href="/services">Services</a></li>
                                    <li><a href="/contact">Contact</a></li>
                                </ul>
                                <div className="th-social">
                                    <a href={Settings.facebook}><i className="fab fa-facebook-f"></i></a>
                                    <a href={Settings.twitter}><i className="fab fa-twitter"></i></a>
                                    <a href={Settings.linkedin}><i className="fab fa-linkedin-in"></i></a>
                                    <a href={Settings.whatsapp}><i className="fab fa-whatsapp"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row gy-4 justify-content-center justify-content-lg-between">
                    <div className="col-lg-auto">
                        <div className="info-box">
                            <div className="info-box_icon">
                                <i className="fa-solid fa-location-dot"></i>
                            </div>
                            <div>
                                <span className="info-box_subtitle">Address</span>
                                <p className="info-box_text">{Settings.full_location}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-auto">
                        <div className="info-box">
                            <div className="info-box_icon">
                                <i className="fa-solid fa-envelope"></i>
                            </div>
                            <div>
                                <span className="info-box_subtitle">Email</span>
                                <p className="info-box_text">
                                    <a href={`mailto:${Settings.email}`} className="info-box_link">{Settings.email}</a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-auto">
                        <div className="info-box">
                            <div className="info-box_icon">
                                <i className="fa-solid fa-phone"></i>
                            </div>
                            <div>
                                <span className="info-box_subtitle">Call</span>
                                <p className="info-box_text">
                                    <a href="tel:+215253632156" className="info-box_link">{Settings.phone_number}</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="copyright-wrap text-center">
            <div className="container">
                <p className="copyright-text">Copyright <i className="fal fa-copyright"></i> { new Date().getFullYear() } <a >{ Settings.site_name }</a>. All Rights Reserved.</p>
            </div>
        </div>
    </footer>
  )
}