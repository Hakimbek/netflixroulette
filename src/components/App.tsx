import { useMoviesContext } from "../stateManagement/store";
import Body from "./Body/Body";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import MovieDetails from "./MovieDetails/MovieDetails";

import styles from "./app.module.css";
function App() {
  const { movieDetailsIsOpen } = useMoviesContext();

  return (
    <div className={styles.App}>
      {movieDetailsIsOpen ? <Header /> : <MovieDetails />}
      <Body />
      <Footer />
    </div>
  );
}

export default App;
