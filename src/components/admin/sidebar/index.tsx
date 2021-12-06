import {NavLink, useMatch} from 'react-router-dom';
import React from 'react';

const Sidebar: React.FC = () => {
  // eslint-disable-next-line no-unused-vars
  let url = useMatch('.*/admin');
  return (
    <div className={'dashboard__sidebar'}>
      <div className={'title text-align-center mt8 text-bold'}>
                TMATH - CODING ACADEMY
      </div>
      <NavLink className={({isActive})=>(isActive?'item--active':'')+' item mt24 cursor-pointer'} to={'menu'}>
                Menu
      </NavLink>
      <NavLink className={({isActive})=>(isActive?'item--active':'')+' item mt16 cursor-pointer'} to={'article'}>
                Bài viết
      </NavLink>
    </div>
  );
};

export default Sidebar;