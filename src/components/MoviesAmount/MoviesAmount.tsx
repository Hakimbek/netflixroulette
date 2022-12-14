import styles from "./moviesAmount.module.css";

type MoviesAmountPropsType = {
  moviesAmount: number;
};

function MoviesAmount({ moviesAmount }: MoviesAmountPropsType) {
  return (
    <div className={styles.movies_amount}>{moviesAmount} movies found</div>
  );
}

export default MoviesAmount;
