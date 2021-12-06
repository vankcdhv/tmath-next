import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from 'core/store/hook';
import './style.scss';
import 'assets/styles/style.scss';
import {fetchCourse} from 'core/store/slices/article';
import ImageCard from 'uikit/imagecard';

const Course: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(()=>{
    const todo = async () => {
      await dispatch(fetchCourse());
    };
    todo();
  },[]);
  const courses = useAppSelector(state => state.article.courses);
  const isFetched = useAppSelector(state => state.article.courseFetched);
  return (
    <div>
      {isFetched ?
        <div className="course pt24 pb24 pos-relative primary-content d-flex d-flex-wrap">
          <div className="w-100">
            <div className="text-bold w-100 text-align-center">
              CÁC KHÓA HỌC LẬP TRÌNH TẠI TMATH CODING
            </div>
            <div className="h-100 d-flex mt24 d-flex-wrap">
              {courses.map(item => <ImageCard customeClass={'mr12'} key={item.id} title={item.title} url={item.url} content={item.content} image={item.image[0]} />)}
            </div>
          </div>
        </div> : <div/>
      }
    </div>
  );
};

export default Course;