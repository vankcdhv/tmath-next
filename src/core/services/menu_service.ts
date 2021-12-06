import * as Firebase from './firebase_util';
import {COLLECTION_MENU} from 'core/utils/const';
import {Menu} from 'core/store/defines/menu';

const compare = (a: Menu, b: Menu) => {
  if (a.index < b.index) {
    return -1;
  }
  if (a.index > b.index) {
    return 1;
  }
  return 0;
};

export const getAllMenu = async () => {
  const response = await Firebase.getCollections(COLLECTION_MENU);
  // @ts-ignore
  return response.sort(compare);
};

export const addMenu = async (menu: Menu) => {
  return new Promise((resolve, reject)=> {
    Firebase.addDocument(menu, COLLECTION_MENU)
      .then(response => resolve(response))
      .catch(error => reject(error));
  });
};

export const setMenu = async (menu: Menu, menuID: string) => {
  return new Promise((resolve, reject)=>{
    Firebase.setDocument(menu, COLLECTION_MENU, menuID)
      .then(response => resolve(response))
      .catch(error=>reject(error));
  });
};

export const deleteMenu = async (menuID: string) => {
  return new Promise((resolve, reject)=>{
    Firebase.deleteDocument(menuID, COLLECTION_MENU)
      .then(response => resolve(response))
      .catch(error=>reject(error));
  });
};