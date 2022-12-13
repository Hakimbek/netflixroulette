export type ModalOptionType = {
  optionName: string;
  genre: string[];
  setGenre: (prev: string[]) => void;
  checked: boolean;
  setChecked: (prev: boolean) => void;
};

export type ModalSelectType = {
  genre: string[];
  setGenre: (prev: string[]) => void;
};
