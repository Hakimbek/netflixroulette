import { SortingOptionsType } from "./sortingOptions.type";

export type DropDownListType = {
  options: SortingOptionsType[];
  toggle: boolean;
  handleSelectedOption: (option: SortingOptionsType) => void;
};
