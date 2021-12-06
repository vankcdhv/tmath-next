import React, {useEffect, useState} from 'react';
import ModalCUD, {MODE_ADD, MODE_DELETE, MODE_EDIT} from './modalCUD';
import {
  ARTICLE_TYPE_COURSE,
  ARTICLE_TYPE_HOT,
  ARTICLE_TYPE_INTRODUCE,
  ARTICLE_TYPE_LECTURE,
  ARTICLE_TYPE_STUDENT
} from 'core/utils/const';
import ArticleCollection from './articleCollection';
import {useAppDispatch, useAppSelector} from 'core/store/hook';
import {fetchCourse, fetchHotNews, fetchIntroduces, fetchLectures, fetchStudents} from 'core/store/slices/article';
import {Article} from 'core/store/defines/article';

const ArticleList: React.FC = () => {
  const articleState = useAppSelector(state => state.article);
  const dispatch = useAppDispatch();

  const [isShowModal, setIsShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState<Article>({
    content: '',
    id: '',
    image: [],
    title: '',
    type: '',
    url: ''
  });
  const [modalMode, setModalMode] = useState(MODE_ADD);

  useEffect(() => {
    initData();
  }, []);
  const initData = async () => {
    await dispatch(fetchHotNews());
    await dispatch(fetchIntroduces());
    await dispatch(fetchLectures());
    await dispatch(fetchStudents());
    await dispatch(fetchCourse());
  };
  const updateArticle = (article: Article) => {
    setModalMode(MODE_EDIT);
    // @ts-ignore
    setSelectedItem(article);
    setIsShowModal(true);
  };
  const addArticle = () => {
    setModalMode(MODE_ADD);
    setIsShowModal(true);
  };
  const deleteArticle = (article: Article) => {
    setModalMode(MODE_DELETE);
    // @ts-ignore
    setSelectedItem(article);
    setIsShowModal(true);
  };
  const closeModal = (isDone: boolean) => {
    setIsShowModal(false);
    setSelectedItem({content: '', id: '', image: [], title: '', type: '', url: ''});
    if (isDone) {
      initData();
    }
  };
  return (
    <div>
      <div className={'article'}>
        <div className={'article__title text-align-center text-bold mt8'}>
                    DANH SÁCH BÀI VIẾT
        </div>
        <ArticleCollection articles={articleState.hotNews} type={ARTICLE_TYPE_HOT} updateArticle={updateArticle}
          deleteArticle={deleteArticle}/>
        <ArticleCollection articles={articleState.introduces} type={ARTICLE_TYPE_INTRODUCE} updateArticle={updateArticle}
          deleteArticle={deleteArticle}/>
        <ArticleCollection articles={articleState.lectures} type={ARTICLE_TYPE_LECTURE} updateArticle={updateArticle}
          deleteArticle={deleteArticle}/>
        <ArticleCollection articles={articleState.students} type={ARTICLE_TYPE_STUDENT} updateArticle={updateArticle}
          deleteArticle={deleteArticle}/>
        <ArticleCollection articles={articleState.courses} type={ARTICLE_TYPE_COURSE} updateArticle={updateArticle}
          deleteArticle={deleteArticle}/>
        <div onClick={() => addArticle()} className={'article__btn-add t-button'}>
                    Thêm
        </div>
        <ModalCUD isShowing={isShowModal} item={selectedItem} onCloseModal={closeModal} mode={modalMode}/>
      </div>
    </div>
  );
};

export default ArticleList;