import { useState } from "react";

export const BodyPart = () => {
  const [activeTab, setActiveTab] = useState('description');

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <>
      <ul className="nav product-tab-style2" id="productTab" role="tablist">
        <li className="nav-item" role="presentation">
          <a
            className={`nav-link ${activeTab === 'description' ? 'active' : ''}`}
            onClick={() => handleTabClick('description')}
            style={{cursor: 'pointer'}}
          >
            Description
          </a>
        </li>
        <li className="nav-item" role="presentation">
          <a
            className={`nav-link ${activeTab === 'additional' ? 'active' : ''}`}
            onClick={() => handleTabClick('additional')}
            style={{cursor: 'pointer'}}
          >
            Additional Information
          </a>
        </li>
        <li className="nav-item" role="presentation">
          <a
            className={`nav-link ${activeTab === 'reviews' ? 'active' : ''}`}
            onClick={() => handleTabClick('reviews')}
            style={{cursor: 'pointer'}}
          >
            Customer Reviews
          </a>
        </li>
      </ul>
      <div className="tab-content" >
        <div className={`tab-pane fade ${activeTab === 'description' ? 'show active' : ''}`} id="description" role="tabpanel">
          <p>Credibly negotiate emerging materials whereas clicks-and-mortar intellectual capital. Compellingly
            whiteboard client-centric sources before cross-platform schemas. Distinctively develop future-proof
            outsourcing without multimedia based portals. Progressively coordinate next-generation architectures
            for collaborative solutions. Professionally restore backward-compatible quality vectors before
            customer directed metrics. Holisticly restore technically sound internal or &quot;organic&quot; sources before
            client-centered human capital underwhelm holistic mindshare for prospective innovation. Seamlessly
            target fully tested infrastructures whereas just in time process improvements. Dynamically exploit
            team driven functionalities vis a vis global total linkage redibly synthesize just in time
            technology rather than open-source strategic theme areas.</p>
        </div>
        <div className={`tab-pane fade ${activeTab === 'additional' ? 'show active' : ''}`} id="additional" role="tabpanel">
          <p>Conveniently build adaptive users with front-end human capital. Appropriately unleash team building
            technology for goal-oriented paradigms. Dynamically generate interoperable e-business
            vis-a-visgoal-oriented value. Completely pursue fully tested content whereas multifunctional core
            competencies. Progressively scale team driven process improvements before premier functionalities.
            Holisticly cultivate intermandated methodologies rather than virtual technology. Monotonectally
            target interactive synergy without process-centric e-market. Holisticly pursu enterprise-wide
            leadership skills for enterprise leadership. Collaboratively underwhelm standardized expertise after
            effective bandwidth. Conveniently productivate holistic collaboration and idea-sharing rather than
            granular strategic theme areas.

            Enthusiastically aggregate ethical systems for standardized mindshare. Energistically target
            resource maximizing leadership skills without backward-compatible action items. Credibly impact
            alternative expertise vis-a-vis economically sound results. Dynamically synergize empowered benefits
            through functional partnerships. Authoritatively empower prospective infomediaries for interactive
            content. Synergistically embrace 2.0 paradigms through professional intellectual capital.
            Interactively strategize parallel growth strategies without out-of-the-box web services. Assertively
            reinvent installed base.</p>
        </div>
        <div className={`tab-pane fade ${activeTab === 'reviews' ? 'show active' : ''}`} id="reviews" role="tabpanel">
          <div className="woocommerce-Reviews">
            <div className="th-comments-wrap ">
              <ul className="comment-list">
                <li className="review th-comment-item">
                  <div className="th-post-comment">
                    <div className="comment-avater">
                      <img src="/assets/img/blog/comment-author-1.jpg" alt="Comment Author" />
                    </div>
                    <div className="comment-content">
                      <h4 className="name">Adam Jhon</h4>
                      <span className="commented-on"><i className="far fa-calendar"></i>22 April, 2023</span>
                      <div className="star-rating" role="img" aria-label="Rated 5.00 out of 5">
                        <span style={{ width: '100%' }}>Rated <strong className="rating">5.00</strong> out of 5 based on <span className="rating">1</span> customer rating</span>
                      </div>
                      <p className="text">This product is very much qualityful and I love this working system and speed.</p>
                    </div>
                  </div>
                </li>
                <li className="review th-comment-item">
                  <div className="th-post-comment">
                    <div className="comment-avater">
                      <img src="/assets/img/blog/comment-author-2.jpg" alt="Comment Author" />
                    </div>
                    <div className="comment-content">
                      <h4 className="name">Jusctin Dacon</h4>
                      <span className="commented-on"><i className="far fa-calendar"></i>26 April, 2023</span>
                      <div className="star-rating" role="img" aria-label="Rated 5.00 out of 5">
                        <span style={{ width: '100%' }}>Rated <strong className="rating">5.00</strong> out of 5 based on <span className="rating">1</span> customer rating</span>
                      </div>
                      <p className="text">They delivered the product in a few time. Product quality is also very good.</p>
                    </div>
                  </div>
                </li>
                <li className="review th-comment-item">
                  <div className="th-post-comment">
                    <div className="comment-avater">
                      <img src="/assets/img/blog/comment-author-3.jpg" alt="Comment Author" />
                    </div>
                    <div className="comment-content">
                      <h4 className="name">Jacklin July</h4>
                      <span className="commented-on"><i className="far fa-calendar"></i>26 April, 2023</span>
                      <div className="star-rating" role="img" aria-label="Rated 5.00 out of 5">
                        <span style={{ width: '100%' }}>Rated <strong className="rating">5.00</strong> out of 5 based on <span className="rating">1</span> customer rating</span>
                      </div>
                      <p className="text">Their product and service is very satisfying. I highly recommend their services.</p>
                    </div>
                  </div>
                </li>
                <li className="review th-comment-item">
                  <div className="th-post-comment">
                    <div className="comment-avater">
                      <img src="/assets/img/blog/comment-author-4.jpg" alt="Comment Author" />
                    </div>
                    <div className="comment-content">
                      <h4 className="name">Adison Smith</h4>
                      <span className="commented-on"><i className="far fa-calendar"></i>26 April, 2023</span>
                      <div className="star-rating" role="img" aria-label="Rated 5.00 out of 5">
                        <span style={{ width: '100%' }}>Rated <strong className="rating">5.00</strong> out of 5 based on <span className="rating">1</span> customer rating</span>
                      </div>
                      <p className="text">I am just in love with this product. Their service is also very good you can also try.</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="th-comment-form ">
              <div className="form-title">
                <h3 className="blog-inner-title ">Add a review</h3>
              </div>
              <div className="row">
                <div className="form-group rating-select d-flex align-items-center">
                  <label>Your Rating</label>
                  <p className="stars">
                    <span>
                      <a className="star-1" href="#">1</a>
                      <a className="star-2" href="#">2</a>
                      <a className="star-3" href="#">3</a>
                      <a className="star-4" href="#">4</a>
                      <a className="star-5" href="#">5</a>
                    </span>
                  </p>
                </div>
                <div className="col-12 form-group">
                  <textarea placeholder="Write a Message" className="form-control"></textarea>
                  <i className="text-title far fa-pencil-alt"></i>
                </div>
                <div className="col-md-6 form-group">
                  <input type="text" placeholder="Your Name" className="form-control" />
                  <i className="text-title far fa-user"></i>
                </div>
                <div className="col-md-6 form-group">
                  <input type="text" placeholder="Your Email" className="form-control" />
                  <i className="text-title far fa-envelope"></i>
                </div>
                <div className="col-12 form-group">
                  <input id="reviewcheck" name="reviewcheck" type="checkbox" />
                  <label >Save my name, email, and website in this browser for the next time I comment.<span className="checkmark"></span></label>
                </div>
                <div className="col-12 form-group mb-0">
                  <button className="th-btn">Post Review</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}