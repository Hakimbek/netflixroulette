import Body from "./Body/Body";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import MovieDetails from "./MovieDetails/MovieDetails";
import { useAppSelector } from "../redux/hooks";
import { selectMovieDetailsStatus } from "../redux/movieDetailsSlice";

import styles from "./app.module.css";

function App() {
  const movieDetailsStatus = useAppSelector(selectMovieDetailsStatus);

  return (
    <div className={styles.App}>
      {movieDetailsStatus ? <MovieDetails /> : <Header />}
      <Body />
      <Footer />
    </div>
  );
}

export default App;
