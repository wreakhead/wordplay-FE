import { createSlice } from "@reduxjs/toolkit";

export const addWordSlice = createSlice({
  name: "addWord",
  initialState: {
    data: null,
    pending: false,
    error: false,
  },
  reducers: {
    addWordFetchStart: (state) => {
      state.pending = true;
    },
    addWordFetchSucess: (state, action) => {
      state.pending = false;
      state.data = action.payload;
    },
    addWordFetchError: (state) => {
      state.error = true;
      state.pending = false;
    },
  },
});

export const { addWordFetchStart, addWordFetchSucess, addWordFetchError } =
  addWordSlice.actions;
export default addWordSlice.reducer;
