import { configureStore, combineReducers } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import { authReducer } from './auth/auth-slice';
import { tweetsReducer } from './tweets/tweets-slice';

const authPersistConfig = {
  key: 'tweets/auth',
  storage,
  whitelist: ['isLogin'],
};

const tweetsPersistConfig = {
  key: 'tweets/data',
  storage,
  whitelist: ['followings'],
};

const authPersistedReducer = persistReducer(authPersistConfig, authReducer);
const tweetsPersistedReducer = persistReducer(
  tweetsPersistConfig,
  tweetsReducer,
);

const rootReducer = combineReducers({
  auth: authPersistedReducer,
  tweets: tweetsPersistedReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
