import { createSlice } from "@reduxjs/toolkit";
import { SortingOptionsType } from "../types/sortingOptions.type";
import { RootState } from "./store";

const initialState = {
  movieId: 0,
  sortBy: "",
  sortOrder: "",
  filterBy: "",
};

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    setSortBy(state, action: { payload: SortingOptionsType }) {
      state.sortBy = action.payload.sortBy;
      state.sortOrder = action.payload.sortOrder;
    },
    setFilterBy(state, action: { payload: string }) {
      state.filterBy = action.payload;
    },
    selectMovie(state, action: { payload: number }) {
      state.movieId = action.payload;
    },
  },
});

export const selectSortBy = (state: RootState) => state.movie.sortBy;
export const selectSortOrder = (state: RootState) => state.movie.sortOrder;
export const selectFilterBy = (state: RootState) => state.movie.filterBy;
export const selectMovieId = (state: RootState) => state.movie.movieId;

export const { setSortBy, setFilterBy, selectMovie } = movieSlice.actions;

export default movieSlice.reducer;
