export const BlogSection = () => {
  return (
    <>
      <section className="overflow-hidden space-bottom" id="blog-sec">
        <div className="container">
          <div className="title-area text-center">
            <span className="sub-title">News & Article</span>
            <h2 className="sec-title">Latest news and updates</h2>
          </div>
          <div className="slider-area">
            <div className="swiper th-slider has-shadow" id="blogSlider1" data-slider-options='{"breakpoints":{"0":{"slidesPerView":1},"576":{"slidesPerView":"1"},"768":{"slidesPerView":"2"},"992":{"slidesPerView":"2"},"1200":{"slidesPerView":"3"}}}'>
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="blog-box th-ani">
                    <div className="blog-img">
                      <img src="assets/img/blog/blog_2_1.jpg" alt="blog image" />
                    </div>
                    <div className="blog-box_content">
                      <div className="blog-meta">
                        <a href="blog.html"><i className="far fa-calendar"></i>25 Feb , 2024</a>
                        <a className="author" href="blog.html"><i className="far fa-user"></i>By Webtek</a>
                      </div>
                      <h3 className="box-title"><a href="blog-details.html">Developers within IT teams are responsible for creating and deploying software</a></h3>
                      <a href="blog-details.html" className="line-btn">Read Details<i className="fa-solid fa-angles-right"></i></a>
                    </div>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="blog-box th-ani">
                    <div className="blog-img">
                      <img src="assets/img/blog/blog_2_2.jpg" alt="blog image" />
                    </div>
                    <div className="blog-box_content">
                      <div className="blog-meta">
                        <a href="blog.html"><i className="far fa-calendar"></i>25 Feb , 2024</a>
                        <a className="author" href="blog.html"><i className="far fa-user"></i>By Webtek</a>
                      </div>
                      <h3 className="box-title"><a href="blog-details.html">Implementing Strategic IT Solutions for the Seamless Integration enhanced Security</a></h3>
                      <a href="blog-details.html" className="line-btn">Read Details<i className="fa-solid fa-angles-right"></i></a>
                    </div>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="blog-box th-ani">
                    <div className="blog-img">
                      <img src="assets/img/blog/blog_2_3.jpg" alt="blog image" />
                    </div>
                    <div className="blog-box_content">
                      <div className="blog-meta">
                        <a href="blog.html"><i className="far fa-calendar"></i>25 Feb , 2024</a>
                        <a className="author" href="blog.html"><i className="far fa-user"></i>By Webtek</a>
                      </div>
                      <h3 className="box-title"><a href="blog-details.html">Developers within IT teams are responsible for creating and deploying software</a></h3>
                      <a href="blog-details.html" className="line-btn">Read Details<i className="fa-solid fa-angles-right"></i></a>
                    </div>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="blog-box th-ani">
                    <div className="blog-img">
                      <img src="assets/img/blog/blog_2_1.jpg" alt="blog image" />
                    </div>
                    <div className="blog-box_content">
                      <div className="blog-meta">
                        <a href="blog.html"><i className="far fa-calendar"></i>25 Feb , 2024</a>
                        <a className="author" href="blog.html"><i className="far fa-user"></i>By Webtek</a>
                      </div>
                      <h3 className="box-title"><a href="blog-details.html">Embracing Next-Generation IT Solutions to Propel Businesses into a New Era of Efficiency.</a></h3>
                      <a href="blog-details.html" className="line-btn">Read Details<i className="fa-solid fa-angles-right"></i></a>
                    </div>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="blog-box th-ani">
                    <div className="blog-img">
                      <img src="assets/img/blog/blog_2_2.jpg" alt="blog image" />
                    </div>
                    <div className="blog-box_content">
                      <div className="blog-meta">
                        <a href="blog.html"><i className="far fa-calendar"></i>25 Feb , 2024</a>
                        <a className="author" href="blog.html"><i className="far fa-user"></i>By Webtek</a>
                      </div>
                      <h3 className="box-title"><a href="blog-details.html">Developers within IT teams are responsible for creating and deploying software</a></h3>
                      <a href="blog-details.html" className="line-btn">Read Details<i className="fa-solid fa-angles-right"></i></a>
                    </div>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="blog-box th-ani">
                    <div className="blog-img">
                      <img src="assets/img/blog/blog_2_3.jpg" alt="blog image" />
                    </div>
                    <div className="blog-box_content">
                      <div className="blog-meta">
                        <a href="blog.html"><i className="far fa-calendar"></i>25 Feb , 2024</a>
                        <a className="author" href="blog.html"><i className="far fa-user"></i>By Webtek</a>
                      </div>
                      <h3 className="box-title"><a href="blog-details.html">Implementing Strategic IT Solutions for the Seamless Integration enhanced Security</a></h3>
                      <a href="blog-details.html" className="line-btn">Read Details<i className="fa-solid fa-angles-right"></i></a>
                    </div>
                  </div>
                </div>

              </div>
            </div>
            <button data-slider-prev="#blogSlider1" className="slider-arrow slider-prev"><i className="far fa-arrow-left"></i></button>
            <button data-slider-next="#blogSlider1" className="slider-arrow slider-next"><i className="far fa-arrow-right"></i></button>
          </div>
        </div>
      </section>
    </>
  )
}