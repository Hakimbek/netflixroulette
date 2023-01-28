import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { MovieType } from "../types/movie.type";

export type InitialStateType = {
  movie: MovieType | null;
};

const initialState: InitialStateType = {
  movie: null,
};

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    seeMovieDetails(state, action: { payload: MovieType | null }) {
      state.movie = action.payload;
    },
  },
});

export const selectMovie = (state: RootState) => state.movie.movie;

export const { seeMovieDetails } = movieSlice.actions;

export default movieSlice.reducer;
