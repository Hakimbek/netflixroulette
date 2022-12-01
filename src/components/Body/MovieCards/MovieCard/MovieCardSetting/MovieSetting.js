import React, { useState } from "react";
import Modal from "../../../../Modal/Modal";
import DeleteModal from "../../../../Modal/DeleteModal";
import styles from "./setting.module.css";
import dots from "../../../../../../assets/image/dots.png";
import close from "../../../../../../assets/image/close.png";

function MovieSetting() {
  const [settingToggle, setSettingToggle] = useState(true);
  const [editMovieToggle, setEditMovieToggle] = useState(false);
  const [deleteMovieToggle, setDeleteMovieToggle] = useState(false);

  const clickSettings = () => {
    setSettingToggle((e) => !e);
  };

  const editMovie = () => {
    setEditMovieToggle((e) => !e);
  };

  const deleteMovie = () => {
    setDeleteMovieToggle((e) => !e);
  };

  if (settingToggle) {
    return (
      <button
        onClick={clickSettings}
        className={styles.movie_settings__dots_button}
      >
        <img src={dots} alt="dots" />
      </button>
    );
  }
  return (
    <>
      <div className={styles.movie_settings__edit_delete}>
        <button
          onClick={clickSettings}
          className={styles.movie_settings__close}
        >
          <img src={close} alt="close" />
        </button>
        <button onClick={editMovie} className={styles.movie_settings__buttons}>
          Edit
        </button>
        <button
          onClick={deleteMovie}
          className={styles.movie_settings__buttons}
        >
          Delete
        </button>
      </div>
      <Modal
        title={"EDIT MOVIE"}
        isClicked={editMovieToggle}
        toggleFunc={editMovie}
      />
      <DeleteModal isClicked={deleteMovieToggle} toggleFunc={deleteMovie} />
    </>
  );
}

export default MovieSetting;
