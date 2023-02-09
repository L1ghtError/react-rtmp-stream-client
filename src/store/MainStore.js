import { createSlice } from '@reduxjs/toolkit';
const counterSlice = createSlice({
  name: 'testState',
  initialState: {
    value: 'andrew'
  },
  reducers: {
    addH: (state) => {
      state.value += ' tate';
    },
    shiftme: (state) => {
      state.value.shift();
    }
  }
});

export default counterSlice.reducer;

export const { addH, shiftme } = counterSlice.actions;
