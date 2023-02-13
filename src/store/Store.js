import { configureStore } from '@reduxjs/toolkit';
import userSlice from './UserStore.js';

export default configureStore({
  reducer: {
    userSlice: userSlice
  }
});
