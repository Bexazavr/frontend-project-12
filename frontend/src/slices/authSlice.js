/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const parsedLocalStorage = JSON.parse(localStorage.getItem('userToken'));

const initialState = {
  token: parsedLocalStorage ? parsedLocalStorage.token : null ,
  username: parsedLocalStorage ? parsedLocalStorage.username : null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    addLoginInfo: (state, { payload: { data } }) => {
      localStorage.setItem('userToken', JSON.stringify(data));
      state.token = data.token;
      state.username = data.username;
    },
    logOut: (state) => {
      localStorage.removeItem('userToken');
      state.token = null;
      state.username = null;
    },
  },
});

export const { addLoginInfo, logOut } = authSlice.actions;

export default authSlice.reducer;
