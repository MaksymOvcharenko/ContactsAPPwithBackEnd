import { createSlice } from "@reduxjs/toolkit";
import {
  login,
  logout,
  refresh,
  register,
  resetPassword,
  sendResetPasswordEmail,
} from "./operations";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: {
      name: null,
      email: null,
    },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
    isResetPwd: false,
    isOpen: false,
    isPasswordIsNotValid: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.fulfilled, (state, action) => {
        console.log(action.payload);

        state.user = action.payload.data;
        state.token = action.payload.accessToken;
        state.isLoggedIn = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.user.email = action.payload.email;
        state.isLoggedIn = true;
        state.isOpen = true;
        state.token = action.payload.data.accessToken;
      })
      .addCase(login.rejected, (state, action) => {
        state.user.email = action.payload.email;
        state.isOpen = true;
        state.isPasswordIsNotValid = true;
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(refresh.fulfilled, (state) => {
        state.isLoggedIn = true;
      })
      .addCase(sendResetPasswordEmail.fulfilled, (state) => {
        state.isOpen = true;
        state.isResetPwd = true;
      })
      .addCase(sendResetPasswordEmail.rejected, (state) => {
        state.isOpen = true;
        state.isResetPwd = false;
      })
      .addCase(resetPassword.fulfilled, (state) => {
        state.isOpen = true;
        state.isResetPwd = false;
      })
      .addCase(resetPassword.rejected, (state) => {
        state.isOpen = true;
        state.isResetPwd = false;
      });
  },
});

export const authReducer = authSlice.reducer;
