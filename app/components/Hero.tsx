export function Hero() {
  return (
    <>
      <div className="th-hero-wrapper hero-2 " id="hero" data-bg-src="assets/img/bg/hero_bg_1.jpg">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="hero-style2" style={{paddingTop: '40%'}}>
                <h2 className="hero-title"> Security doesn’t have to be complicated<span className="title"></span>
                </h2>
                <p className="hero-text">Our expert will help you find the best</p>
                <div className="btn-group  justify-content-center justify-content-lg-start">
                  <a href="service.html" className="th-btn style4">View Services</a>
                  <a href="contact.html" className="th-btn">Make a Reservation</a>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="hero-style2" style={{paddingTop: '40%'}}>
                <iframe width="560" height="400" src="https://www.youtube.com/embed/maiITcbdmj4?si=3QZUZEdxHazcsjCH" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
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
    </>
  )
}