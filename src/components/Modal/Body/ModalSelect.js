import React, { Component } from "react";
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

class ModalSelect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      selectedOption: null,
      options: ["Documentary", "Horror", "Crime", "Comedy"],
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
        <DropDownHeader onClick={this.toggling}>
          {this.state.selectedOption || "Documentary"}
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

export default ModalSelect;
