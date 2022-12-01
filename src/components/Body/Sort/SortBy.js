import React, { useState } from "react";
import styled from "styled-components";
import select from "../../../../assets/image/select.png";
import styles from "./sort.module.css";

const DropDownHeader = styled("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 550px;
  height: 48px;
  padding: 0 20px;
  border-bottom: 2px solid #424242;
  background-color: transparent;
  color: white;
  font-size: 20px;
  cursor: pointer;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

const DropDownListContainer = styled("div")``;

const DropDownList = styled("div")`
  width: 240px;
  position: absolute;
  z-index: 2;
  right: 10px;
  margin-top: 25px;
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

const options = ["TITLE", "RELEASE DATE", "RATING", "RUNTIME"];

export default function SortBy() {
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
      <button className={styles.date_text}>SORT BY</button>
      <DropDownHeader onClick={toggling}>
        {selectedOption || "RELEASE DATE"}
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

// function Date() {
//   return (
//     <>
//       <button className={styles.date_text}>SORT BY RELEASE DATE</button>
//       <button className={styles.date_button}>
//         <img src={select} alt="select" />
//       </button>
//     </>
//   );
// }
//
// export default Date;
