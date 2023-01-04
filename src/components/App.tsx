import Body from "./Body/Body";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import MovieDetails from "./MovieDetails/MovieDetails";
import { useAppSelector } from "../redux/hooks";
import { selectMovie } from "../redux/movieSlice";

import styles from "./app.module.css";

function App() {
  const movie = useAppSelector(selectMovie);

  return (
    <div className={styles.App}>
      {movie ? <MovieDetails /> : <Header />}
      <Body />
      <Footer />
    </div>
  );
}

export default App;
