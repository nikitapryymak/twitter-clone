import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
    tweets: [],
    status: 'idle',
  },

  reducers: {
    login: (state, {payload}) => {
      state.user = payload;
    },
    logout: (state) => {
      state.user = null;
      state.tweets = null;
    },
    addProfileListener: (state) => {
      state.status = 'listening';
    }
  },
});

export const { login, logout, addProfileListener } = userSlice.actions;

export const selectUser = (state) => state.user.user;
export const selectStatus = (state) => state.user.status;

export default userSlice.reducer;