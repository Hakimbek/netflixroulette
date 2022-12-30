import { FieldErrors, UseFormRegister } from "react-hook-form";
import { IFormValues } from "../../../../types/form.type";

import textareaStyles from "./textarea.module.css";
import formStyles from "../ModalForm/modalInpuits.module.css";

type ModalTextareaPropsType = {
  register: UseFormRegister<IFormValues>;
  errors: FieldErrors<IFormValues>;
};

function ModalTextarea({ register, errors }: ModalTextareaPropsType) {
  return (
    <div className={formStyles.input_wrapper}>
      <label className={formStyles.label}>Overview</label>
      <textarea
        {...register("overview", { required: true })}
        className={textareaStyles.modal_textarea}
      ></textarea>
      <div className={formStyles.error}>
        {errors.overview && "Overview is required"}
      </div>
    </div>
  );
}

export default ModalTextarea;
