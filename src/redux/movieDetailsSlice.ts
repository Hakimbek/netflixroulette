import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

const initialState = {
  movieDetailsStatus: false,
};

const movieDetailsSlice = createSlice({
  name: "movieDetails",
  initialState,
  reducers: {
    openMovieDetails(state) {
      state.movieDetailsStatus = true;
    },
    closeMovieDetails(state) {
      state.movieDetailsStatus = false;
    },
  },
});

export const selectMovieDetailsStatus = (state: RootState) =>
  state.movieDetails.movieDetailsStatus;

export const { openMovieDetails, closeMovieDetails } =
  movieDetailsSlice.actions;

export default movieDetailsSlice.reducer;
