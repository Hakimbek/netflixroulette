import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { MoviesType, MovieType } from "../types/movie.type";

type QueryParam = {
  sortBy: string;
  sortOrder: string;
  filterBy: string;
  offset: number;
};

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:4000" }),
  endpoints: (builder) => ({
    getMovies: builder.query<MoviesType, QueryParam>({
      query: (queryParam) => {
        const { sortBy, sortOrder, filterBy, offset } = queryParam;
        return `/movies?limit=21&sortBy=${sortBy}&sortOrder=${sortOrder}&filter=${filterBy}&offset=${offset}`;
      },
    }),
    getMovie: builder.query<MovieType, number>({
      query: (movieId) => `/movies/${movieId}`,
    }),
  }),
});

export const { useGetMoviesQuery, useGetMovieQuery } = apiSlice;
