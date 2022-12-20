import { createContext, ReactNode, useContext, useState } from "react";

import { MovieType } from "../types/movie.type";

const useMovies = (initial: MovieType[] = []) => {
  const [moviesArray, setMoviesArray] = useState<MovieType[]>(initial);
  const [selectedMovie, setSelectedMovie] = useState<MovieType>();
  const [movieDetailsIsOpen, setMovieDetailsIsOpen] = useState<boolean>(true);

  return {
    moviesArray,
    selectedMovie,
    movieDetailsIsOpen,
    loadMovies: (newMoviesArray: MovieType[]) => setMoviesArray(newMoviesArray),
    selectMovie: (movie: MovieType) => {
      setSelectedMovie(movie);
      setMovieDetailsIsOpen(false);
    },
    closeMovieDetails: () => setMovieDetailsIsOpen(true),
  };
};

type UseMovieReturnType = ReturnType<typeof useMovies>;

const MovieContext = createContext<UseMovieReturnType>(
  {} as UseMovieReturnType
);

export const useMoviesContext = () => useContext(MovieContext);

export const MoviesProvider = ({ children }: { children: ReactNode }) => (
  <MovieContext.Provider value={useMovies([])}>
    {children}
  </MovieContext.Provider>
);
