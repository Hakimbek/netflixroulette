export type MovieType = {
  id: number;
  title: string;
  tagline: string;
  vote_average: number;
  vote_count: number;
  release_date: string;
  poster_path: string;
  overview: string;
  budget: number;
  revenue: number;
  genres: string[];
  runtime: number;
};

export type PostMovieType = {
  title: string;
  url: string;
  genre: string[];
  overview: string;
  rating: string;
  release: string;
  runtime: string;
};

export type PutMovieType = {
  id: number;
  title: string;
  url: string;
  genre: string[];
  overview: string;
  rating: string;
  release: string;
  runtime: string;
};
