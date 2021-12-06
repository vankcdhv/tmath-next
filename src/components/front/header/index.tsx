import React, {useEffect} from 'react';
import {useAppSelector, useAppDispatch} from 'core/store/hook';
import {fetchMenuList} from 'core/store/slices/menu';
import MenuList from './menu_list';
import MobileMenuList from './mobile_menu_list';
import {AiOutlineArrowRight} from 'react-icons/ai';
import './style.scss';
import {fetchHotNews} from 'core/store/slices/article';

const Header: React.FC = () => {
  const menuState = useAppSelector(state => state.menu);
  const articleState = useAppSelector(state => state.article);
  const isMobile = useAppSelector(state => state.common.isMobile);
  const dispatch = useAppDispatch();
  useEffect(() => {
    const todo = async () => {
      await dispatch(fetchMenuList());
      await dispatch(fetchHotNews());
    };
    todo();
  },[]);
  return (
    <div className={'header'}>
      <div className={'header--navigator'}>
        <div className={'header--logo'}>
          <img src={'/Tmath_logo.png'}  alt={'TMath - Conding Academy'}/>
          <div>TMATH</div>
        </div>
        {menuState.isLoading ? <div/> :
          menuState.error ?
            <div className={'header--error'}>
                Something went wrong!!!
            </div> :
            !isMobile ? <MenuList /> : <MobileMenuList/>
        }
      </div>
      <div className={'header--introduce'}>
        <div className={'name'}>
          Tmath Coding Academic
        </div>
        <div className={'sologan mt8'}>
          NƠI NUÔI DƯỠNG VÀ ĐÀO TẠO TÀI NĂNG TRẺ
        </div>
      </div>
      <div className={'t-button btn-explore mt24'}>EXPLORE</div>
      {isMobile || !articleState.hotNewsFetched ? <div/> :
        <div className="card hot-new d-flex mt24 p8 item-align-center">
          <div>
            <div className="mb8">{articleState.hotNews[0].title}</div>
            <a href={articleState.hotNews[0].url}>
                More
              <AiOutlineArrowRight className="ml4"/>
            </a>
          </div>
          <img src={articleState.hotNews ? articleState.hotNews[0].image[0] : '/'} alt={'Hot new'}/>
        </div>
      }
    </div>
  );
};

export default Header;