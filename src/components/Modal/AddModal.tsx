import styles from "./modal.module.css";
import ModalCloseButton from "../common/Modal/ModalButtons/ModalCloseButton";
import ModalResetButton from "../common/Modal/ModalButtons/ModalResetButton";
import ModalSubmitButton from "../common/Modal/ModalButtons/ModalSubmitButton";
import ModalForm from "../common/Modal/ModalForm/ModalForm";
import { AddModalType } from "../../types/modal/addModal.type";
import { useState } from "react";

function AddModal({ toggle, handleCloseButton }: AddModalType) {
  const [title, setTitle] = useState("");
  const [release, setRelease] = useState("");
  const [url, setUrl] = useState("");
  const [rating, setRating] = useState("");
  const [runtime, setRuntime] = useState("");
  const [overview, setOverview] = useState("");
  const [genres, setGenres] = useState<string[]>([]);

  const handleReset = () => {
    setTitle("");
    setRelease("");
    setUrl("");
    setRating("");
    setRuntime("");
    setOverview("");
    setGenres([]);
  };

  const handleSubmit = () => {
    //  TODO: Implement submit func
  };

  return (
    <>
      {toggle && (
        <>
          <div className={styles.modal_opacity} />
          <div className={styles.modal_wrapper}>
            <div className={styles.modal_header}>
              <p className={styles.modal_title}>Add movie</p>
              <ModalCloseButton handleButton={handleCloseButton} />
            </div>
            <ModalForm
              title={{ title, setTitle }}
              url={{ url, setUrl }}
              rating={{ rating, setRating }}
              runtime={{ runtime, setRuntime }}
              overview={{ overview, setOverview }}
              genres={{ genres, setGenres }}
              release={{ release, setRelease }}
            />
            <div className={styles.modal_footer}>
              <ModalResetButton handleButton={handleReset} />
              <ModalSubmitButton handleButton={handleSubmit} />
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default AddModal;
