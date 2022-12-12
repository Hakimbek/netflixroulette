import { useState } from "react";
import { EditMovieModalBodyPropsType } from "../../../types/modal/editModavieModal.types";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { selectMoviesById } from "../../../redux/slice/moviesSlice";
import ModalInputs from "../../common/Modal/ModalInputs/ModalInputs";
import { putMovie } from "../../../redux/api/movieApiCalls";

function EditMovieModalBody({ movieId }: EditMovieModalBodyPropsType) {
  const dispatch = useAppDispatch();
  const movie = useAppSelector((state) => selectMoviesById(state, movieId));

  const [title, setTitle] = useState(movie?.title || "");
  const [release, setRelease] = useState(movie?.release_date || "");
  const [url, setUrl] = useState(movie?.poster_path || "");
  const [rating, setRating] = useState(String(movie?.vote_average));
  const [runtime, setRuntime] = useState(String(movie?.runtime));
  const [overview, setOverview] = useState(String(movie?.overview));
  const [genre, setGenre] = useState<string[]>(movie?.genres || []);

  const put = () => {
    void dispatch(
      putMovie({
        id: movieId,
        title,
        url,
        genre,
        overview,
        rating,
        release,
        runtime,
      })
    );
    return "put";
  };

  const props = {
    title,
    setTitle,
    release,
    setRelease,
    url,
    setUrl,
    rating,
    setRating,
    runtime,
    setRuntime,
    overview,
    setOverview,
    genre,
    setGenre,
  };

  return (
    <>
      <ModalInputs props={props} requestMethod={put} />
    </>
  );
}

export default EditMovieModalBody;
