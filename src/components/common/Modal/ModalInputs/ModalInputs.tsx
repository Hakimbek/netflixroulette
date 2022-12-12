import styles from "./modalInpuits.module.css";
import TextInput from "./TextInput/TextInput";
import SelectGenreInput from "./SelectGenreInput/SelectGenreInput";
import OverviewTextarea from "./OverviewTextarea/OverviewTextarea";
import { ModalInputsTypes } from "../../../../types/modal/modalInputs.types";
import ModalFooter from "../ModalFooter/ModalFooter";

function ModalInputs({ props, requestMethod }: ModalInputsTypes) {
  return (
    <>
      <div className={styles.modal_inputsWrapper}>
        <TextInput
          value={props.title}
          label={"Title"}
          placeholder={"Title"}
          handleChange={props.setTitle}
          width={"500px"}
        />
        <TextInput
          value={props.release}
          label={"Release"}
          placeholder={"YYYY-MM-DD"}
          handleChange={props.setRelease}
          width={"300px"}
        />
      </div>
      <div className={styles.modal_inputsWrapper}>
        <TextInput
          value={props.url}
          label={"Movie url"}
          placeholder={"https://"}
          handleChange={props.setUrl}
          width={"500px"}
        />
        <TextInput
          value={props.rating}
          label={"Rating"}
          placeholder={"0-10"}
          handleChange={props.setRating}
          width={"300px"}
        />
      </div>
      <div className={styles.modal_inputsWrapper}>
        <SelectGenreInput genre={props.genre} setGenre={props.setGenre} />
        <TextInput
          value={props.runtime}
          label={"Runtime"}
          placeholder={"Minutes"}
          handleChange={props.setRuntime}
          width={"300px"}
        />
      </div>
      <OverviewTextarea
        value={props.overview}
        placeholder={"More details"}
        setValue={props.setOverview}
      />
      <ModalFooter props={props} requestMethod={requestMethod} />
    </>
  );
}

export default ModalInputs;
