import { SpinnerTypes } from "../../../types/spinner.types";
import "./spinner.css";

function Spinner({ text = "", size = "5em" }: SpinnerTypes) {
  return (
    <div className="spinner">
      <h4>{text}</h4>
      <div className="loader" style={{ height: size, width: size }} />
    </div>
  );
}

export default Spinner;
