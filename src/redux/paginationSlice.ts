import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

const initialState = {
  offset: 0,
  page: 1,
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
    setOffset(state, action: { payload: number }) {
      state.offset = action.payload;
    },
    setPage(state, action: { payload: number }) {
      state.page = action.payload;
    },
  },
});

export const selectOffset = (state: RootState) => state.pagination.offset;
export const selectPage = (state: RootState) => state.pagination.page;

export const { prev, next, setOffset, setPage } = paginationSlice.actions;

export default paginationSlice.reducer;
