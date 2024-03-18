import { Settings } from "@/utils/db"

export const TestimonialSection = () => {
  return (
    <>
      <section className="overflow-hidden bg-top-center th-radius3 m-4 mt-0 mb-0 space" id="testi-sec" data-bg-src="assets/img/bg/testimonial_bg_1.jpg">
        <div className="container th-container2">
          <div className="row justify-content-lg-between justify-content-center align-items-end">
            <div className="col-xxl-4 col-xl-6">
              <div className="title-area text-center text-lg-start">
                <span className="sub-title style1 text-white">Customer Feedbacks</span>
                <h2 className="sec-title text-white">See what our clients have to say</h2>
              </div>
            </div>
            <div className="col-lg-auto d-none d-xl-block">
              <div className="sec-btn">
                <div className="icon-box">
                  <button data-slider-prev="#testiSlider2" className="slider-arrow style2 default"><i className="far fa-arrow-left"></i></button>
                  <button data-slider-next="#testiSlider2" className="slider-arrow style2 default"><i className="far fa-arrow-right"></i></button>
                </div>
              </div>
            </div>
          </div>
          <div className="slider-area">
            <div className="swiper th-slider has-shadow" id="testiSlider2" data-slider-options='{"breakpoints":{"0":{"slidesPerView":1},"576":{"slidesPerView":"1"},"768":{"slidesPerView":"2"},"992":{"slidesPerView":"2"},"1200":{"slidesPerView":"3"}}}'>
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="testi-box th-ani">
                    <div className="testi-box_image">
                      <img src="assets/img/testimonial/testi_img_1.png" alt="image" />
                    </div>
                    <p className="testi-box_text">“Lectus volpat faucibus placerat eget nulla sodales aliquam molestie ante, himenaeos fames suscipit arcu cras cenas penatibus vivamus, aenean primis enim”</p>
                    <div className="testi-box_wrapper">
                      <div className="testi-box_profile">
                        <div className="testi-box_author">
                          <img src="assets/img/testimonial/testi_2_1.png" alt="Avater" />
                        </div>
                        <div className="testi-box_info">
                          <h3 className="box-title">Andrew D. Smith</h3>
                          <span className="testi-box_desig">Manager</span>
                        </div>
                      </div>
                      <div className="testi-quote">
                        <img src="assets/img/icon/quote.svg" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="testi-box th-ani">
                    <div className="testi-box_image">
                      <img src="assets/img/testimonial/testi_img_1.png" alt="image" />
                    </div>
                    <p className="testi-box_text">“Objectively visualize error-free technology for B2B alignment. Monotonectally harness an expanded array of models via effective collaboration in the success.”</p>
                    <div className="testi-box_wrapper">
                      <div className="testi-box_profile">
                        <div className="testi-box_author">
                          <img src="assets/img/testimonial/testi_2_2.png" alt="Avater" />
                        </div>
                        <div className="testi-box_info">
                          <h3 className="box-title">Brooklyn Simmons</h3>
                          <span className="testi-box_desig">CTO of Portfolio</span>
                        </div>
                      </div>
                      <div className="testi-quote">
                        <img src="assets/img/icon/quote.svg" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="testi-box th-ani">
                    <div className="testi-box_image">
                      <img src="assets/img/testimonial/testi_img_1.png" alt="image" />
                    </div>
                    <p className="testi-box_text">“Completely drive innovative value whereas out-of-the-box paradigms. Interactively pursue stand-alone markets after global say that they results..”</p>
                    <div className="testi-box_wrapper">
                      <div className="testi-box_profile">
                        <div className="testi-box_author">
                          <img src="assets/img/testimonial/testi_2_3.png" alt="Avater" />
                        </div>
                        <div className="testi-box_info">
                          <h3 className="box-title">Savannah Nguyen</h3>
                          <span className="testi-box_desig">CEO at Rimasu</span>
                        </div>
                      </div>
                      <div className="testi-quote">
                        <img src="assets/img/icon/quote.svg" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="testi-box th-ani">
                    <div className="testi-box_image">
                      <img src="assets/img/testimonial/testi_img_1.png" alt="image" />
                    </div>
                    <p className="testi-box_text">“The best service reinvent prospective metrics before granular schema. Professionally metrics before expedite client-centric or analyzing before expedite methods ”</p>
                    <div className="testi-box_wrapper">
                      <div className="testi-box_profile">
                        <div className="testi-box_author">
                          <img src="assets/img/testimonial/testi_2_4.png" alt="Avater" />
                        </div>
                        <div className="testi-box_info">
                          <h3 className="box-title">Cameron Williamson</h3>
                          <span className="testi-box_desig">Founder CEO</span>
                        </div>
                      </div>
                      <div className="testi-quote">
                        <img src="assets/img/icon/quote.svg" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="testi-box th-ani">
                    <div className="testi-box_image">
                      <img src="assets/img/testimonial/testi_img_1.png" alt="image" />
                    </div>
                    <p className="testi-box_text">“I&apos;ve had the pleasure of working with { Settings.site_name } for the past year, and I can confidently say that they have been instrumental say that they in the success.”</p>
                    <div className="testi-box_wrapper">
                      <div className="testi-box_profile">
                        <div className="testi-box_author">
                          <img src="assets/img/testimonial/testi_2_2.png" alt="Avater" />
                        </div>
                        <div className="testi-box_info">
                          <h3 className="box-title">Brooklyn Simmons</h3>
                          <span className="testi-box_desig">Project Manager</span>
                        </div>
                      </div>
                      <div className="testi-quote">
                        <img src="assets/img/icon/quote.svg" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="testi-box th-ani">
                    <div className="testi-box_image">
                      <img src="assets/img/testimonial/testi_img_1.png" alt="image" />
                    </div>
                    <p className="testi-box_text">“Phosfluorescently reinvent prospective metrics before granular schema. Professionally metrics before expedite client-centric before expedite methods .”</p>
                    <div className="testi-box_wrapper">
                      <div className="testi-box_profile">
                        <div className="testi-box_author">
                          <img src="assets/img/testimonial/testi_2_3.png" alt="Avater" />
                        </div>
                        <div className="testi-box_info">
                          <h3 className="box-title">Savannah Nguyen</h3>
                          <span className="testi-box_desig">Head Manager</span>
                        </div>
                      </div>
                      <div className="testi-quote">
                        <img src="assets/img/icon/quote.svg" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="testi-box th-ani">
                    <div className="testi-box_image">
                      <img src="assets/img/testimonial/testi_img_1.png" alt="image" />
                    </div>
                    <p className="testi-box_text">“If you have specific questions about gathering or analyzing customer feedback, or if you&apos;re looking for general information or analyzing feel free to ask.”</p>
                    <div className="testi-box_wrapper">
                      <div className="testi-box_profile">
                        <div className="testi-box_author">
                          <img src="assets/img/testimonial/testi_2_1.png" alt="Avater" />
                        </div>
                        <div className="testi-box_info">
                          <h3 className="box-title">Cameron Williamson</h3>
                          <span className="testi-box_desig">UI/UX Designer</span>
                        </div>
                      </div>
                      <div className="testi-quote">
                        <img src="assets/img/icon/quote.svg" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}