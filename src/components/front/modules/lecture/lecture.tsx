import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from 'core/store/hook';
import './style.scss';
import 'assets/styles/style.scss';
import {fetchLectures} from 'core/store/slices/article';
import ImageCard from '../../../../uikit/imagecard';

const Lecture: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(()=>{
    const todo = async () => {
      await dispatch(fetchLectures());
    };
    todo();
  },[]);
  // eslint-disable-next-line no-unused-vars
  const lectures = useAppSelector(state => state.article.lectures);
  const isFetched = useAppSelector(state => state.article.lectureFetched);
  return (
    <div>
      {isFetched ?
        <div className="lecture pt24 pb24 pos-relative primary-content d-flex d-flex-wrap">
          <div className="w-100">
            <div className="text-bold w-100 text-align-center">
                ĐỘI NGŨ GIẢNG VIÊN CHUYÊN NGHIỆP
            </div>
            <div className="h-100 d-flex mt24 d-flex-wrap">
              {lectures.map(item => <ImageCard customeClass={'mr12'} key={item.id} title={item.title} url={item.url} content={item.content} image={item.image[0]} />)}
            </div>
          </div>
        </div> : <div/>
      }
    </div>
  );
};

export default Lecture;