import React, {useEffect, useState} from 'react';
import './style.scss';
import {useParams} from 'react-router-dom';
import {Article} from 'core/store/defines/article';
import {getArticleById} from 'core/services/article_service';
import {ARTICLE_TYPE_OTHER} from 'core/utils/const';
import {setIsMobile} from 'core/store/slices/common';
import {useAppDispatch} from 'core/store/hook';

const ArticleDetail: React.FC = () => {
  const dispatch = useAppDispatch();
  const [article, setArticle] = useState<Article>();
  const { type, postID } = useParams();
  useEffect(()=>{
    dispatch(setIsMobile());
    init();
  },[]);
  const init = async () => {
    if (!postID) {
      window.location.href = window.location.host;
      return;
    }
    const article = await getArticleById(type|| ARTICLE_TYPE_OTHER, postID);
    setArticle({content: article?.content, detail: article?.detail, id: article?.id, image: article?.image, title: article?.title, type: article?.type, url: article?.url});
  };
  return (
    <div className={'primary-content'} dangerouslySetInnerHTML={{__html: article?.detail || ''}}>
    </div>
  );
};

export default ArticleDetail;