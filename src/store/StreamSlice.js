import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLive: 0
};
const streamSlice = createSlice({
  name: 'stream-state',
  initialState,
  reducers: {
    setLiveProperty: (state, action) => {
      state.isLive = action.payload;
    }
  }
});
export default streamSlice.reducer;
export const selectIsLive = (state) => state.userSlice.isLive;
export const { setLiveProperty } = streamSlice.actions;
