import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './MainStore';

export default configureStore({
  reducer: {
    counterSlice: counterSlice
  }
});
