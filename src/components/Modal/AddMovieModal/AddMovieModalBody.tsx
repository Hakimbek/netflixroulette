import { useState } from "react";
import ModalInputs from "../../common/Modal/ModalInputs/ModalInputs";
import { useAppDispatch } from "../../../redux/hooks";
import { postMovie } from "../../../redux/api/movieApiCalls";

function AddMovieModalBody() {
  const dispatch = useAppDispatch();
  const [title, setTitle] = useState("");
  const [release, setRelease] = useState("");
  const [url, setUrl] = useState("");
  const [rating, setRating] = useState("");
  const [runtime, setRuntime] = useState("");
  const [overview, setOverview] = useState("");
  const [genre, setGenre] = useState<string[]>([]);

  const post = () => {
    void dispatch(
      postMovie({ title, url, genre, overview, rating, release, runtime })
    );
    return "post";
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
      <ModalInputs props={props} requestMethod={post} />
    </>
  );
}

export default AddMovieModalBody;
