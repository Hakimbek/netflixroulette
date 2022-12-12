import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./slice/moviesSlice";
import addMovieModalReducer from "./slice/addMovieModalSlice";
import editMovieModalReducer from "./slice/editMovieModalSlice";
import deleteMovieModalReducer from "./slice/deleteMovieModalSlice";
import movieDetailsReducer from "./slice/movieDetailsSlice";

const store = configureStore({
  reducer: {
    movies: moviesReducer,
    addMovieModal: addMovieModalReducer,
    editMovieModal: editMovieModalReducer,
    deleteMovieModal: deleteMovieModalReducer,
    movieDetails: movieDetailsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
