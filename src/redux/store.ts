import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { apiSlice } from "./apiSlice";
import movieReducer from "./movieSlice";
import type { PreloadedState } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  [apiSlice.reducerPath]: apiSlice.reducer,
  movie: movieReducer,
});

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(apiSlice.middleware),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
