import { createSlice } from '@reduxjs/toolkit';

import { signInWithGoogle, signOut } from './auth-operations';

const initialState = {
  user: {
    name: '',
    email: '',
    photoURL: '',
  },
  isLogin: false,
  error: '',
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
    setError: (state, { payload }) => {
      state.error = payload;
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
      .addCase(signInWithGoogle.pending, state => {
        state.error = '';
        state.isFetching = true;
      })
      .addCase(signInWithGoogle.fulfilled, (state, { payload }) => {
        state.error = '';
        state.isFetching = false;
        state.isLogin = true;
        state.user = payload;
      })
      .addCase(signInWithGoogle.rejected, (state, { payload }) => {
        state.isFetching = false;
        state.error = payload;
      })
      .addCase(signOut.pending, state => {
        state.error = '';
        state.isFetching = true;
      })
      .addCase(signOut.fulfilled, state => {
        state.error = '';
        state.isFetching = false;
        state.isLogin = false;
        state.user = initialState.user;
      })
      .addCase(signOut.rejected, state => {
        state.isFetching = false;
        state.isLogin = false;
        state.user = initialState.user;
      });
  },
});

export const authReducer = authSlice.reducer;

export const { setUser, fetchingOn, fetchingOff, setError } = authSlice.actions;
