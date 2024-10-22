import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://nodejs-hw-mongodb-1uw2.onrender.com/";

export const register = createAsyncThunk(
  "/auth/register",
  async (credentials, thunkAPI) => {
    try {
      console.log(credentials);

      const res = await axios.post("/auth/register", credentials);
      console.log(res);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
