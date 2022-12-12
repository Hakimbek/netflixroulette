import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../store";
import axios from "axios";
import { MoviesType } from "../../types/slice/movieSlice.types";
import { PostMovieType, PutMovieType } from "../../types/movie/movie.types";

export const getMovies = createAsyncThunk(
  "movies/getMovies",
  async (arg, { getState }) => {
    const state = getState() as RootState;
    const movies = state.movies;
    const response = await axios.get(
      `http://localhost:4000/movies/?sortBy=${movies.sortBy}&sortOrder=${movies.sortOrder}&filter=${movies.filter}&limit=21`
    );
    return response.data as MoviesType;
  }
);

export const deleteMovie = createAsyncThunk(
  "movies/deleteMovie",
  async (movieId: number) => {
    const response = await axios.delete(
      `http://localhost:4000/movies/${movieId}`
    );
    return response.data as MoviesType;
  }
);

export const postMovie = createAsyncThunk(
  "movies/postMovie",
  async (movie: PostMovieType) => {
    const response = await axios.post(`http://localhost:4000/movies/`, {
      title: movie.title,
      tagline: "Here's to the fools who dream.",
      vote_average: Number(movie.rating),
      vote_count: 6782,
      release_date: movie.release,
      poster_path: movie.url,
      overview: movie.overview,
      budget: 30000000,
      revenue: 445435700,
      runtime: Number(movie.runtime),
      genres: movie.genre,
    });
    return response.data as MoviesType;
  }
);

export const putMovie = createAsyncThunk(
  "movies/postMovie",
  async (movie: PutMovieType) => {
    const response = await axios.put(`http://localhost:4000/movies/`, {
      title: movie.title,
      tagline: "Here's to the fools who dream.",
      vote_average: Number(movie.rating),
      vote_count: 6782,
      release_date: movie.release,
      poster_path: movie.url,
      overview: movie.overview,
      budget: 30000000,
      revenue: 445435700,
      runtime: Number(movie.runtime),
      genres: movie.genre,
      id: movie.id,
    });
    return response.data as MoviesType;
  }
);
