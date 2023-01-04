import { useEffect, useState } from "react";

import { options } from "./genreOptions";
import ModalOption from "./ModalOption";
import {
  FieldErrors,
  UseFormGetValues,
  UseFormRegister,
  UseFormSetValue,
} from "react-hook-form";
import { IFormValues } from "../../../../types/form.type";

import selectStyles from "./selectGenreInput.module.css";
import formStyles from "../ModalForm/modalInpuits.module.css";

type ModalSelectPropsType = {
  register: UseFormRegister<IFormValues>;
  setValue: UseFormSetValue<IFormValues>;
  getValues: UseFormGetValues<IFormValues>;
  errors: FieldErrors<IFormValues>;
  setValueAs: (value: string[]) => void;
};

function ModalSelect({
  register,
  setValue,
  getValues,
  errors,
  setValueAs,
}: ModalSelectPropsType) {
  let defaultGenres: string[] = getValues("genres");
  if (defaultGenres === undefined) {
    defaultGenres = [];
  }
  const [selectToggle, setSelectToggle] = useState(false);
  const [genres, setGenres] = useState(defaultGenres);

  useEffect(() => {
    setValue("genres", genres);
  }, [genres, setValue]);

  const addGenre = (genreName: string) => {
    setGenres((prev) => [...prev, genreName]);
  };

  const removeGenre = (genreName: string) => {
    setGenres((prev) => [...prev.filter((genre) => genre !== genreName)]);
  };

  return (
    <div>
      <div className={formStyles.input_wrapper}>
        <label className={formStyles.label}>Genre</label>
        <input
          readOnly={true}
          {...register("genres", { required: true, value: genres, setValueAs })}
          className={selectStyles.selectedGenre}
          onClick={() => setSelectToggle(!selectToggle)}
        />
        <div className={formStyles.error}>
          {errors.genres && "Genres is required"}
        </div>
      </div>
      {selectToggle && (
        <div className={selectStyles.genreOptionsList}>
          {options.map((option, index) => (
            <ModalOption
              key={index}
              optionName={option}
              genres={genres}
              addGenre={addGenre}
              removeGenre={removeGenre}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default ModalSelect;
