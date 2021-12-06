// import {initializeApp} from 'firebase/app';
import firebase from 'firebase/compat/app';


import {addDoc, collection, deleteDoc, doc, getDocs, getFirestore, setDoc} from 'firebase/firestore';
import {Menu} from 'core/store/defines/menu';
import { Article } from 'core/store/defines/article';
import {User} from 'core/store/defines/auth';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const app = firebase.app();
const dbContext = getFirestore(app);

const getCollections = async (collectionName: string) => {
  const collectionRef = collection(dbContext, collectionName);
  const docsRef = await getDocs(collectionRef);
  return docsRef.docs.map(doc => {
    const data = doc.data();
    return {
      ...data,
      id: doc.id,
    };
  });
};

const addDocument = async (docData: Menu | Article | User, collectionName: string) => {
  const collectionRef = collection(dbContext, collectionName);
  const docRef = await addDoc(collectionRef, docData);
  console.log('Document added', docRef);
  return docRef;
};

const setDocument = async (docData: Menu | Article | User, collectionName: string, docId: string) => {
  const docRef = doc(dbContext, collectionName, docId);
  await setDoc(docRef, docData);
  console.log('Document update', docRef);
};

const deleteDocument = async (docId: string, collectionName: string) => {
  const docRef = doc(dbContext, collectionName, docId);
  await deleteDoc(docRef);
  console.log('Document deleted', docRef);
};

export {getCollections, addDocument, setDocument, deleteDocument};
