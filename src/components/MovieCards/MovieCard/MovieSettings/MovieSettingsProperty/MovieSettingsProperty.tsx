import styles from "../movieSettings.module.css";
import closeIcon from "../../../../../assets/images/closeIcon.png";
import { MovieSettingsPropertyType } from "../../../../../types/movie/movieSettings.type";

function MovieSettingsProperty({
  handleMovieSettingToggle,
  openDeleteModal,
  openEditModal,
}: MovieSettingsPropertyType) {
  return (
    <div className={styles.movieSetting_wrapper}>
      <button
        onClick={handleMovieSettingToggle}
        className={styles.movieSetting_closeButton}
      >
        <img src={closeIcon} alt="close" />
      </button>
      <button onClick={openEditModal} className={styles.movieSetting_button}>
        Edit
      </button>
      <button onClick={openDeleteModal} className={styles.movieSetting_button}>
        Delete
      </button>
    </div>
  );
}

export default MovieSettingsProperty;
