import React from 'react';
import Item from './item';
import {
  ARTICLE_TYPE_COURSE,
  ARTICLE_TYPE_HOT,
  ARTICLE_TYPE_INTRODUCE,
  ARTICLE_TYPE_LECTURE,
  ARTICLE_TYPE_STUDENT,
  ARTICLE_TYPE_OTHER
} from 'core/utils/const';
import {Article} from 'core/store/defines/article';
interface defineProp{
  articles: Array<Article>,
  type: string,
  updateArticle: Function,
  deleteArticle: Function,
}
const ArticleCollection = (props: defineProp) => {
  const {articles, type, updateArticle, deleteArticle} = props;
  const getTitle = () => {
    switch (type) {
      case ARTICLE_TYPE_HOT:
        return 'Bài viết nổi bật';
      case ARTICLE_TYPE_INTRODUCE:
        return 'Bài viết giới thiệu';
      case ARTICLE_TYPE_LECTURE:
        return 'Bài viết giới thiệu giảng viên';
      case ARTICLE_TYPE_STUDENT:
        return 'Bài viết vinh danh học sinh';
      case ARTICLE_TYPE_COURSE:
        return 'Bài viết giới thiệu khóa học';
      case ARTICLE_TYPE_OTHER:
        return 'Bài viết khác';
      default:
        return '';
    }
  };
  return (
    <div className={'mt16'}>
      <div className={'article__title text-align-center text-bold mt8'}>
        {getTitle()}
      </div>
      <div className={'article__content'}>
        {articles.map(item => <Item key={item.id} item={item} onUpdate={updateArticle} onDelete={deleteArticle}/>)}
      </div>
    </div>
  );
};

export default ArticleCollection;