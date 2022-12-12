import { selectAmountOfMovies } from "../../redux/slice/moviesSlice";
import { useAppSelector } from "../../redux/hooks";
import styles from "./moviesAmount.module.css";

function MoviesAmount() {
  const moviesAmount = useAppSelector(selectAmountOfMovies);

  return <div className={styles.moviesAmount}>{moviesAmount} movies found</div>;
}

export default MoviesAmount;
