import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

const initialState = {
  offset: 0,
};

const paginationSlice = createSlice({
  name: "pagination",
  initialState,
  reducers: {
    prev(state) {
      state.offset -= 21;
    },
    next(state) {
      state.offset += 21;
    },
  },
});

export const selectOffset = (state: RootState) => state.pagination.offset;

export const { prev, next } = paginationSlice.actions;

export default paginationSlice.reducer;
