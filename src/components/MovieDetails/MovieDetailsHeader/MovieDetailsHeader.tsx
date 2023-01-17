import Logo from "../../common/Logo/Logo";
import magnifierIcon from "../../../assets/images/magnifierIcon.png";
import { useAppDispatch } from "../../../redux/hooks";
import { seeMovieDetails } from "../../../redux/movieSlice";
import { useSearchParams } from "react-router-dom";

import styles from "./movieDetailsHeader.module.css";

function MovieDetailsHeader() {
  const [, setSearchParams] = useSearchParams();
  const dispatch = useAppDispatch();

  const handleMagnifierButton = () => {
    setSearchParams((prev) => {
      prev.delete("movie");
      return prev;
    });
    dispatch(seeMovieDetails(null));
  };

  return (
    <div className={styles.movieDetails_headerWrapper}>
      <Logo />
      <img
        onClick={handleMagnifierButton}
        className={styles.magnifier}
        src={magnifierIcon}
        alt="Magnifier"
      />
    </div>
  );
}

export default MovieDetailsHeader;
