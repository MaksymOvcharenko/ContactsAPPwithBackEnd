import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://nodejs-hw-mongodb-1uw2.onrender.com/";
const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// Utility to remove JWT
const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = "";
};

export const register = createAsyncThunk(
  "/auth/register",
  async (credentials, thunkAPI) => {
    try {
      let token = "";
      const res = await axios.post("/auth/register", credentials);
      if (res.data.status === 201) {
        console.log(res.data + "Все ок, можно логиниться");
        const login = await axios.post("/auth/login", {
          email: credentials.email,
          password: credentials.password,
        });

        token = login.data.data.accessToken;
        setAuthHeader(token);
      }

      return { ...res.data, accessToken: token };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const login = createAsyncThunk(
  "/auth/login",
  async (credentials, thunkAPI) => {
    try {
      console.log(credentials);

      const login = await axios.post("/auth/login", {
        email: credentials.email,
        password: credentials.password,
      });
      const token = login.data.data.accessToken;
      setAuthHeader(token);
      return { ...login.data, email: credentials.email };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const logout = createAsyncThunk("/auth/logout", async (__, thunkAPI) => {
  try {
    await axios.post("/auth/logout");
    clearAuthHeader();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
export const refresh = createAsyncThunk(
  "/auth/refresh",
  async (__, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;
    console.log("state" + state);
    console.log("persistedToken" + persistedToken);
    if (persistedToken === null) {
      return thunkAPI.rejectWithValue("Unable to fetch user");
    }
    try {
      setAuthHeader(persistedToken);
      const res = await axios.post("/auth/refresh", null, {
        withCredentials: true, // Це важливо для того, щоб куки були надіслані з запитом
      });
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
