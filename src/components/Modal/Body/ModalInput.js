import styled from "styled-components";

const ModalInput = styled.input.attrs((props) => ({
  type: "text",
  placeholder: props.placeholder,
}))`
  width: ${(props) => props.width};
  height: 40px;
  padding-left: 10px;
  border: none;
  border-radius: 5px;
  outline: none;
  background-color: #323232;
  color: white;
  font-size: 18px;
`;

export default ModalInput;
