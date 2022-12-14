import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import MovieCards from "./MovieCards/MovieCards";
import MoviesFilterBar from "./MoviesFilterBar/MoviesFilterBar";

import styles from "./app.module.css";

function App() {
  return (
    <div className={styles.App}>
      <Header />
      <div style={{ flex: "1 0 auto" }}>
        <MoviesFilterBar />
        <MovieCards />
      </div>
      <Footer />
    </div>
  );
}

export default App;
