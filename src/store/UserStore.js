import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userAvatar: undefined,
  userName: undefined,
  streamName: undefined,
  streamKey: undefined,
  userColorTheme: undefined
};

const userSlice = createSlice({
  name: 'user-info',
  initialState,
  reducers: {
    setUserInfo: (state) => {
      console.log(state);
    }
  }
});

export default userSlice.reducer;

export const { setUserInfo } = userSlice.actions;
