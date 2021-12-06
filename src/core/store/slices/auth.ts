import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {AuthInfo, User} from '../defines/auth';
import {FETCH_USER} from '../types/auth';
import {getUserByEmail} from '../../services/auth_service';


// Define the initial state using that type
const initialState: AuthInfo = {
  isFetched: false,
  error: '',
  user: {
    id: '',
    email: '',
    token: '',
    displayName: '',
    photoUrl: '',
  }
};
export const fetchUser = createAsyncThunk(FETCH_USER, async (email:string)=>{
  return await getUserByEmail(email);
});
export const authSlice = createSlice({
  name: 'auth',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.isFetched = action.payload.isFetched;
      state.user = action.payload.user;
    }
  },
  extraReducers: {
    [fetchUser.pending.type]: (state: AuthInfo)=>{
      state.isFetched = false;
    },
    [fetchUser.rejected.type]: (state: AuthInfo, action: { error: string; })=>{
      state.isFetched = false;
      state.error = action.error;
      state.user = {displayName: '', email: '', photoUrl: '', token: '', id:''};
    },
    [fetchUser.fulfilled.type]: (state: AuthInfo, action: {payload: User})=>{
      state.isFetched = true;
      state.error = '';
      state.user = action.payload;
    },
  },
});

export const { setUser } = authSlice.actions;

export default authSlice.reducer;