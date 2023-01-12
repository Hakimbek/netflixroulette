import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { MoviesType, MovieType } from "../types/movie.type";
import { IFormValues } from "../types/form.type";

type QueryParam = {
  sortBy: string;
  filterBy: string;
  searchQuery: string;
};

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:4000" }),
  tagTypes: ["Movie"],
  endpoints: (builder) => ({
    getMovies: builder.query<MoviesType, QueryParam>({
      query: (queryParam) => {
        const { sortBy, filterBy, searchQuery } = queryParam;
        return `/movies?search=${searchQuery}&limit=21&sortBy=${sortBy}&sortOrder=desc&filter=${filterBy}&searchBy=title`;
      },
      providesTags: (result) =>
        result
          ? [
              "Movie",
              ...result.data.map(({ id }) => ({ type: "Movie" as const, id })),
            ]
          : ["Movie"],
    }),
    deleteMovie: builder.mutation<void, number>({
      query: (movieId) => ({
        url: `/movies/${movieId}`,
        method: "DELETE",
      }),
      invalidatesTags: (result, error, id) => [{ type: "Movie", id }],
    }),
    addMovie: builder.mutation<MovieType, IFormValues>({
      query: (movie) => ({
        url: "/movies",
        method: "POST",
        body: movie,
      }),
      invalidatesTags: ["Movie"],
    }),
    editMovie: builder.mutation<MovieType, MovieType>({
      query: (movie) => ({
        url: `/movies`,
        method: "PUT",
        body: movie,
      }),
      invalidatesTags: (result, error, arg) => [{ type: "Movie", id: arg.id }],
    }),
  }),
});

export const {
  useGetMoviesQuery,
  useDeleteMovieMutation,
  useAddMovieMutation,
  useEditMovieMutation,
} = apiSlice;
