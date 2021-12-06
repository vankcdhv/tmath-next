// Import FirebaseAuth and firebase.
import React, { useEffect } from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import {User} from 'core/store/defines/auth';
import {useAppDispatch, useAppSelector} from 'core/store/hook';
import {fetchUser, setUser} from 'core/store/slices/auth';
import {unwrapResult} from '@reduxjs/toolkit';

const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: 'popup',
  // We will display Google as auth providers.
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
  ],
  callbacks: {
    // Avoid redirects after sign-in.
    signInSuccessWithAuthResult: () => false,
  },
};

function SignInScreen() {
  const authState = useAppSelector(state => state.auth.user);
  const dispatch = useAppDispatch();
  const checkUser = async (email: string) => {
    try {
      const actionResult = await dispatch(fetchUser(email));
      const currentUser = unwrapResult(actionResult);
      // @ts-ignore
      if (!currentUser?.email) {
        await firebase.auth().signOut();
        const userInfo: User = {
          id: '',
          displayName: '',
          email: '',
          photoUrl: '',
          token: ''
        };
        dispatch(setUser({user: userInfo, isFetched: false}));
      }
    } catch (error){
      await firebase.auth().signOut();
      const userInfo: User = {
        id: '',
        displayName: '',
        email: '',
        photoUrl: '',
        token: ''
      };
      dispatch(setUser({user: userInfo, isFetched: false}));
    }
  };
  // Listen to the Firebase Auth state and set the local state.
  useEffect(() => {
    const unregisterAuthObserver = firebase.auth().onAuthStateChanged(user => {
      if (user) {
        user.getIdToken()
          .then(value => {
            const userInfo: User = {
              id: '',
              displayName: user.displayName || '',
              email: user.email || '',
              photoUrl: user.photoURL || '',
              token: value
            };
            console.log(userInfo);
            checkUser(userInfo.email);
          })
          .catch(() => {
            const userInfo: User = {
              id: '',
              displayName: '',
              email: '',
              photoUrl: '',
              token: ''
            };
            dispatch(setUser({user: userInfo, isFetched: false}));
          });
      } else {
        console.log('not login');
        const userInfo: User = {
          id: '',
          displayName: '',
          email: '',
          photoUrl: '',
          token: ''
        };
        dispatch(setUser({user: userInfo, isFetched: false}));
      }
    });
    return () => unregisterAuthObserver(); // Make sure we un-register Firebase observers when the component unmounts.
  }, []);

  return (
    <div>
      {
        !authState?.email ? <div>
          <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
        </div> :
          <div>
            <h1>My App</h1>
            <p>Welcome {firebase.auth().currentUser?.displayName}! You are now signed-in!</p>
            <a onClick={() => firebase.auth().signOut()}>Sign-out</a>
          </div>
      }
    </div>
  );
}

export default SignInScreen;