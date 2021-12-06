import React, {useEffect, useRef, useState} from 'react';
import {useAppSelector} from 'core/store/hook';
import {AiOutlineMenu} from 'react-icons/ai';


const MobileMenuList: React.FC = () =>  {
  const [isShowSideBar, setIsShowSideBar] = useState(false);
  const menuState = useAppSelector(state => state.menu);
  let sidebarRef = useRef(null);
  const handleClick = (event: { target: any; }) => {
    // @ts-ignore
    if (sidebarRef && !sidebarRef.current.contains(event.target)) {
      setIsShowSideBar(false);
    }
  };
  useEffect(()=>{
    document.addEventListener('click', handleClick);
    return () => {
      window.removeEventListener('click', handleClick);
    };
  },[]);
  return (
    <div ref={sidebarRef} className={'menu-list menu-list__mobile'}>
      <div onClick={() => setIsShowSideBar(!isShowSideBar)} className={'btn-menu float-right'}>
        <AiOutlineMenu color={'white'} />
      </div>
      <div style={{transform:isShowSideBar ? 'translateX(0%)' : 'translateX(100%)'}} className={'right-side-bar'}>
        <div className={'title'}>
          TMath
        </div>
        <div hidden={isShowSideBar} className={'d-flex flex-direction-col'}>
          {menuState.listMenu.map(item=><a className={'menu-link'} key={item.id} href={item.link}>{item.title}</a>)}
        </div>
      </div>
    </div>
  );
};
export default MobileMenuList;