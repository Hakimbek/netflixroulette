import Logo from "../common/Logo/Logo";
import MagnifierButton from "./MagnifierButton/MagnifierButton";
import styles from "./movieDetails.module.css";
import { useAppSelector } from "../../redux/hooks";
import { selectMovie } from "../../redux/slice/movieDetailsSlice";
import MovieData from "./MovieData/MovieData";

function MovieDetails() {
  const movie = useAppSelector(selectMovie);

  return (
    <div className={styles.movieDetails}>
      <div className={styles.movieDetailsLogoMagnifierButtonWrapper}>
        <Logo />
        <MagnifierButton />
      </div>
      <MovieData movie={movie} />
    </div>
  );
}

export default MovieDetails;
