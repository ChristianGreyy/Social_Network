import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const fetchMessages = createAsyncThunk("messages/:userId", async);

const submitChatSlice = createSlice({
  name: "submitChat",
  initialState,
  reducers: {
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export default submitChatSlice.reducer;
