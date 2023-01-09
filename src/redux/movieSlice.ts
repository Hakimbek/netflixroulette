import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { MovieType } from "../types/movie.type";

type InitialStateType = {
  movie: MovieType | null;
  sortBy: string;
  sortOrder: string;
  filterBy: string[];
  searchQuery: string;
};

const initialState: InitialStateType = {
  movie: null,
  sortBy: "nothing",
  sortOrder: "desc",
  filterBy: [],
  searchQuery: "",
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
    setSearchQuery(state, action: { payload: string }) {
      state.searchQuery = action.payload;
    },
    seeMovieDetails(state, action: { payload: MovieType | null }) {
      state.movie = action.payload;
    },
  },
});

export const selectSortBy = (state: RootState) => state.movie.sortBy;
export const selectSortOrder = (state: RootState) => state.movie.sortOrder;
export const selectFilterBy = (state: RootState) => state.movie.filterBy;
export const selectSearchQuery = (state: RootState) => state.movie.searchQuery;
export const selectMovie = (state: RootState) => state.movie.movie;

export const {
  setSortBy,
  setFilterBy,
  seeMovieDetails,
  setSortOrder,
  setSearchQuery,
} = movieSlice.actions;

export default movieSlice.reducer;
