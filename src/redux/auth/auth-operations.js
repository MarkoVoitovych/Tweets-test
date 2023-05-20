import { createAsyncThunk } from '@reduxjs/toolkit';

import {
  authSignInUser,
  authSignOutUser,
} from '../../shared/services/firebaseAPI';

export const signInWithGoogle = createAsyncThunk(
  'auth/google',
  async (_, { rejectWithValue }) => {
    try {
      const data = await authSignInUser();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const signOut = createAsyncThunk(
  'auth/signout',
  async (_, { rejectWithValue }) => {
    try {
      await authSignOutUser();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);
