import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from 'core/store/hook';
import './style.scss';
import 'assets/styles/style.scss';
import {fetchStudents} from 'core/store/slices/article';
import ImageCard from '../../../../uikit/imagecard';

const Student: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(()=>{
    const todo = async () => {
      await dispatch(fetchStudents());
    };
    todo();
  },[]);
  // eslint-disable-next-line no-unused-vars
  const students = useAppSelector(state => state.article.students);
  const isFetched = useAppSelector(state => state.article.studentFetched);
  return (
    <div>
      {isFetched ?
        <div className="student pt24 pb24 pos-relative primary-content d-flex d-flex-wrap">
          <div className="w-100">
            <div className="text-bold w-100 text-align-center">
              TOP HỌC VIÊN CỦA TMATH CODING
            </div>
            <div className="h-100 d-flex mt24 d-flex-wrap">
              {students.map(item => <ImageCard customeClass={'mr12'} key={item.id} title={item.title} url={item.url || '/post/' + item.type + '/' + item.id} content={item.content} image={item.image[0]} />)}
            </div>
          </div>
        </div> : <div/>
      }
    </div>
  );
};

export default Student;