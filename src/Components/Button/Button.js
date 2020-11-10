import React from "react";
import styled from "styled-components";

function Button(props) {
  const { text } = props;
  return <ButtonContainer>{text || "Button"}</ButtonContainer>;
}

const ButtonContainer = styled.button`
  top: 160px;
  width: 260px;
  height: 65px;
  line-height: 65px;
  font-size: 26px;
  left: 50%;
  border-radius: 12px;
  background: #e1e1e1;
  text-align: center;
  color: white;
  cursor: pointer;
  transition: all 0.5 ease-in-out;
  &:hover {
    color: #e1e1e1;
    background: #fff;
  }
`;

export default Button;
