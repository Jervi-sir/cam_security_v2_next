export function Footer() {
  return (
    <footer className="footer-wrapper footer-layout1" data-bg-src="assets/img/bg/footer_bg_1.jpg">
        <div className="widget-area">
            <div className="container">
                <div className="row justify-content-between">
                    <div className="col-xl-12">
                        <div className="footer-top-area">
                            <div className="footer-top">
                                <div className="footer-logo">
                                    <a href="index.html"><img src="assets/img/logo-footer.svg" alt="Webtek" /></a>
                                </div>
                                <div className="">
                                    <p className="footer-text">Their team's technical expertise is truly outstanding. They took
                                        the time to thoroughly understand our goals and requirements and then designed and
                                        implemented solutions that not only addressed our immediate challenges but also
                                        positioned us for future growth.</p>
                                </div>
                            </div>
                            <div className="footer-menu-area">
                                <ul className="footer-menu">
                                    <li>
                                        <a href="index.html">Home</a>
                                    </li>
                                    <li><a href="#">Pages</a></li>
                                    <li><a href="service.html">Services</a></li>
                                    <li><a href="blog.html">Blog</a></li>
                                    <li><a href="contact.html">Contact</a></li>
                                </ul>
                                <div className="th-social">
                                    <a href="https://www.facebook.com/"><i className="fab fa-facebook-f"></i></a>
                                    <a href="https://www.twitter.com/"><i className="fab fa-twitter"></i></a>
                                    <a href="https://www.linkedin.com/"><i className="fab fa-linkedin-in"></i></a>
                                    <a href="https://www.whatsapp.com/"><i className="fab fa-whatsapp"></i></a>
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
                                <p className="info-box_text">12 Division Park, SKY <span className="d-block"> 12546. Berlin</span></p>
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
                                    <a href="mailto:help@webteck-mail.com" className="info-box_link">help@webteck-mail.com</a>
                                    <a href="mailto:24/7@webteck-online.com" className="info-box_link">24/7@webteck-online.com</a>
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
                                    <a href="tel:+215253632156" className="info-box_link">+(215) 2536-32156</a>
                                    <a href="tel:+452369421587" className="info-box_link">+(452) 3694-21587</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="copyright-wrap text-center">
            <div className="container">
                <p className="copyright-text">Copyright <i className="fal fa-copyright"></i> 2024 <a href="home-web-agency.html">Webtek</a>. All Rights Reserved.</p>
            </div>
        </div>
    </footer>
  )
}