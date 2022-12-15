import closeIcon from "../../../../../../assets/images/closeIcon.png";

import styles from "../movieSettings.module.css";

type MovieSettingsPropertyType = {
  handleMovieSettingToggle: () => void;
  openDeleteModal: () => void;
  openEditModal: () => void;
};

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
