import styled from "styled-components";

const SubmitButton = styled.button`
  width: 80%;
  height: 40px;
  margin-bottom: 50px;
  border: 1px solid black;
  border-radius: 10px;
  font-size: 1rem;

  &:hover {
    transition: all 0.5s ease-in-out;
    color: white;
    background-color: black;
  }
`;

export default SubmitButton;
