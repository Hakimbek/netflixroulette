import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { MovieType } from "../types/movie.type";

type InitialStateType = {
  movie: MovieType | null;
  sortBy: string;
  sortOrder: string;
  filterBy: string[];
};

const initialState: InitialStateType = {
  movie: null,
  sortBy: "release_date",
  sortOrder: "desc",
  filterBy: [],
};

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    setSortBy(state, action: { payload: string }) {
      state.sortBy = action.payload;
    },
    setSortOrder(state, action: { payload: string }) {
      state.sortOrder = action.payload;
    },
    setFilterBy(state, action: { payload: string[] }) {
      state.filterBy = action.payload;
    },
    seeMovieDetails(state, action: { payload: MovieType | null }) {
      state.movie = action.payload;
    },
  },
});

export const selectSortBy = (state: RootState) => state.movie.sortBy;
export const selectSortOrder = (state: RootState) => state.movie.sortOrder;
export const selectFilterBy = (state: RootState) => state.movie.filterBy;
export const selectMovie = (state: RootState) => state.movie.movie;

export const { setSortBy, setFilterBy, seeMovieDetails, setSortOrder } =
  movieSlice.actions;

export default movieSlice.reducer;
