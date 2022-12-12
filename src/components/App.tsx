import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import MoviesFilterBar from "./MoviesFilterBar/MoviesFilterBar";
import MovieCards from "./MovieCards/MovieCards";
import MoviesAmount from "./MoviesAmount/MoviesAmount";
import { useAppSelector } from "../redux/hooks";
import { selectMovieDetailsToggle } from "../redux/slice/movieDetailsSlice";
import MovieDetails from "./MovieDetails/MovieDetails";

function App() {
  const movieDetailsToggle = useAppSelector(selectMovieDetailsToggle);

  return (
    <div className="App">
      {movieDetailsToggle ? <MovieDetails /> : <Header />}
      <MoviesFilterBar />
      <MoviesAmount />
      <MovieCards />
      <Footer />
    </div>
  );
}

export default App;
