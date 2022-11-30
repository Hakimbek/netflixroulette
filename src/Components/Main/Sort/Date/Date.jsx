import Text from "./Text/Text";
import Button from "./Button/Button";
import "./date.css";

function Date() {
  return (
    <div className="date">
      <Text>SORT BY</Text>
      <Button>Release Date</Button>
    </div>
  );
}

export default Date;
