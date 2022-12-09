import { useState } from "react";
import SelectedGenre from "./SelectedGenre/SelectedGenre";
import GenreOptionsList from "./GenreOptions/GenreOptionsList";

function SelectGenreInput() {
  const options = ["Documentary", "Comedy", "Horror", "Crime"];
  const [toggle, setToggle] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string>(options[0]);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const handleSelectedOption = (option: string) => {
    setSelectedOption(option);
    handleToggle();
  };

  return (
    <div>
      <SelectedGenre
        handleToggle={handleToggle}
        selectedOption={selectedOption}
      />
      <GenreOptionsList
        options={options}
        toggle={toggle}
        handleSelectedOption={handleSelectedOption}
      />
    </div>
  );
}

export default SelectGenreInput;
