export type MovieSettingsButtonType = {
  handleMovieSettingToggle: () => void;
};

export type MovieSettingsPropertyType = {
  handleMovieSettingToggle: () => void;
  openDeleteModal: () => void;
  openEditModal: () => void;
};

export type MovieSettingsType = {
  movieId: number;
};
