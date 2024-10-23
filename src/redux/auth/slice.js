import { createSlice } from "@reduxjs/toolkit";
import { login, logout, refresh, register } from "./operations";

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
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.fulfilled, (state, action) => {
        console.log(action.payload);

        state.user = action.payload.user;
        state.token = action.payload.accessToken;
        state.isLoggedIn = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.user.email = action.payload.email;
        state.isLoggedIn = true;
        state.token = action.payload.data.accessToken;
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(refresh.fulfilled, (state) => {
        state.isLoggedIn = true;
        // state.isRefreshing = false;
      });
    //   .addCase(refreshUser.pending, (state) => {
    //     state.isRefreshing = true;
    //   })

    //   .addCase(refreshUser.rejected, (state) => {
    //     state.isRefreshing = false;
    //   });
  },
});

export const authReducer = authSlice.reducer;
