import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {Menu} from '../defines/menu';
import {FETCH_MENU_LIST} from '../types/menu';
import {getAllMenu} from '../../services/menu_service';

interface MenuState{
  isLoading: boolean,
  error: string,
  listMenu: Array<Menu>
}
// Define the initial state using that type
const initialState: MenuState = {
  isLoading: false,
  error: '',
  listMenu: [],
};

export const fetchMenuList = createAsyncThunk(FETCH_MENU_LIST, async ()=>{
  return await getAllMenu();
});

export const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {},
  extraReducers:{
    [fetchMenuList.pending.type]: (state: MenuState)=>{
      state.isLoading = true;
    },
    [fetchMenuList.rejected.type]: (state: MenuState, action: { error: string; })=>{
      state.isLoading = false;
      state.error = action.error;
      state.listMenu = [];

    },
    [fetchMenuList.fulfilled.type]: (state: MenuState, action: { payload: Menu[]; })=>{
      state.isLoading = false;
      state.error = '';
      state.listMenu = action.payload;
    },
  },
});

export default menuSlice.reducer;