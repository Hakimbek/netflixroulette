import React from "react";
import MovieCard from "./MovieCard/MovieCard";
import movies from "../../../assets/movie/movies";
import "./movieCards.css";

function MovieCards() {
  return (
    <div className="movie_cards__wrapper">
      {movies.map((data, index) => (
        <MovieCard
          imageUrl={data.imageUrl}
          name={data.name}
          genre={data.genre}
          year={data.year}
          key={index}
        />
      ))}
    </div>
  );
}

export default MovieCards;
