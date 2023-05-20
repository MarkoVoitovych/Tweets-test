import { createSlice } from '@reduxjs/toolkit';

import { fetchAllTweets } from './tweets-operations';

const initialState = {
  page: 1,
  filter: 'all',
  totalTweets: 0,
  error: '',
  isLoading: false,
};

const tweetsSlice = createSlice({
  name: 'tweets',
  initialState,
  reducers: {
    setFilter: (state, { payload }) => {
      state.filter = payload;
    },
    setPage: (state, { payload }) => {
      state.page = payload;
    },
    loadingOn: state => {
      state.isLoading = true;
    },
    loadingOff: state => {
      state.isLoading = false;
    },
  },
  extraReducers: build => {
    build
      .addCase(fetchAllTweets.pending, state => {
        state.error = '';
        state.isLoading = true;
      })
      .addCase(fetchAllTweets.fulfilled, (state, { payload }) => {
        state.error = '';
        state.isLoading = false;
        state.totalTweets = payload;
      })
      .addCase(fetchAllTweets.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export const tweetsReducer = tweetsSlice.reducer;

export const { setFilter, setPage } = tweetsSlice.actions;
