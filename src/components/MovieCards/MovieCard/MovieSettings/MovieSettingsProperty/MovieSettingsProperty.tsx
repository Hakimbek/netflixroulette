import styles from "../movieSettings.module.css";
import closeIcon from "../../../../../assets/images/closeIcon.png";
import { MovieSettingsPropertyPropsType } from "../../../../../types/movie/movieSettings.types";
import { useAppDispatch } from "../../../../../redux/hooks";
import { handleEditMovieModalToggle } from "../../../../../redux/slice/editMovieModalSlice";
import { handleDeleteMovieModalToggle } from "../../../../../redux/slice/deleteMovieModalSlice";

function MovieSettingsProperty({
  handleMovieSettingToggle,
}: MovieSettingsPropertyPropsType) {
  const dispatch = useAppDispatch();

  return (
    <div className={styles.movieSetting_wrapper}>
      <button
        onClick={handleMovieSettingToggle}
        className={styles.movieSetting_closeButton}
      >
        <img src={closeIcon} alt="close" />
      </button>
      <button
        onClick={() => dispatch(handleEditMovieModalToggle())}
        className={styles.movieSetting_button}
      >
        Edit
      </button>
      <button
        onClick={() => dispatch(handleDeleteMovieModalToggle())}
        className={styles.movieSetting_button}
      >
        Delete
      </button>
    </div>
  );
}

export default MovieSettingsProperty;
