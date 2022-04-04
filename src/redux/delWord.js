import { createSlice } from "@reduxjs/toolkit";

export const delWordSlice = createSlice({
  name: "delWord",
  initialState: {
    data: null,
    pending: false,
    error: false,
  },
  reducers: {
    delWordFetchStart: (state) => {
      state.pending = true;
    },
    delWordFetchSucess: (state, action) => {
      state.pending = false;
      state.data = action.payload;
    },
    delWordFetchError: (state) => {
      state.error = true;
      state.pending = false;
    },
  },
});

export const { delWordFetchStart, delWordFetchSucess, delWordFetchError } =
  delWordSlice.actions;
export default delWordSlice.reducer;
