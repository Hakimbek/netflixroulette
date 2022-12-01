import React from "react";
import styles from "./modal.module.css";
import PropTypes from "prop-types";
import ModalTitle from "./Title/ModalTitle";

function DeleteModal({ isClicked, toggleFunc }) {
  return (
    isClicked && (
      <>
        <div className={styles.modal_opacity}></div>
        <div className={styles.modal_delete}>
          <ModalTitle title={"DELETE MOVIE"} toggleFunc={toggleFunc} />
          <p>Are you sure you want delete this movie?</p>
          <button className={styles.modal_delete__button}>CONFIRM</button>
        </div>
      </>
    )
  );
}

DeleteModal.propTypes = {
  isClicked: PropTypes.bool.isRequired,
  toggleFunc: PropTypes.func.isRequired,
};

export default DeleteModal;
