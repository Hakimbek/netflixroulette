import styles from "./addMovieButton.module.css";
import { useState } from "react";
import GeneralModal from "../../Modal/GeneralModal";

function AddMovieButton() {
  const [toggle, setToggle] = useState(false);

  const handleModal = () => setToggle(!toggle);

  return (
    <>
      <button className={styles.addMovieButton} onClick={handleModal}>
        + ADD MOVIE
      </button>
      <GeneralModal
        title={"Add movie"}
        toggle={toggle}
        handleToggle={handleModal}
      />
    </>
  );
}

export default AddMovieButton;
