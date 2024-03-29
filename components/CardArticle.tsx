import { formateDate } from "@/utils/helpers"
import { Article } from "@/utils/types"

export const CardArticle = ({ article }: {article: Article}) => {
  return (
    <div className="blog-box th-ani" style={{ marginLeft: '15px', marginRight: '15px' }}>
      <div className="blog-img" style={{height: '200px'}}>
        <img src={ article.images[0] } alt="blog image" style={{height: '180px'}} />
      </div>
      <div className="blog-box_content">
        <div className="blog-meta">
          <a href="blog.html"><i className="far fa-calendar"></i>{ formateDate(article.published_date)  }</a>
        </div>
        <a href={`/articles/${article.id}`}><h5 className="box-title" style={{fontSize: '18px'}}>{ article.title }</h5></a>
        <a href={`/articles/${article.id}`} className="line-btn">Read Details<i className="fa-solid fa-angles-right"></i></a>
      </div>
    </div>
  )
}