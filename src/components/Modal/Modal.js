import React from "react";
import styles from "./modal.module.css";
import ModalTitle from "./Title/ModalTitle";
import ModalBody from "./Body/ModalBody";
import Footer from "./Footer/Footer";
import PropTypes from "prop-types";

function Modal({ title, isClicked, toggleFunc }) {
  return (
    isClicked && (
      <>
        <div className={styles.modal_opacity}></div>
        <div className={styles.modal}>
          <ModalTitle title={title} toggleFunc={toggleFunc} />
          <ModalBody />
          <Footer />
        </div>
      </>
    )
  );
}

Modal.propTypes = {
  title: PropTypes.string.isRequired,
  isClicked: PropTypes.bool.isRequired,
  toggleFunc: PropTypes.func.isRequired,
};

export default Modal;
