import React from "react";
import styled from "styled-components";

function Button(props) {
  const { text } = props;
  return <ButtonContainer>{text || "Button"}</ButtonContainer>;
}

const ButtonContainer = styled.button`
  width: 260px;
  height: 65px;
  text-align: center;
  color: white;
  font-size: 1.5rem;
  border-radius: 12px;
  background: #e1e1e1;

  cursor: pointer;
  transition: all 0.5s ease-in-out;
  &:hover {
    color: #e1e1e1;
    background: #fff;
  }
`;

export default Button;
