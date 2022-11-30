import Button from "./Button/Button";
import "./genre.css";

function Genre() {
  return (
    <div className="genre">
      <Button>ALL</Button>
      <Button>DOCUMENTARY</Button>
      <Button>COMEDY</Button>
      <Button>HORROR</Button>
      <Button>CRIME</Button>
    </div>
  );
}

export default Genre;
