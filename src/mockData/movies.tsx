import { MovieType } from "../types/movie.type";
import avengers from "./images/avengers.png";
import bohemianRhapsody from "./images/bohemianRhapsody.png";
import inception from "./images/inception.png";
import killBill from "./images/killBill.png";
import pulpFiction from "./images/pulpFiction.png";
import reservoirDogs from "./images/reservoirDogs.png";

export const MockMoviesArray: MovieType[] = [
  {
    id: 1,
    url: avengers,
    title: "Avengers: War of Infinity",
    genres: ["Action", "Adventure"],
    release: "2004",
    runtime: "50",
    rating: "10",
    overview: "Overview",
  },
  {
    id: 2,
    url: pulpFiction,
    title: "Pulp Fiction",
    genres: ["Action", "Adventure"],
    release: "2004",
    runtime: "100",
    rating: "8.5",
    overview: "Overview",
  },
  {
    id: 3,
    url: killBill,
    title: "Kill Bill: Vol 2",
    genres: ["Oscar winning Movie"],
    release: "1994",
    runtime: "85",
    rating: "9.5",
    overview: "Overview",
  },
  {
    id: 4,
    url: reservoirDogs,
    title: "Reservoir dogs",
    genres: ["Oscar winning Movie"],
    release: "1994",
    runtime: "196",
    rating: "6.5",
    overview: "Overview",
  },
  {
    id: 5,
    url: inception,
    title: "Inception",
    genres: ["Action", "Adventure"],
    release: "2003",
    runtime: "150",
    rating: "7.8",
    overview: "Overview",
  },
  {
    id: 6,
    url: bohemianRhapsody,
    title: "Bohemian Rhapsody",
    genres: ["Drama", "Biography", "Music"],
    release: "2003",
    runtime: "150",
    rating: "5",
    overview: "Overview",
  },
];
