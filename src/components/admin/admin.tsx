import React from 'react';
import 'components/admin/style.scss';
import {useEffect, useState} from 'react';

import Sidebar from 'components/admin/sidebar/index';
import ArticleList from 'components/admin/content/article/index';
import MenuList from 'components/admin/content/menu/index';
import {Route, Routes} from 'react-router-dom';
import AdminHeader from './header';


const Admin: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    if (isLoading) {
      setIsLoading(false);
    }
  }, [isLoading]);
  return (
    <div className={'dashboard h-100'}>
      <AdminHeader />
      <div className={'d-flex h-100vh'}>
        <Sidebar/>
        <div className={'dashboard__content'}>
          <Routes>
            <Route path={'article'} element={<ArticleList/>}>
            </Route>
            <Route path={'menu'} element={<MenuList/>}>
            </Route>
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Admin;