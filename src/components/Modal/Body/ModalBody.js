import React from "react";
import WrapperLayout from "../../Header/WrapperLayout";
import ModalInputLabel from "./ModalInputLabel";
import ModalInput from "./ModalInput";
import styles from "../modal.module.css";
import ModalSelect from "./ModalSelect";

function ModalBody() {
  return (
    <>
      <WrapperLayout>
        <div className={styles.modal_form__wrapper}>
          <ModalInputLabel>TITLE</ModalInputLabel>
          <ModalInput placeholder={"Title"} width={"500px"} />
        </div>
        <div className={styles.modal_form__wrapper}>
          <ModalInputLabel>RELEASE</ModalInputLabel>
          <ModalInput placeholder={"Data"} width={"300px"} />
        </div>
      </WrapperLayout>
      <WrapperLayout>
        <div className={styles.modal_form__wrapper}>
          <ModalInputLabel>MOVE URL</ModalInputLabel>
          <ModalInput placeholder={"https://"} width={"500px"} />
        </div>
        <div className={styles.modal_form__wrapper}>
          <ModalInputLabel>RATING</ModalInputLabel>
          <ModalInput placeholder={"0-10"} width={"300px"} />
        </div>
      </WrapperLayout>
      <WrapperLayout>
        <div className={styles.modal_form__wrapper}>
          <ModalInputLabel>GENRE</ModalInputLabel>
          <ModalSelect />
        </div>
        <div className={styles.modal_form__wrapper}>
          <ModalInputLabel>RUNTIME</ModalInputLabel>
          <ModalInput placeholder={"minutes"} width={"300px"} />
        </div>
      </WrapperLayout>
      <div className={styles.modal_form__wrapper}>
        <ModalInputLabel>OVERVIEW</ModalInputLabel>
        <textarea
          className={styles.modal_textarea}
          placeholder={"Movie description"}
        ></textarea>
      </div>
    </>
  );
}

export default ModalBody;
