import { UseFormRegister } from "react-hook-form";
import { IFormValues } from "../../../../types/form.type";

import inputStyles from "./input.module.css";
import formStyles from "../ModalForm/modalInpuits.module.css";

type ModalInputPropsType = {
  register: UseFormRegister<IFormValues>;
  name: "title" | "poster_path" | "release_date" | "runtime" | "vote_average";
  error: string | unknown;
  label: string;
  type: "number" | "text";
  size: "sm" | "lg";
  placeholder?: string;
  pattern?: RegExp;
  valueAsNumber?: boolean;
};

function ModalInput({
  register,
  name,
  error,
  label,
  type,
  size,
  pattern,
  placeholder,
  valueAsNumber,
}: ModalInputPropsType) {
  let inputSize;

  if (size === "lg") {
    inputSize = inputStyles.input_lg;
  } else {
    inputSize = inputStyles.input_sm;
  }

  return (
    <div className={formStyles.input_wrapper}>
      <label className={formStyles.label}>{label}</label>
      <input
        {...register(name, { required: true, pattern, valueAsNumber })}
        className={`${inputStyles.modal_input} ${inputSize}`}
        type={type}
        placeholder={placeholder}
      />
      <div className={formStyles.error}>
        {typeof error === "string" ? error : ""}
      </div>
    </div>
  );
}

export default ModalInput;
