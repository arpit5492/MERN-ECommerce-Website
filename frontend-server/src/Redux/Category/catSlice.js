import { createSlice } from "@reduxjs/toolkit";
import { getCategories } from "./actions";

const initialState = {
  categories: [],
  status: "idle",
  error: ""
};

const catSlice = createSlice({
  name: "Category",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getCategories.pending, (state, action) => {
        state.status = 'Loading';
      })
      .addCase(getCategories.fulfilled, (state, action) => {
        state.status = 'Success';
        state.categories = action.payload;
      })
      .addCase(getCategories.rejected, (state, action) => {
        state.status = 'Failed';
        state.error = action.error.message;
      });
  }
});

export default catSlice.reducer;