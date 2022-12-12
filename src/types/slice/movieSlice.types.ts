import { MovieType } from "../movie/movie.types";

export type MoviesType = {
  totalAmount: number;
  data: MovieType[];
  offset: number;
  limit: number;
};

export type MoviesInitialStateType = {
  movies: MoviesType;
  status: string;
  error: string;
  sortBy: string;
  sortOrder: string;
  filter: string;
};
