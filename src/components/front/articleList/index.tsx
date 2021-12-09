import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from 'core/store/hook';
import './style.scss';
import 'assets/styles/style.scss';
import {fetchOther} from 'core/store/slices/article';
import ImageCard from 'uikit/imagecard';

const PostList: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const todo = async () => {
      await dispatch(fetchOther());
    };
    todo();
  }, []);
  // eslint-disable-next-line no-unused-vars
  const others = useAppSelector(state => state.article.others);
  const isFetched = useAppSelector(state => state.article.otherFetched);
  return (
    <div>
      {isFetched ?
        <div className="student pt24 pb24 pos-relative primary-content d-flex d-flex-wrap">
          <div className="w-100">
            <div className="h-100 d-flex mt24 d-flex-wrap">
              {others.map(item => <ImageCard customeClass={'mr12'} key={item.id} title={item.title}
                url={item.url || '/post/' + item.type + '/' + item.id}
                content={item.content} image={item.image[0]}
                width={'400px'} height={'300px'}
              />)}
            </div>
          </div>
        </div> : <div/>
      }
    </div>
  );
};

export default PostList;