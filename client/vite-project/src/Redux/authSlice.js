import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    login: {
      currentUser: null,
      isFetching: false,
      error: false,
    },
  },
  reducers: {
    loginStart: (state) => {
      state.login.isFetching = true;
    },
    loginSuccess: (state, action) => {
      state.login.isFetching = false;
      state.login.currentUser = action.payload;
      state.login.error = false;
    },
    loginFaild: (state) => {
      state.login.isFetching = false;
      state.login.error = false;
    },
    registerStart: (state) => {
      state.login.isFetching = true;
    },
    registerSuccess: (state, action) => {
      state.login.isFetching = false;
      state.login.currentUser = action.payload;
      state.login.error = false;
    },
    registerFaild: (state) => {
      state.login.isFetching = false;
      state.login.error = false;
    },
  },
});
export const {
  loginStart,
  loginSuccess,
  loginFaild,
  registerFaild,
  registerStart,
  registerSuccess,
} = authSlice.actions;
export default authSlice.reducer;
