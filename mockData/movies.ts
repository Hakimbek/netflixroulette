import avengers from "./images/avengers.png";
import killBill from "./images/killBill.png";
import reservoirDogs from "./images/reservoirDogs.png";
import pulpFiction from "./images/pulpFiction.png";
import bohemianRhapsody from "./images/bohemianRhapsody.png";
import inception from "./images/inception.png";

const movies: {
  id: number;
  imageUrl: string;
  name: string;
  genre: string;
  year: string;
}[] = [
  {
    id: 1,
    imageUrl: avengers,
    name: "Avengers: War of Infinity",
    genre: "Action & Adventure",
    year: "2004",
  },
  {
    id: 2,
    imageUrl: pulpFiction,
    name: "Pulp Fiction",
    genre: "Action & Adventure",
    year: "2004",
  },
  {
    id: 3,
    imageUrl: killBill,
    name: "Kill Bill: Vol 2",
    genre: "Oscar winning Movie",
    year: "1994",
  },
  {
    id: 4,
    imageUrl: reservoirDogs,
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
    imageUrl: bohemianRhapsody,
    name: "Bohemian Rhapsody",
    genre: "Drama, Biography, Music",
    year: "2003",
  },
];

export default movies;
