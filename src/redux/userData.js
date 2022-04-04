import { createSlice } from "@reduxjs/toolkit";

export const userDataSlice = createSlice({
  name: "userData",
  initialState: {
    data: null,
    pending: false,
    error: false,
    
  },
  reducers: {
    userDataFetchStart: (state) => {
      state.pending = true;
    },
    userDataFetchSucess: (state, action) => {
      state.pending = false;
      state.data = action.payload;
    },
    userDataFetchError: (state) => {
      state.error = true;
      state.pending = false;
      
    },
  },
});

export const { userDataFetchStart, userDataFetchSucess, userDataFetchError } =
  userDataSlice.actions;
export default userDataSlice.reducer;
