import React from 'react';
import {useAppSelector} from 'core/store/hook';


const MenuList = () =>  {
  const menuState = useAppSelector(state => state.menu);
  return (
    <div className={'menu-list menu-list__desktop'}>
      {menuState.listMenu.map(item=><a className={'menu-link'} key={item.id} href={item.link}>{item.title}</a>)}
    </div>
  );
};
export default MenuList;