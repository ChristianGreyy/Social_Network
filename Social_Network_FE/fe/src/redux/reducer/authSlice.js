import {
  createSlice,
  createAsyncThunk,
  isRejectedWithValue,
} from "@reduxjs/toolkit";
import axios from "axios";

export const loginApi = createAsyncThunk("api", async ({ email, password }) => {
  try {
    const res = await axios.post("http://localhost:8080/api/auth/login", {
      email,
      password,
    });
    return res.data;
  } catch (err) {
    return isRejectedWithValue(err.res.data);
  }
});

const authSlice = createSlice({
  name: "auth",
  initialState: [],
  reducers: {},
  extraReducers: {
    [loginApi.pending]: (state, action) => {
      console.log("Đang xử lý");
    },
    [loginApi.fulfilled]: (state, action) => {
      console.log("hoàn thành ");
    },
    [loginApi.rejected]: (state, action) => {
      console.log("Đã lỗi");
    },
  },
});

export default authSlice.reducer;
