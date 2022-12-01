import React, { useState } from "react";
import MovieCard from "./MovieCard/MovieCard";
import styles from "./movieCards.module.css";
import avengers from "../../../../assets/image/avengers.png";
import pulp from "../../../../assets/image/pulp.png";
import dogs from "../../../../assets/image/dogs.png";
import bill from "../../../../assets/image/bill.png";
import inception from "../../../../assets/image/inception.png";
import rhapsody from "../../../../assets/image/rhapsody.png";

function MovieCards() {
  const [movies] = useState([
    {
      id: 1,
      imageUrl: avengers,
      name: "Avengers: War of Infinity",
      genre: "Action & Adventure",
      year: "2004",
    },
    {
      id: 2,
      imageUrl: pulp,
      name: "Pulp Fiction",
      genre: "Action & Adventure",
      year: "2004",
    },
    {
      id: 3,
      imageUrl: bill,
      name: "Kill Bill: Vol 2",
      genre: "Oscar winning Movie",
      year: "1994",
    },
    {
      id: 4,
      imageUrl: dogs,
      name: "Reservoir dogs",
      genre: "Oscar winning Movie",
      year: "1994",
    },
    {
      id: 5,
      imageUrl: inception,
      name: "Inception",
      genre: "Action & Adventure",
      year: "2003",
    },
    {
      id: 6,
      imageUrl: rhapsody,
      name: "Bohemian Rhapsody",
      genre: "Drama, Biography, Music",
      year: "2003",
    },
  ]);

  return (
    <div className={styles.movie_cards__wrapper}>
      {movies.map((data) => (
        <MovieCard
          imageUrl={data.imageUrl}
          name={data.name}
          genre={data.genre}
          year={data.year}
          key={data.id}
        />
      ))}
    </div>
  );
}

export default MovieCards;
