'use client'
import { getRandomArticles } from '@/utils/supabase';
import { useEffect, useRef, useState } from 'react';
import { Articles as ArticlesType } from '@/utils/types';

export const LatestPosts = () => {
  const [articles, setArticles] = useState<ArticlesType[]>([]);
  useEffect(() => {
    getRandomArticles(4).then(e => {
      setArticles(e);
    })
  }, [])

  return (
    <>
      <div className="widget  ">
        <h3 className="widget_title">Latest Posts</h3>
        <div className="recent-post-wrap">
          {
            articles.map((e, index) => (
              <Article key={index} article={e} />
            ))
          }
        </div>
      </div>
    </>
  )
}

const Article = ({ article }) => {
  return (
    <div className="recent-post">
      <div className="media-img">
        <a href={`articles/${article.id}`}><img src={article.images[0]} alt="Blog Image" /></a>
      </div>
      <div className="media-body">
        <h4 className="post-title"><a className="text-inherit" href={`articles/${article.id}`}>{ article.title }</a></h4>
        <div className="recent-post-meta">
          <a href="blog.html"></a>
        </div>
      </div>
    </div>
  )
}