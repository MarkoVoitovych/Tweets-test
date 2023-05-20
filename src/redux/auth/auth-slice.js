import { createSlice } from '@reduxjs/toolkit';

import { signIn, signOut } from './auth-operations';

const initialState = {
  user: {
    name: '',
    email: '',
    photoURL: '',
  },
  isLoading: false,
  isLogin: false,
  error: null,
  isFetching: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, { payload }) => {
      state.user = payload;
      state.isLogin = true;
    },
    fetchingOn: state => {
      state.isFetching = true;
    },
    fetchingOff: state => {
      state.isFetching = false;
    },
  },
  extraReducers: build => {
    build
      .addCase(signIn.pending, state => {
        state.error = null;
        state.isLoading = true;
      })
      .addCase(signIn.fulfilled, (state, { payload }) => {
        state.error = null;
        state.isLoading = false;
        state.isLogin = true;
        state.user = payload;
      })
      .addCase(signIn.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(signOut.pending, state => {
        state.error = null;
        state.isLoading = true;
      })
      .addCase(signOut.fulfilled, state => {
        state.error = null;
        state.isLoading = false;
        state.isLogin = false;
        state.user = initialState.user;
      })
      .addCase(signOut.rejected, state => {
        state.isLoading = false;
        state.isLogin = false;
        state.user = initialState.user;
      });
  },
});

export const authReducer = authSlice.reducer;

export const { setUser, fetchingOn, fetchingOff } = authSlice.actions;
