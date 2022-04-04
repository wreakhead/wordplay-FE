import { createSlice } from "@reduxjs/toolkit";

export const wordDataSlice = createSlice({
  name: "wordData",
  initialState: {
    data: null,
    pending: false,
    error: false,
  },
  reducers: {
    wordDataFetchStart: (state) => {
      state.pending = true;
    },
    wordDataFetchSucess: (state, action) => {
      state.pending = false;
      state.data = action.payload;
    },
    wordDataFetchError: (state) => {
      state.error = true;
      state.pending = false;
    },
  },
});

export const { wordDataFetchStart, wordDataFetchSucess, wordDataFetchError } =
  wordDataSlice.actions;
export default wordDataSlice.reducer;
