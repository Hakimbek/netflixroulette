import Logo from "../../common/Logo/Logo";
import {
  seeMovieDetails,
  selectFilterBy,
  selectSearchQuery,
  selectSortBy,
} from "../../../redux/movieSlice";
import magnifierIcon from "../../../assets/images/magnifierIcon.png";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { Link } from "react-router-dom";

import styles from "./movieDetailsHeader.module.css";

function MovieDetailsHeader() {
  const searchQuery = useAppSelector(selectSearchQuery);
  const options = useAppSelector(selectFilterBy);
  const sortBy = useAppSelector(selectSortBy);
  const dispatch = useAppDispatch();
  let to = "/search";

  if (searchQuery) {
    to += `/${searchQuery}`;
  }

  if (options.length !== 0) {
    to += `/genre/${options.join("&")}`;
  }

  if (sortBy !== "nothing") {
    to += `/sortBy/${sortBy}`;
  }

  return (
    <div className={styles.movieDetails_headerWrapper}>
      <Logo />
      <Link
        to={to}
        onClick={() => dispatch(seeMovieDetails(null))}
        className={styles.magnifier}
      >
        <img src={magnifierIcon} alt="Magnifier" />
      </Link>
    </div>
  );
}

export default MovieDetailsHeader;
