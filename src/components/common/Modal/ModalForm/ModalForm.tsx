import ModalSelect from "../ModalSelect/ModalSelect";
import { useForm } from "react-hook-form";
import Button from "../../Button/Button";
import {
  useAddMovieMutation,
  useEditMovieMutation,
} from "../../../../redux/apiSlice";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
import {
  handleInfoToggle,
  setInfoText,
  setInfoTitle,
} from "../../../../redux/infoModalSlice";
import { IFormValues } from "../../../../types/form.type";
import ModalInput from "../ModalInput/ModalInput";
import ModalTextarea from "../ModalTextarea/ModalTextarea";
import { MovieType } from "../../../../types/movie.type";

import styles from "./modalInpuits.module.css";

type MovieFormPropsType = {
  handleCloseButton: () => void;
  movie: MovieType | null;
};

function ModalForm({ handleCloseButton, movie }: MovieFormPropsType) {
  const dispatch = useAppDispatch();
  const [addMovie] = useAddMovieMutation();
  const [editMovie] = useEditMovieMutation();
  let defaultValues;

  if (movie) {
    defaultValues = {
      title: movie.title,
      release_date: movie.release_date,
      poster_path: movie.poster_path,
      vote_average: movie.vote_average,
      runtime: movie.runtime,
      genres: movie.genres,
      overview: movie.overview,
    };
  }

  const {
    reset,
    register,
    setValue,
    getValues,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormValues>({ defaultValues });

  const onSubmit = async (data: IFormValues) => {
    if (typeof data.genres === "string") {
      data.genres = [data.genres];
    }

    try {
      if (!movie) {
        await addMovie(data).unwrap();
        dispatch(
          setInfoText("The movie has been added to database successfully")
        );
      } else {
        const movieObj = { ...movie, ...data };
        await editMovie(movieObj).unwrap();
        dispatch(setInfoText("The movie has been edited successfully"));
      }
      dispatch(setInfoTitle("Congratulations!"));
    } catch (err) {
      dispatch(setInfoTitle("Error!"));
      dispatch(setInfoText("Something went wrong"));
    }
    handleCloseButton();
    dispatch(handleInfoToggle());
  };

  return (
    <form>
      <div className={styles.inputs_wrapper}>
        <ModalInput
          register={register}
          name={"title"}
          type={"text"}
          size={"lg"}
          label={"Title"}
          error={errors.poster_path && "Title is required"}
        />
        <ModalInput
          register={register}
          name={"release_date"}
          type={"text"}
          size={"sm"}
          label={"Release"}
          error={errors.poster_path && "Date is required (YYYY-MM-DD)"}
          pattern={/([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/}
          placeholder={"YYYY-MM-DD"}
        />
      </div>
      <div className={styles.inputs_wrapper}>
        <ModalInput
          register={register}
          name={"poster_path"}
          type={"text"}
          size={"lg"}
          label={"Movie url"}
          error={errors.poster_path && "Url is required (https://...jgp/png)"}
          pattern={/(http(s?):)([/|.\w\s-])*\.(?:jpg|gif|png)/}
          placeholder={"https://"}
        />
        <ModalInput
          register={register}
          name={"vote_average"}
          type={"number"}
          size={"sm"}
          label={"Rating"}
          error={errors.vote_average && "Rating is required (0-10)"}
          placeholder={"0-10"}
          valueAsNumber={true}
        />
      </div>
      <div className={styles.inputs_wrapper}>
        <ModalSelect
          register={register}
          setValue={setValue}
          getValues={getValues}
          errors={errors}
        />
        <ModalInput
          register={register}
          name={"runtime"}
          type={"number"}
          size={"sm"}
          label={"Runtime"}
          error={errors.vote_average && "Runtime is required (minutes)"}
          placeholder={"Minutes"}
          valueAsNumber={true}
        />
      </div>
      <ModalTextarea register={register} errors={errors} />
      <div className={styles.modal_footer}>
        <Button onClick={() => reset()} btnType={"btn_dark"}>
          Reset
        </Button>
        <Button onClick={handleSubmit(onSubmit)} btnType={"btn_danger"}>
          Submit
        </Button>
      </div>
    </form>
  );
}

export default ModalForm;
