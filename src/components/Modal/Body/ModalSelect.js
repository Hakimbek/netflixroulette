import React, { useState } from "react";
import styled from "styled-components";
import select from "../../../../assets/image/select.png";

const DropDownHeader = styled("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 500px;
  height: 44px;
  padding-left: 10px;
  padding-right: 2px;
  border-radius: 5px;
  background-color: #323232;
  color: white;
  font-size: 18px;
  cursor: pointer;
`;

const DropDownListContainer = styled("div")``;

const DropDownList = styled("div")`
  position: absolute;
  width: 515px;
  background: #232323;
  color: white;
  font-size: 18px;
`;

const ListItem = styled("div")`
  margin: 10px;
  padding: 10px;
  cursor: pointer;

  &:hover {
    background-color: #f65261;
  }
`;

const options = ["Documentary", "Horror", "Crime", "Comedy"];

export default function ModalSelect() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = (value) => () => {
    setSelectedOption(value);
    setIsOpen(false);
    console.log(selectedOption);
  };

  return (
    <>
      <DropDownHeader onClick={toggling}>
        {selectedOption || "Documentary"}
        <img src={select} alt="close" />
      </DropDownHeader>
      {isOpen && (
        <DropDownListContainer>
          <DropDownList>
            {options.map((option) => (
              <ListItem onClick={onOptionClicked(option)} key={Math.random()}>
                {option}
              </ListItem>
            ))}
          </DropDownList>
        </DropDownListContainer>
      )}
    </>
  );
}
