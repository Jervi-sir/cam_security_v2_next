export const AboutSection = () => {
  return (
    <>
      <div className="about-area4  bg-white overflow-hidden space" id="about-sec">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6">
              <div className="img-box1">
                <div className="img1 th-anim global-img">
                  <img src="/assets/img/normal/about_1.jpg" alt="About" />
                </div>
                <div className="img2 th-anim global-img jump">
                  <img src="/assets/img/normal/about_2.jpg" alt="About" />
                </div>
                <div className="about-shape"></div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="about-content-area ps-xl-4 ms-xl-2">
                <div className="title-area mb-35">
                  <span className="sub-title">More About Us</span>
                  <h2 className="sec-title">Make it easy to do your business with us and we are best</h2>
                  <p className="">Digital agency companies cater to businesses of all sizes and industries, from
                    startups and small businesses to large enterprises. The objective is to help clients
                    leverage the power of the internet.</p>
                </div>
                <div className="about-counter-wrapper">
                  <div className="th-experience style2">
                    <div className="th-experience_content">
                      <h2 className="experience-year"><span className="counter-number">25</span>+</h2>
                      <p className="experience-text">Years Experience</p>
                    </div>
                  </div>

                  <div className="checklist">
                    <ul>
                      <li>Eamlessly conceptualize go forward total linkage</li>
                      <li>Whiteboard multifuional applications rather than</li>
                      <li> Applications rather than lived reliable functionale</li>
                      <li>Leverage other quality ideas synestic outsourcing</li>
                    </ul>
                  </div>
                </div>
                <div className="btn-group mt-40 justify-content-start">
                  <a href="about.html" className="th-btn">Get Started Now</a>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}