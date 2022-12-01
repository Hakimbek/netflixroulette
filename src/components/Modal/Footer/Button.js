import styled from "styled-components";

const Button = styled.button`
  width: 200px;
  height: 50px;
  margin: 10px;
  border: 1px solid ${(props) => props.borderColor};
  border-radius: 5px;
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.color};
  font-size: 20px;
  cursor: pointer;
`;

export default Button;
