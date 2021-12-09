import React, {useEffect} from 'react';
import {useAppSelector,useAppDispatch} from 'core/store/hook';
import Header from 'components/front/header/index';
import {setIsMobile} from 'core/store/slices/common';
import './style.scss';
import Introduce from './modules/introduce/introduce';
import Student from './modules/student/student';
import Lecture from './modules/lecture/lecture';
import Course from './modules/course/course';
import Footer from './modules/footer/foot';
import { Routes } from 'react-router-dom';
import {Route} from 'react-router';
import ArticleDetail from './articleDetail';
import ArticleList from './articleList';

const Front: React.FC = () => {
  const rootState = useAppSelector(state => state);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(setIsMobile());
    const script = document.createElement('script');
    script.src = 'https://sp.zalo.me/plugins/sdk.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
  useEffect(() => {
    console.log('Is mobile',rootState.common.isMobile);
  },[rootState.common.isMobile]);
  return (
    <div className={'front'}>
      <Header />
      <Routes>
        <Route path={'/'} element={<div>
          <Introduce />
          <div className="mt24 pos-relative primary-content d-flex d-flex-wrap">
            <div className="w-100">
              <div className="text-bold w-100 text-align-center">
                            HỆ THỐNG GIẢNG DẠY PHONG PHÚ
              </div>
              <div className="text-align-center">
                <img className="method__image mt24" src="https://firebasestorage.googleapis.com/v0/b/tmathlanding.appspot.com/o/images%2Fothers%2Fdiscover01.jpg?alt=media&token=74121d92-d61b-40e6-ac59-4a686e136b80" alt=""/>
              </div>
            </div>
          </div>
          <Lecture />
          <Student />
          <Course />
        </div>} />
        <Route path="/posts" element={<ArticleList />} />
        <Route path="/post/:type/:postID" element={<ArticleDetail/>}/>
      </Routes>
      <Footer />


      <div className="zalo-chat-widget" data-oaid="3298019303629189114"
        data-welcome-message="Rất vui khi được hỗ trợ bạn!" data-autopopup="5" data-width=""
        data-height=""/>
    </div>
  );
};

export default Front;