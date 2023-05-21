import { createSlice } from '@reduxjs/toolkit';

import { fetchAllTweets } from './tweets-operations';

const initialState = {
  followings: [],
  totalTweets: 0,
  error: '',
  isLoading: false,
};

const tweetsSlice = createSlice({
  name: 'tweets',
  initialState,
  reducers: {
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

export const { loadingOn, loadingOff } = tweetsSlice.actions;
