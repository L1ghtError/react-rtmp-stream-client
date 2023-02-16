import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const convertImageToUrl = (imageData) => {
  const reader = new FileReader();
  return new Promise((resolve) => {
    reader.onload = (ev) => {
      resolve(ev.target.result);
    };
    reader.readAsDataURL(imageData);
  });
};

export const setUserPhotoThunk = createAsyncThunk('user/readDataUrl', async (imageData) => {
  let resault = await convertImageToUrl(imageData);
  return resault;
});

const initialState = {
  userAvatar: '',
  userInfo: {
    userName: '',
    streamName: '',
    userStreamKey: '',
    userColorTheme: '#535bf2'
  }
};

const userSlice = createSlice({
  name: 'user-state',
  initialState,
  reducers: {
    setUserInfo: (state, action) => {
      state.userInfo = action.payload;
    }
  },
  extraReducers(builder) {
    builder.addCase(setUserPhotoThunk.fulfilled, (state, action) => {
      state.userAvatar = action.payload;
    });
  }
});

export default userSlice.reducer;
export const selectUserInfo = (state) => state.userSlice.userInfo;
export const selectUserAvatar = (state) => {
  return state.userSlice.userAvatar;
};
export const { setUserInfo } = userSlice.actions;
