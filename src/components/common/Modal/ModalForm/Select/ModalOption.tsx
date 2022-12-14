import styles from "./selectGenreInput.module.css";

type ModalOptionPropsType = {
  optionName: string;
};

function ModalOption({ optionName }: ModalOptionPropsType) {
  return (
    <div className={styles.genreOption}>
      <input type="checkbox" />
      <div>{optionName}</div>
    </div>
  );
}

export default ModalOption;
