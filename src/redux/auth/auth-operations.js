import { createAsyncThunk } from '@reduxjs/toolkit';

import {
  authSignInUser,
  authRefreshUser,
  authSignOutUser,
} from '../../shared/services/firebaseAPI';

export const signIn = createAsyncThunk(
  'auth/google',
  async (_, { rejectWithValue }) => {
    try {
      const data = await authSignInUser();
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  (_, { dispatch, rejectWithValue }) => {
    try {
      authRefreshUser(dispatch);
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const signOut = createAsyncThunk(
  'auth/signout',
  async (_, { rejectWithValue }) => {
    try {
      await authSignOutUser();
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);
