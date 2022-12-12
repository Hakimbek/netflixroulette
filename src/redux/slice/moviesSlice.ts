import { createSlice } from "@reduxjs/toolkit";
import { MoviesInitialStateType } from "../../types/slice/movieSlice.types";
import { RootState } from "../store";
import { OptionsTypes } from "../../types/sorting/options.types";
import { getMovies, deleteMovie, postMovie } from "../api/movieApiCalls";

const initialState: MoviesInitialStateType = {
  movies: {
    totalAmount: 0,
    data: [],
    offset: 0,
    limit: 0,
  },
  status: "idle",
  error: "",
  sortBy: "release-date",
  sortOrder: "desc",
  filter: "",
};

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    setFilter(state, action) {
      state.filter = String(action.payload);
      state.status = "idle";
    },
    setSortProperties(state, action) {
      const option = action.payload as OptionsTypes;
      state.sortBy = option.sortBy;
      state.sortOrder = option.sortOrder;
      state.status = "idle";
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getMovies.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getMovies.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.movies = action.payload;
      })
      .addCase(getMovies.rejected, (state) => {
        state.status = "failed";
        state.error = "Error";
      });
    builder.addCase(deleteMovie.fulfilled, (state) => {
      state.status = "idle";
    });
    builder.addCase(postMovie.fulfilled, (state) => {
      state.status = "idle";
    });
  },
});

export const selectAllMovies = (state: RootState) => state.movies.movies.data;
export const selectMoviesById = (state: RootState, movieId: number) =>
  state.movies.movies.data.find((movie) => movie.id === movieId);
export const selectMoviesStatus = (state: RootState) => state.movies.status;
export const selectError = (state: RootState) => state.movies.error;
export const selectAmountOfMovies = (state: RootState) =>
  state.movies.movies.totalAmount;

export const { setSortProperties, setFilter } = moviesSlice.actions;

export default moviesSlice.reducer;
