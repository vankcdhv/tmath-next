import * as Firebase from './firebase_util';
import {COLLECTION_ARTICLE} from 'core/utils/const';
import {Article} from 'core/store/defines/article';

export const getAllArticle = async () => {
  return await Firebase.getCollections(COLLECTION_ARTICLE);
};

export const getArticleByType = async (type: string) => {
  const response = (await Firebase.getCollections(COLLECTION_ARTICLE + '/' + type + '/' + type));
  return response.map(item => ({...item, type: type}));
};

export const addArticle = async (article: Article, type: string) => {
  return (await Firebase.addDocument(article, COLLECTION_ARTICLE + '/' + type + '/' + type));
};

export const setArticle = async (article: Article, articleID: string, type: string) => {
  return (await Firebase.setDocument(article, COLLECTION_ARTICLE + '/' + type + '/' + type, articleID));
};

export const deleteArticle = async (articleID: string, type: string) => {
  return (await Firebase.deleteDocument(articleID, COLLECTION_ARTICLE + '/' + type + '/' + type));
};