import { configureStore, combineReducers } from '@reduxjs/toolkit';
import userSlice from './UserSlice.js';
import streamSlice from './StreamSlice.js';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER
} from 'redux-persist';

import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
const rootReducer = combineReducers({ userSlice: userSlice, streamSlice: streamSlice });
const persistConfig = {
  key: 'root',
  blacklist: ['streamSlice'],
  storage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    })
});

export const persistor = persistStore(store);
export default store;
