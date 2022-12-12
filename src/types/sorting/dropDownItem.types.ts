import { OptionsTypes } from "./options.types";

type DropDownItemProps = {
  children: OptionsTypes;
  handleSelectedOption: (option: OptionsTypes) => void;
};

export default DropDownItemProps;
