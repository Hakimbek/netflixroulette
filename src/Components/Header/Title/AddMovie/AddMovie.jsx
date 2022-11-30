import styled from "styled-components";

const AddMovie = styled.button`
  width: 180px;
  height: 50px;
  border: none;
  border-radius: 5px;
  background-color: rgba(96, 96, 96, 0.68);
  color: #f65261;
  font-size: 20px;
  cursor: pointer;
  &:hover {
    background-color: rgba(96, 96, 96, 0.8);
  }
  &:active {
    background-color: rgba(96, 96, 96, 1);
  }
`;

export default AddMovie;