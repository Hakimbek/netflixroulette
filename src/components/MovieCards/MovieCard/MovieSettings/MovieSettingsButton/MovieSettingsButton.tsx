import settingIcon from "../../../../../assets/images/settingIcon.png";

import styles from "../movieSettings.module.css";

type MovieSettingsButtonPropsType = {
  handleMovieSettingToggle: () => void;
};

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
