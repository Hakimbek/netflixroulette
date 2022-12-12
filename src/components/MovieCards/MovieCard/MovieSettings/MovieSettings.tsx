import EditMovieModal from "../../../Modal/EditMovieModal/EditMovieModal";
import DeleteMovieModal from "../../../Modal/DeleteMovieModal/DeleteMovieModal";
import { useState } from "react";
import MovieSettingsButton from "./MovieSettingsButton/MovieSettingsButton";
import MovieSettingsProperty from "./MovieSettingsProperty/MovieSettingsProperty";
import { MovieSettingsPropsType } from "../../../../types/movie/movieSettings.types";

function MovieSettings({ movieId }: MovieSettingsPropsType) {
  const [movieSettingToggle, setMovieSettingToggle] = useState(true);

  const handleMovieSettingToggle = () => setMovieSettingToggle((prev) => !prev);

  return movieSettingToggle ? (
    <MovieSettingsButton handleMovieSettingToggle={handleMovieSettingToggle} />
  ) : (
    <>
      <MovieSettingsProperty
        handleMovieSettingToggle={handleMovieSettingToggle}
      />
      <EditMovieModal
        movieId={movieId}
        handleMovieSettingToggle={handleMovieSettingToggle}
      />
      <DeleteMovieModal
        handleMovieSettingToggle={handleMovieSettingToggle}
        movieId={movieId}
      />
    </>
  );
}

export default MovieSettings;
