import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./apiSlice";
import movieDetailsReducer from "./movieDetailsSlice";
import movieReducer from "./movieSlice";
import paginationReducer from "./paginationSlice";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    movieDetails: movieDetailsReducer,
    movie: movieReducer,
    pagination: paginationReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
