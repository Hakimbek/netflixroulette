import magnifierIcon from "../../../assets/images/magnifierIcon.png";
import { useAppDispatch } from "../../../redux/hooks";
import { closeMovieDetails } from "../../../redux/slice/movieDetailsSlice";
import styles from "../movieDetails.module.css";

function MagnifierButton() {
  const dispatch = useAppDispatch();

  return (
    <button
      className={styles.magnifierButton}
      onClick={() => dispatch(closeMovieDetails())}
    >
      <img src={magnifierIcon} alt="Magnifier" />
    </button>
  );
}

export default MagnifierButton;
