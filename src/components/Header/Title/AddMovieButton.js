import React, { useState } from "react";
import Modal from "../../Modal/Modal";
import styles from "./title.module.css";

function AddMovieButton() {
  const [toggle, setToggle] = useState(false);

  const openModal = () => {
    setToggle((e) => !e);
  };

  return (
    <>
      <button onClick={openModal} className={styles.add_button}>
        + Add Movie
      </button>
      <Modal title={"ADD MOVIE"} isClicked={toggle} toggleFunc={openModal} />
    </>
  );
}

export default AddMovieButton;
