import { SortingOptionsType } from "./sortingOptions.type";

export type DropDownItemType = {
  children: SortingOptionsType;
  handleSelectedOption: (option: SortingOptionsType) => void;
};
