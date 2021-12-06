import * as Firebase from './firebase_util';
import {COLLECTION_USER} from 'core/utils/const';
import {User} from 'core/store/defines/auth';


export const getAllUser = async () => {
  return await Firebase.getCollections(COLLECTION_USER);
};

export const getUserByEmail = async (email: string) => {
  const collection = await Firebase.getCollections(COLLECTION_USER);
  // @ts-ignore
  const response = collection.filter(item => item.email === email);
  if (response.length > 0) {
    return response[0];
  }
  return null;
};

export const setUser = async (user: User, userID: string) => {
  return new Promise((resolve, reject)=>{
    Firebase.setDocument(user, COLLECTION_USER, userID)
      .then(response => resolve(response))
      .catch(error=>reject(error));
  });
};

export const deleteUser = async (userID: string) => {
  return new Promise((resolve, reject)=>{
    Firebase.deleteDocument(userID, COLLECTION_USER)
      .then(response => resolve(response))
      .catch(error=>reject(error));
  });
};