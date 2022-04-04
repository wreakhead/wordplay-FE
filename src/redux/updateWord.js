import { createSlice } from "@reduxjs/toolkit";

export const updateWordSlice = createSlice({
  name: "updateWord",
  initialState: {
    data: null,
    pending: false,
    error: false,
  },
  reducers: {
    updateWordFetchStart: (state) => {
      state.pending = true;
    },
    updateWordFetchSucess: (state, action) => {
      state.pending = false;
      state.data = action.payload;
    },
    updateWordFetchError: (state) => {
      state.error = true;
      state.pending = false;
    },
  },
});

export const {
  updateWordFetchStart,
  updateWordFetchSucess,
  updateWordFetchError,
} = updateWordSlice.actions;
export default updateWordSlice.reducer;
