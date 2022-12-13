export type MovieType = {
  id: number;
  url: string;
  title: string;
  genres: string[];
  release: string;
  runtime: string;
  rating: string;
  overview: string;
};

export type MoviePropsType = {
  movie: MovieType;
};
