export const CardArticle = ({ article }) => {
  return (
    <div className="blog-box th-ani" style={{ marginLeft: '15px', marginRight: '15px' }}>
      <div className="blog-img">
        <img src="/assets/img/blog/blog_2_1.jpg" alt="blog image" />
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
  )
}