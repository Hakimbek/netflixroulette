import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../../redux/hooks";
import {
  seeMovieDetails,
  setFilterBy,
  setSearchQuery,
  setSortBy,
} from "../../../redux/movieSlice";

import styles from "./logo.module.css";

function Logo() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const geHomePage = () => {
    dispatch(setSortBy("nothing"));
    dispatch(setFilterBy([]));
    dispatch(setSearchQuery(""));
    dispatch(seeMovieDetails(null));
    navigate("/search");
  };

  return (
    <p className={styles.logo} onClick={geHomePage}>
      <b>netflix</b>roulette
    </p>
  );
}

export default Logo;
