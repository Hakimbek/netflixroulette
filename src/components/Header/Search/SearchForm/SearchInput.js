import styled from "styled-components";

const SearchInput = styled.input.attrs(() => ({
  type: "text",
  placeholder: "What do you want to watch?",
}))`
  width: 700px;
  height: 50px;
  padding-left: 10px;
  border: none;
  border-radius: 5px;
  outline: none;
  background-color: #232323;
  color: white;
  font-size: 20px;
`;

export default SearchInput;
