import settingIcon from "../../../../assets/images/settingIcon.png";
import styles from "./movieSettingButton.module.css";

function MovieSettingButton() {
  return (
    <button className={styles.movieSettingButton}>
      <img src={settingIcon} alt="Setting Icon" />
    </button>
  );
}

export default MovieSettingButton;
