import styled from "styled-components";
const QuitButton = styled.button`
  position: absolute;
  right: 1em;
  top: 1em;
  &:hover {
    transition: all 0.5s ease-in-out;
    color: red;
  }
`;
export default QuitButton;
