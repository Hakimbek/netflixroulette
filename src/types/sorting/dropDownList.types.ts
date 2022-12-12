import { OptionsTypes } from "./options.types";

type DropDownListProps = {
  options: OptionsTypes[];
  toggle: boolean;
  handleSelectedOption: (option: OptionsTypes) => void;
};

export default DropDownListProps;
