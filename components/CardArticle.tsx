import { formateDate } from "@/utils/helpers"
import { Article } from "@/utils/types"

export const CardArticle = ({ article }: {article: Article}) => {
  return (
    <div className="blog-box th-ani" style={{ marginLeft: '15px', marginRight: '15px' }}>
      <div className="blog-img">
        <img src={ article.image_url[0] } alt="blog image" />
      </div>
      <div className="blog-box_content">
        <div className="blog-meta">
          <a href="blog.html"><i className="far fa-calendar"></i>{ formateDate(article.published_date)  }</a>
        </div>
        <h3 className="box-title"><a href="blog-details.html">{ article.title }</a></h3>
        <a href={`/articles/` + article.id } className="line-btn">Read Details<i className="fa-solid fa-angles-right"></i></a>
      </div>
    </div>
  )
}