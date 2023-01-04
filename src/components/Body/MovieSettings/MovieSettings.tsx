import { useState } from "react";

import DeleteModal from "../../Modal/DeleteModal/DeleteModal";
import Modal from "../../Modal/Modal";
import MovieSettingsButton from "./MovieSettingsButton/MovieSettingsButton";
import MovieSettingsProperty from "./MovieSettingsProperty/MovieSettingsProperty";
import { MovieType } from "../../../types/movie.type";
import Portal from "../../common/Modal/Portal/Portal";

type MovieSettingsPropsType = {
  movie: MovieType;
};

function MovieSettings({ movie }: MovieSettingsPropsType) {
  const [movieSettingToggle, setMovieSettingToggle] = useState(true);
  const [deleteModalToggle, setDeleteModalToggle] = useState(false);
  const [editModalToggle, setEditModalToggle] = useState(false);

  const handleMovieSettingToggle = () => setMovieSettingToggle((prev) => !prev);

  const closeDeleteModal = () => {
    setDeleteModalToggle(false);
    handleMovieSettingToggle();
  };

  const closeEditModal = () => {
    setEditModalToggle(false);
    handleMovieSettingToggle();
  };

  return movieSettingToggle ? (
    <MovieSettingsButton handleMovieSettingToggle={handleMovieSettingToggle} />
  ) : (
    <>
      <MovieSettingsProperty
        handleMovieSettingToggle={handleMovieSettingToggle}
        openDeleteModal={() => setDeleteModalToggle(true)}
        openEditModal={() => setEditModalToggle(true)}
      />
      <Portal open={deleteModalToggle}>
        <DeleteModal handleCloseButton={closeDeleteModal} movieId={movie.id} />
      </Portal>
      <Portal open={editModalToggle}>
        <Modal
          title={"Edit movie"}
          handleCloseButton={closeEditModal}
          movie={movie}
        />
      </Portal>
    </>
  );
}

export default MovieSettings;
