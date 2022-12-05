import React from "react";
import styles from "./movieCard.module.css";
import MovieCardProps from "./movieCard.types";
import Button from "./Setting/Button/Button";

function MovieCard({ imageUrl, name, year, genre }: MovieCardProps) {
  return (
    <div className={styles.movieCard}>
      <Button />
      <img className={styles.movieCard_image} src={imageUrl} alt="Url" />
      <div className={styles.movieCard_title}>
        <p className={styles.movieCard_name}>{name}</p>
        <p className={styles.movieCard_year}>{year}</p>
      </div>
      <p className={styles.movieCard_genre}>{genre}</p>
    </div>
  );
}

export default MovieCard;
