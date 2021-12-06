import React from 'react';
import 'firebase/compat/auth';
import firebase from 'firebase/compat';

const AdminHeader: React.FC = () => {
  return (
    <div className={'d-flex ml-auto'} style={{alignItems:'self-end', width:'fit-content', marginRight: '5%'}}>
      <div className={'h-100'}>
        <img src={firebase.auth().currentUser?.photoURL || ''} style={{height: '48px', borderRadius:'24px'}}  alt={'User'}/>
      </div>
      <div className={'ml8'}>
        <p  className={'text-bold'} style={{color:'white'}}>{firebase.auth().currentUser?.displayName}</p>
        <a href={'/'} style={{textDecoration:'none',color:'white'}} onClick={() => firebase.auth().signOut()}>Đăng xuất</a>
      </div>
    </div>
  );
};
export default AdminHeader;