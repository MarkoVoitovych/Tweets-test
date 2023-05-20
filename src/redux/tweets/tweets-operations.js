import { createAsyncThunk } from '@reduxjs/toolkit';

import { getAll } from '../../shared/services/mockAPI';

export const fetchAllTweets = createAsyncThunk(
  'tweets/getAll',
  async (_, { rejectWithValue }) => {
    try {
      const data = await getAll();
      return Number(data.length);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);
