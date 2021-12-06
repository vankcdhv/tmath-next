import { createSlice } from '@reduxjs/toolkit';
import {Common} from '../defines/common';


// Define the initial state using that type
const initialState: Common = {
  isMobile: false
};

export const commonSlice = createSlice({
  name: 'common',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    setIsMobile: (state) => {
      state.isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Windows Phone/i.test(navigator.userAgent) || window.innerWidth <= 768;
    }
  }
});

export const { setIsMobile } = commonSlice.actions;

export default commonSlice.reducer;