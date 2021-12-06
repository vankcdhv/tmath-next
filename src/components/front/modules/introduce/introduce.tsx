import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from 'core/store/hook';
import './style.scss';
import {fetchIntroduces} from 'core/store/slices/article';

const Introduce: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(()=>{
    const todo = async () => {
      await dispatch(fetchIntroduces());
    };
    todo();
  },[]);
  const introduce = useAppSelector(state => state.article.introduces);
  const isFetched = useAppSelector(state => state.article.introduceFetched);
  return (
    <div>
      {isFetched ?
        <div className="introduce primary-content pt24 pos-relative d-flex d-flex-wrap">
          <div className="mt24 pb24 introduce__container">
            <div className="mt24 text-bold introduce__title">
              {introduce.length > 0 ? introduce[0].title : ''}
            </div>
            <div className="mt12 introduce__content">
              {/* eslint-disable-next-line no-undef */}
              {introduce.length > 0 ? introduce[0].content : ''}
            </div>
            <div>
              <div className="t-button mt24 introduce__btn-register">
                <span>Đăng ký khóa học</span>
              </div>
            </div>
          </div>
          <div className="introduce__image d-flex item-align-center justify-content-center">
            <div className="ml8">
              <img className="introduce__image--second" src={introduce.length > 0 ? introduce[0].image[0] : '/'} alt="TMath Coding Academy"/>
            </div>
            <div className="ml24">
              <img className="introduce__image--primary" src={introduce.length > 0 ? introduce[0].image[1] : '/'} alt="TMath Coding Academy"/>
            </div>
          </div>
        </div> : <div/>}
    </div>
  );
};

export default Introduce;