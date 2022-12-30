import Logo from "../../common/Logo/Logo";
import { handleMovieClick } from "../../../redux/movieSlice";
import magnifierIcon from "../../../assets/images/magnifierIcon.png";
import { MovieType } from "../../../types/movie.type";
import { useAppDispatch } from "../../../redux/hooks";

import styles from "./movieDetailsHeader.module.css";

function MovieDetailsHeader() {
  const dispatch = useAppDispatch();

  return (
    <div className={styles.movieDetails_headerWrapper}>
      <Logo />
      <button
        onClick={() => dispatch(handleMovieClick({} as MovieType))}
        className={styles.magnifier}
      >
        <img src={magnifierIcon} alt="Magnifier" />
      </button>
    </div>
  );
}

export default MovieDetailsHeader;
