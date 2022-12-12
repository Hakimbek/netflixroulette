import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { MovieType } from "../../types/movie/movie.types";
import { MovieDetailsSliceTypes } from "../../types/slice/movieDetailsSlice.types";

const initialState: MovieDetailsSliceTypes = {
  movieDetailsToggle: false,
  movie: {} as MovieType,
};

const movieDetailsSlice = createSlice({
  name: "movieDetails",
  initialState,
  reducers: {
    openMovieDetails(state, action) {
      state.movieDetailsToggle = true;
      state.movie = action.payload as MovieType;
    },
    closeMovieDetails(state) {
      state.movieDetailsToggle = false;
    },
  },
});

export const selectMovieDetailsToggle = (state: RootState) =>
  state.movieDetails.movieDetailsToggle;
export const selectMovie = (state: RootState) => state.movieDetails.movie;

export const { openMovieDetails, closeMovieDetails } =
  movieDetailsSlice.actions;

export default movieDetailsSlice.reducer;
