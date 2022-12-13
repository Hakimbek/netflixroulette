import { useState } from "react";
import MovieSettingsButton from "./MovieSettingsButton/MovieSettingsButton";
import MovieSettingsProperty from "./MovieSettingsProperty/MovieSettingsProperty";
import { MovieSettingsType } from "../../../../types/movie/movieSettings.type";
import DeleteModal from "../../../Modal/DeleteModal";
import EditModal from "../../../Modal/EditModal";

function MovieSettings({ movieId }: MovieSettingsType) {
  const [movieSettingToggle, setMovieSettingToggle] = useState(true);
  const [deleteModalToggle, setDeleteModalToggle] = useState(false);
  const [editModalToggle, setEditModalToggle] = useState(false);

  const handleMovieSettingToggle = () => setMovieSettingToggle((prev) => !prev);

  const openDeleteModal = () => {
    setDeleteModalToggle((prev) => !prev);
  };

  const closeDeleteModal = () => {
    setDeleteModalToggle((prev) => !prev);
    handleMovieSettingToggle();
  };

  const openEditModal = () => {
    setEditModalToggle((prev) => !prev);
  };

  const closeEditModal = () => {
    setEditModalToggle((prev) => !prev);
    handleMovieSettingToggle();
  };

  return movieSettingToggle ? (
    <MovieSettingsButton handleMovieSettingToggle={handleMovieSettingToggle} />
  ) : (
    <>
      <MovieSettingsProperty
        handleMovieSettingToggle={handleMovieSettingToggle}
        openDeleteModal={openDeleteModal}
        openEditModal={openEditModal}
      />
      <DeleteModal
        toggle={deleteModalToggle}
        handleCloseButton={closeDeleteModal}
        movieId={movieId}
      />
      <EditModal
        toggle={editModalToggle}
        handleCloseButton={closeEditModal}
        movieId={movieId}
      />
    </>
  );
}

export default MovieSettings;
