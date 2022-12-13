import styles from "./modalInpuits.module.css";
import ModalInput from "./Input/ModalInput";
import ModalSelect from "./Select/ModalSelect";
import ModalTextarea from "./Textarea/ModalTextarea";

type ModalFormType = {
  title: { title: string; setTitle: (e: string) => void };
  url: { url: string; setUrl: (e: string) => void };
  rating: { rating: string; setRating: (e: string) => void };
  runtime: { runtime: string; setRuntime: (e: string) => void };
  overview: { overview: string; setOverview: (e: string) => void };
  genres: { genres: string[]; setGenres: (e: string[]) => void };
  release: { release: string; setRelease: (e: string) => void };
};

function ModalForm({
  title,
  url,
  release,
  genres,
  runtime,
  rating,
  overview,
}: ModalFormType) {
  return (
    <>
      <div className={styles.modal_inputsWrapper}>
        <ModalInput
          value={title.title}
          label={"Title"}
          placeholder={"Title"}
          handleChange={title.setTitle}
          width={"500px"}
        />
        <ModalInput
          value={release.release}
          label={"Release"}
          placeholder={"YYYY-MM-DD"}
          handleChange={release.setRelease}
          width={"300px"}
        />
      </div>
      <div className={styles.modal_inputsWrapper}>
        <ModalInput
          value={url.url}
          label={"Movie url"}
          placeholder={"https://"}
          handleChange={url.setUrl}
          width={"500px"}
        />
        <ModalInput
          value={rating.rating}
          label={"Rating"}
          placeholder={"0-10"}
          handleChange={rating.setRating}
          width={"300px"}
        />
      </div>
      <div className={styles.modal_inputsWrapper}>
        <ModalSelect genre={genres.genres} setGenre={genres.setGenres} />
        <ModalInput
          value={runtime.runtime}
          label={"Runtime"}
          placeholder={"Minutes"}
          handleChange={runtime.setRuntime}
          width={"300px"}
        />
      </div>
      <ModalTextarea
        value={overview.overview}
        handleChange={overview.setOverview}
      />
    </>
  );
}

export default ModalForm;
