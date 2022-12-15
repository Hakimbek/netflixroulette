import { useState } from "react";

import DeleteModal from "../../../../Modal/DeleteModal";
import Modal from "../../../../Modal/Modal";
import MovieSettingsButton from "./MovieSettingsButton/MovieSettingsButton";
import MovieSettingsProperty from "./MovieSettingsProperty/MovieSettingsProperty";

function MovieSettings() {
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
      />
      <Modal
        title={"Edit movie"}
        toggle={editModalToggle}
        handleCloseButton={closeEditModal}
      />
    </>
  );
}

export default MovieSettings;
