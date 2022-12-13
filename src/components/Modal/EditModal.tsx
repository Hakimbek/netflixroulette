import styles from "./modal.module.css";
import ModalCloseButton from "../common/Modal/ModalButtons/ModalCloseButton";
import ModalResetButton from "../common/Modal/ModalButtons/ModalResetButton";
import ModalSubmitButton from "../common/Modal/ModalButtons/ModalSubmitButton";
import ModalForm from "../common/Modal/ModalForm/ModalForm";
import { useState } from "react";
import { EditModalType } from "../../types/modal/editModal.type";
import { MockMoviesArray } from "../../mockData/movies";
import { MovieType } from "../../types/movie/movie.type";

function EditModal({ toggle, handleCloseButton, movieId }: EditModalType) {
  const movie: MovieType | undefined = MockMoviesArray.find(
    (movie) => movie.id === movieId
  );

  const [title, setTitle] = useState(movie?.title || "");
  const [release, setRelease] = useState(movie?.release || "");
  const [url, setUrl] = useState(movie?.url || "");
  const [rating, setRating] = useState(movie?.rating || "");
  const [runtime, setRuntime] = useState(movie?.runtime || "");
  const [overview, setOverview] = useState(movie?.overview || "");
  const [genres, setGenres] = useState<string[]>(movie?.genres || []);

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

export default EditModal;
