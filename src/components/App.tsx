import Body from "./Body/Body";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import MovieDetails from "./MovieDetails/MovieDetails";
import { useAppSelector } from "../redux/hooks";
import { selectMovie } from "../redux/movieSlice";
import { useLocation, useNavigate} from "react-router-dom";
import { useEffect } from "react";

import styles from "./app.module.css";

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const movie = useAppSelector(selectMovie);

  useEffect(() => {
    if (location.pathname === "/") {
      navigate("/search");
    }
  }, [location.pathname, navigate]);

  return (
    <div className={styles.App}>
      {movie ? <MovieDetails /> : <Header />}
      <Body />
      <Footer />
    </div>
  );
}

export default App;
