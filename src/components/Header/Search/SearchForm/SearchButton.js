import styled from "styled-components";

const SearchButton = styled.button`
  width: 200px;
  height: 50px;
  border: none;
  border-radius: 5px;
  background-color: #f65261;
  color: white;
  font-size: 20px;
  cursor: pointer;
  &:hover {
    background-color: #e04b57;
  }
  &:active {
    background-color: #c73e4a;
  }
`;

export default SearchButton;
