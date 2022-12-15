import { createContext, ReactNode, useContext, useState } from "react";

import { MovieType } from "../types/movie.type";

const useMovies = (initial: MovieType[] = []) => {
  const [moviesArray, setMoviesArray] = useState<MovieType[]>(initial);
  const [movie, setMovie] = useState<MovieType>();
  const [toggle, setToggle] = useState<boolean>(true);

  return {
    moviesArray,
    movie,
    toggle,
    load: (newMoviesArray: MovieType[]) => setMoviesArray(newMoviesArray),
    clickMovie: (movie: MovieType) => {
      setMovie(movie);
      setToggle(false);
    },
    handleToggle: () => setToggle(true),
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
