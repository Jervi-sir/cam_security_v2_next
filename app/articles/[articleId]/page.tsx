'use client'
import { useContext, useEffect, useState } from "react";
import { useParams } from 'next/navigation'
import { Article } from "@/utils/types";
import { getThisArticle } from "@/utils/supabase";
import { CommentSection } from "./CommentSection";
import { SuggestedArticleSection } from "./SuggestedArticleSection";
import { LatestPosts } from "./LatestPosts";
import { PopularTags } from "./PopularTags";
import { Categories } from "./Categories";
import { formateDate } from "@/utils/helpers";
import { Settings } from "@/utils/db";

const initialArticleState: Article = { id: 0, author_id: null, title: '', content: '', summary: '', published_date: null, last_modified_date: null, category: '', status: '', tags: [], images: [], views: 0 };

export default function Article() {
  const params = useParams();
  const { articleId } = params;

  const [article, setArticle] = useState<Article>(initialArticleState);

  useEffect(() => {
    getThisArticle(Number(articleId)).then(e => setArticle(e));
  }, [])

  return (
    <section className="th-blog-wrapper blog-details space-top space-extra-bottom">
      <div className="container">
        <div className="row">
          <div className="col-xxl-8 col-lg-7">
            <div className="th-blog blog-single">
              <div className="blog-img" style={{maxHeight: '30rem', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <img src={article.images[0]} alt="Blog Image"  />
              </div>
              <div className="blog-content">
                <div className="blog-meta">
                  <span ><i className="far fa-calendar"></i>{ formateDate(article.last_modified_date) }</span>
                  <span className="author" ><i className="far fa-user"></i>By {Settings.site_name}</span>
                </div>
                <h2 className="blog-title">{article.title} </h2>
                <p className="blog-desc">{article.summary}.</p>

                {/* Start:Content */}
                <div dangerouslySetInnerHTML={{ __html: article.content }} />
                {/* End:Content */}
                
                <div className="share-links clearfix ">
                  <div className="row justify-content-between">
                    <div className="col-sm-auto">
                      <span className="share-links-title">Tags:</span>
                      <div className="tagcloud">
                        {
                          (article.tags).map((e, index) => (
                            <a>{ e }</a>
                          ))
                        }
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* 
                <SuggestedArticleSection />
                */}
                
                {/* 
                <CommentSection />
                */}

              </div>
            </div>
          </div>
          <div className="col-xxl-4 col-lg-5" style={{position: 'relative'}}>
            <aside className="sidebar-area" style={{position: 'sticky', top: '5rem'}}>
              <LatestPosts />
              
              {/* 
              <Categories />
              */}
              
              {/* 
              <PopularTags />
              */}
            </aside>
          </div>
        </div>
      </div>
    </section>
  )
}