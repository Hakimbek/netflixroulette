import settingIcon from "../../../../assets/images/settingIcon.png";
import closeIcon from "../../../../assets/images/closeIcon.png";
import styles from "./movieSettingButton.module.css";
import { useState } from "react";
import GeneralModal from "../../../Modal/GeneralModal";
import DeleteModal from "../../../Modal/DeleteModal";

function MovieSettingButton() {
  const [settingToggle, setSettingToggle] = useState(true);
  const [editMovieToggle, setEditMovieToggle] = useState(false);
  const [deleteMovieToggle, setDeleteMovieToggle] = useState(false);

  const handleSettingButton = () => setSettingToggle(!settingToggle);
  const handleEditButton = () => setEditMovieToggle(!editMovieToggle);
  const handleDeleteButton = () => setDeleteMovieToggle(!deleteMovieToggle);

  return settingToggle ? (
    <button className={styles.movieSettingButton} onClick={handleSettingButton}>
      <img src={settingIcon} alt="Setting Icon" />
    </button>
  ) : (
    <>
      <div className={styles.movieSetting_wrapper}>
        <button
          onClick={handleSettingButton}
          className={styles.movieSetting_closeButton}
        >
          <img src={closeIcon} alt="close" />
        </button>
        <button
          onClick={handleEditButton}
          className={styles.movieSetting_button}
        >
          Edit
        </button>
        <button
          onClick={handleDeleteButton}
          className={styles.movieSetting_button}
        >
          Delete
        </button>
      </div>
      <GeneralModal
        title={"Edit movie"}
        toggle={editMovieToggle}
        handleToggle={handleEditButton}
      />
      <DeleteModal
        title={"Delete movie"}
        toggle={deleteMovieToggle}
        handleToggle={handleDeleteButton}
      />
    </>
  );
}

export default MovieSettingButton;
