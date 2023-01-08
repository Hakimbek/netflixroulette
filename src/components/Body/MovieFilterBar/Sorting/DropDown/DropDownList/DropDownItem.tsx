import styles from "../dropDown.module.css";

type DropDownItemPropsType = {
  children: string;
  handleSelectedOption: (option: string) => void;
};

function DropDownItem({
  children,
  handleSelectedOption,
}: DropDownItemPropsType) {
  return (
    <div
      className={styles.dropDown_item}
      onClick={() => handleSelectedOption(children)}
    >
      {children}
    </div>
  );
}

export default DropDownItem;
