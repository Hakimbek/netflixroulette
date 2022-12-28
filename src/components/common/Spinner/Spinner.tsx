import "./spinner.css";

type SpinnerPropsType = {
  text: string;
  size?: string;
};

export const Spinner = ({ text = "", size = "5em" }: SpinnerPropsType) => {
  const header = text ? <h4>{text}</h4> : null;
  return (
    <div className="spinner">
      {header}
      <div className="loader" style={{ height: size, width: size }} />
    </div>
  );
};
