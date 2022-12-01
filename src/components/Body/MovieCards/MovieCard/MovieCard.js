import React from "react";
import PropTypes from "prop-types";
import MovieSetting from "./MovieCardSetting/MovieSetting";
import styles from "./movieCard.module.css";

function MovieCard({ imageUrl, name, year, genre }) {
  return (
    <div className={styles.movie_card__wrapper}>
      <MovieSetting />
      <img className={styles.movie_card__image} src={imageUrl} alt="movie" />
      <div className={styles.movie_card__name_year}>
        <p className={styles.movie_card__name}>{name}</p>
        <p className={styles.movie_card__year}>{year}</p>
      </div>
      <p className={styles.movie_card__genre}>{genre}</p>
    </div>
  );
}

MovieCard.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
};

export default MovieCard;
