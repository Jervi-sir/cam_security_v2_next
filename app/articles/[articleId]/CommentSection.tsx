export const CommentSection = () => {
  return (
    <>
      <div className="th-comments-wrap ">
        <h2 className="blog-inner-title h4"> Comments (03)</h2>
        <ul className="comment-list">
          <li className="th-comment-item">
            <div className="th-post-comment">
              <div className="comment-avater">
                <img src="/assets/img/blog/comment-author-1.jpg" alt="Comment Author" />
              </div>
              <div className="comment-content">
                <div className="">
                  <span className="commented-on">15 Jun, 2024</span>
                  <h3 className="name">Daniel Adam</h3>
                </div>
                <p className="text">Empower multifunctional e-commerce for prospective applications. Seamlessly productivate plug-and-play markets whereas synergistic scenarios.</p>
                <div className="reply_and_edit">
                  <a href="blog-details.html" className="reply-btn">Reply<i className="fa-sharp fa-light fa-reply"></i></a>
                </div>
              </div>
            </div>
            <ul className="children">
              <li className="th-comment-item">
                <div className="th-post-comment">
                  <div className="comment-avater">
                    <img src="/assets/img/blog/comment-author-2.jpg" alt="Comment Author" />
                  </div>
                  <div className="comment-content">
                    <div className="">
                      <span className="commented-on">20 Jun, 2024</span>
                      <h3 className="name">Zenelia Lozhe</h3>
                    </div>
                    <p className="text">Empower multifunctional e-commerce for prospective applications. Seamlessly productivate plug-and-play markets</p>
                    <div className="reply_and_edit">
                      <a href="blog-details.html" className="reply-btn">Reply<i className="fa-sharp fa-light fa-reply"></i></a>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </li>
          <li className="th-comment-item">
            <div className="th-post-comment">
              <div className="comment-avater">
                <img src="/assets/img/blog/comment-author-3.jpg" alt="Comment Author" />
              </div>
              <div className="comment-content">
                <div className="">
                  <span className="commented-on">25 Jun, 2024</span>
                  <h3 className="name">Jhon Smith</h3>
                </div>
                <p className="text">Empower multifunctional e-commerce for prospective applications. Seamlessly productivate plug-and-play markets whereas synergistic scenarios.</p>
                <div className="reply_and_edit">
                  <a href="blog-details.html" className="reply-btn">Reply<i className="fa-sharp fa-light fa-reply"></i></a>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div className="th-comment-form ">
        <div className="row">
          <h3 className="blog-inner-title h4 mb-4">Leave a Reply</h3>
          <div className="col-md-6 form-group">
            <input type="text" placeholder="Your Name*" className="form-control" />
            <i className="far fa-user"></i>
          </div>
          <div className="col-md-6 form-group">
            <input type="text" placeholder="Your Email*" className="form-control" />
            <i className="far fa-envelope"></i>
          </div>
          <div className="col-12 form-group">
            <input type="text" placeholder="Website" className="form-control" />
            <i className="far fa-globe"></i>
          </div>
          <div className="col-12 form-group">
            <textarea placeholder="Write a Comment*" className="form-control"></textarea>
            <i className="far fa-pencil"></i>
          </div>
          <div className="col-12 form-group mb-0">
            <button className="th-btn btn-fw">Submit Comment</button>
          </div>
        </div>
      </div>

    </>
  )
}