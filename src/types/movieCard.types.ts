export type Movie = {
  id: number;
  imageUrl: string;
  name: string;
  genre: string;
  year: string;
};

export type MovieCardProps = {
  movie: Movie;
};
