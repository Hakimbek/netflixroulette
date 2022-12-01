import React from "react";
import styles from "../modal.module.css";
import close from "../../../../assets/image/close.png";
import WrapperLayout from "../../Header/WrapperLayout";
import PropTypes from "prop-types";

function ModalTitle({ title, toggleFunc }) {
  return (
    <WrapperLayout>
      <p className={styles.modal_title}>{title}</p>
      <button onClick={toggleFunc} className={styles.modal_close__button}>
        <img src={close} alt="close" />
      </button>
    </WrapperLayout>
  );
}

ModalTitle.propTypes = {
  title: PropTypes.string.isRequired,
  toggleFunc: PropTypes.func.isRequired,
};

export default ModalTitle;
