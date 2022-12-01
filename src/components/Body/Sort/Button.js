import styled from "styled-components";

const Button = styled.button`
  height: 50px;
  padding: 0 15px;
  border: none;
  border-bottom: 2px solid #424242;
  background-color: transparent;
  color: white;
  font-size: 20px;
  cursor: pointer;
  &:hover {
    border-bottom: 2px solid red;
  }
`;

export default Button;
