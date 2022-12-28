import React from "react";
import defaultMovie from "../../../assets/images/defaultMovie.png";

type PosterPropsType = {
  posterPath: string;
  movieTitle: string;
};

function Poster({ posterPath, movieTitle }: PosterPropsType) {
  if (posterPath === null) {
    posterPath = defaultMovie;
  }

  return (
    <img
      src={posterPath}
      alt={movieTitle}
      width={320}
      height={480}
      onError={(e: React.ChangeEvent<HTMLImageElement>) =>
        (e.target.src = defaultMovie)
      }
    />
  );
}

export default Poster;
