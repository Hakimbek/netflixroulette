import styles from "./moviesAmount.module.css";
import { MoviesAmountType } from "../../types/movie/moviesAmount.type";

function MoviesAmount({ moviesAmount }: MoviesAmountType) {
  return <div className={styles.moviesAmount}>{moviesAmount} movies found</div>;
}

export default MoviesAmount;
