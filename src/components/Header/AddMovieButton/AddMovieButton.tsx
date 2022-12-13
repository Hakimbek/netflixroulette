import styles from "./addMovieButton.module.css";
import AddModal from "../../Modal/AddModal";
import { useState } from "react";

function AddMovieButton() {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle((prev) => !prev);
  };

  return (
    <>
      <button className={styles.addMovieButton} onClick={handleToggle}>
        + ADD MOVIE
      </button>
      <AddModal toggle={toggle} handleCloseButton={handleToggle} />
    </>
  );
}

export default AddMovieButton;
