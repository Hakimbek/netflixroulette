import styles from "../movieSettings.module.css";
import settingIcon from "../../../../../assets/images/settingIcon.png";
import { MovieSettingsButtonType } from "../../../../../types/movie/movieSettings.type";

function MovieSettingsButton({
  handleMovieSettingToggle,
}: MovieSettingsButtonType) {
  return (
    <button
      className={styles.movieSettingButton}
      onClick={handleMovieSettingToggle}
    >
      <img src={settingIcon} alt="Setting Icon" />
    </button>
  );
}

export default MovieSettingsButton;
