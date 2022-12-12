import styles from "../movieSettings.module.css";
import settingIcon from "../../../../../assets/images/settingIcon.png";
import { MovieSettingsButtonPropsType } from "../../../../../types/movie/movieSettings.types";

function MovieSettingsButton({
  handleMovieSettingToggle,
}: MovieSettingsButtonPropsType) {
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
