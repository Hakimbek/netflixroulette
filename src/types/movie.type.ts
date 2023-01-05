export type MovieType = {
  id: number;
  poster_path: string;
  title: string;
  tagline?: string;
  vote_average: number;
  vote_count?: number;
  genres: string[];
  release_date: string;
  runtime: number;
  overview: string;
  budget?: number;
  revenue?: number;
};

export type MoviesType = {
  data: MovieType[];
  totalAmount: number;
  offset: number;
  limit: number;
};
