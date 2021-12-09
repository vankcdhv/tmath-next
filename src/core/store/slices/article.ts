import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {
  FETCH_COURSE,
  FETCH_HOT_NEWS,
  FETCH_INTRODUCE,
  FETCH_LECTURE,
  FETCH_OTHER,
  FETCH_STUDENT
} from '../types/article';
import {
  ARTICLE_TYPE_COURSE,
  ARTICLE_TYPE_HOT,
  ARTICLE_TYPE_INTRODUCE,
  ARTICLE_TYPE_LECTURE, ARTICLE_TYPE_OTHER,
  ARTICLE_TYPE_STUDENT
} from 'core/utils/const';
import {getArticleByType} from 'core/services/article_service';
import {Article} from 'core/store/defines/article';

interface ArticleState{
  hotNewsFetched: boolean,
  introduceFetched: boolean,
  lectureFetched: boolean,
  studentFetched: boolean,
  courseFetched: boolean,
  otherFetched: boolean,
  error: string,
  hotNews: Array<Article>
  introduces: Array<Article>
  lectures: Array<Article>
  students: Array<Article>
  courses: Array<Article>
  others: Array<Article>
}
// Define the initial state using that type
const initialState: ArticleState = {
  hotNewsFetched: false,
  introduceFetched: false,
  lectureFetched: false,
  studentFetched: false,
  courseFetched: false,
  otherFetched: false,
  error: '',
  hotNews: [],
  introduces: [],
  lectures: [],
  students: [],
  courses: [],
  others: [],
};

export const fetchHotNews = createAsyncThunk(FETCH_HOT_NEWS, async ()=>{
  return await getArticleByType(ARTICLE_TYPE_HOT);
});

export const fetchIntroduces = createAsyncThunk(FETCH_INTRODUCE, async ()=>{
  return await getArticleByType(ARTICLE_TYPE_INTRODUCE);
});
export const fetchLectures = createAsyncThunk(FETCH_LECTURE, async ()=>{
  return await getArticleByType(ARTICLE_TYPE_LECTURE);
});
export const fetchStudents = createAsyncThunk(FETCH_STUDENT, async ()=>{
  return await getArticleByType(ARTICLE_TYPE_STUDENT);
});
export const fetchCourse = createAsyncThunk(FETCH_COURSE, async ()=>{
  return await getArticleByType(ARTICLE_TYPE_COURSE);
});
export const fetchOther = createAsyncThunk(FETCH_OTHER, async ()=>{
  return await getArticleByType(ARTICLE_TYPE_OTHER);
});

export const articleSlice = createSlice({
  name: 'article',
  initialState,
  reducers: {},
  extraReducers:{
    [fetchHotNews.pending.type]: (state: ArticleState)=>{
      state.hotNewsFetched = false;
    },
    [fetchHotNews.rejected.type]: (state: ArticleState, action: { error: string; })=>{
      state.hotNewsFetched = true;
      state.error = action.error;
      state.hotNews = [];
    },
    [fetchHotNews.fulfilled.type]: (state: ArticleState, action: { payload: Article[]; })=>{
      state.hotNewsFetched = true;
      state.error = '';
      state.hotNews = action.payload;
    },
    [fetchIntroduces.pending.type]: (state: ArticleState)=>{
      state.introduceFetched = false;
    },
    [fetchIntroduces.rejected.type]: (state: ArticleState, action: { error: string; })=>{
      state.introduceFetched = true;
      state.error = action.error;
      state.introduces = [];
    },
    [fetchIntroduces.fulfilled.type]: (state: ArticleState, action: { payload: Article[]; })=>{
      state.introduceFetched = true;
      state.error = '';
      state.introduces = action.payload;
    },
    [fetchLectures.pending.type]: (state: ArticleState)=>{
      state.lectureFetched = false;
    },
    [fetchLectures.rejected.type]: (state: ArticleState, action: { error: string; })=>{
      state.lectureFetched = true;
      state.error = action.error;
      state.lectures = [];
    },
    [fetchLectures.fulfilled.type]: (state: ArticleState, action: { payload: Article[]; })=>{
      state.lectureFetched = true;
      state.error = '';
      state.lectures = action.payload;
    },
    [fetchStudents.pending.type]: (state: ArticleState)=>{
      state.studentFetched = false;
    },
    [fetchStudents.rejected.type]: (state: ArticleState, action: { error: string; })=>{
      state.studentFetched = true;
      state.error = action.error;
      state.students = [];
    },
    [fetchStudents.fulfilled.type]: (state: ArticleState, action: { payload: Article[]; })=>{
      state.studentFetched = true;
      state.error = '';
      state.students = action.payload;
    },
    [fetchCourse.pending.type]: (state: ArticleState)=>{
      state.courseFetched = false;
    },
    [fetchCourse.rejected.type]: (state: ArticleState, action: { error: string; })=>{
      state.courseFetched = true;
      state.error = action.error;
      state.courses = [];
    },
    [fetchCourse.fulfilled.type]: (state: ArticleState, action: { payload: Article[]; })=>{
      state.courseFetched = true;
      state.error = '';
      state.courses = action.payload;
    },
    [fetchOther.pending.type]: (state: ArticleState)=>{
      state.otherFetched = false;
    },
    [fetchOther.rejected.type]: (state: ArticleState, action: { error: string; })=>{
      state.otherFetched = true;
      state.error = action.error;
      state.others = [];
    },
    [fetchOther.fulfilled.type]: (state: ArticleState, action: { payload: Article[]; })=>{
      state.otherFetched = true;
      state.error = '';
      state.others = action.payload;
    },
  },
});

export default articleSlice.reducer;