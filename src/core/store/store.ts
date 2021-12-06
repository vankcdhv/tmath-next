import {configureStore} from '@reduxjs/toolkit';

import {commonSlice} from './slices/common';
import {menuSlice} from './slices/menu';
import {articleSlice} from './slices/article';
import {authSlice} from './slices/auth';

const store = configureStore({
  reducer: {
    common: commonSlice.reducer,
    menu: menuSlice.reducer,
    article: articleSlice.reducer,
    auth: authSlice.reducer,
  }
});

export default store;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch