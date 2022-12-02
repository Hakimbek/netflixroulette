import React, { Component } from "react";
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

class SortBy extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      selectedOption: null,
      options: ["TITLE", "RELEASE DATE", "RATING", "RUNTIME"],
    };
  }

  toggling = () => {
    this.setState({ ...this.state, isOpen: !this.state.isOpen });
  };

  onOptionClicked = (value) => {
    this.setState({
      ...this.state,
      isOpen: !this.state.isOpen,
      selectedOption: value,
    });
  };

  render() {
    return (
      <>
        <button className={styles.date_text}>SORT BY</button>
        <DropDownHeader onClick={this.toggling}>
          {this.state.selectedOption || "RELEASE DATE"}
          <img src={select} alt="close" />
        </DropDownHeader>
        {this.state.isOpen && (
          <DropDownListContainer>
            <DropDownList>
              {this.state.options.map((option) => (
                <ListItem
                  onClick={() => this.onOptionClicked(option)}
                  key={Math.random()}
                >
                  {option}
                </ListItem>
              ))}
            </DropDownList>
          </DropDownListContainer>
        )}
      </>
    );
  }
}

export default SortBy;
