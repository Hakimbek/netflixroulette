export type GenreOptionPropsType = {
  optionName: string;
  genre: string[];
  setGenre: (prev: string[]) => void;
  checked: boolean;
  setChecked: (prev: boolean) => void;
};

export type SelectGenreInputPropsType = {
  genre: string[];
  setGenre: (prev: string[]) => void;
};
