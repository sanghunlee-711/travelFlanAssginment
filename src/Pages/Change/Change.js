import React, { useState, useEffect } from "react";
import styled from "styled-components";
import SubmitButton from "../../Components/Button/SubmitButton";
import QuitButton from "../../Components/Button/QuitButton";

function Change(props) {
  const {
    changedTitle,
    changedId,
    changedUserId,
    changeUserId,
    changeTitle,
    cardModify,
    toggleChange,
    togglingChange,
  } = props;

  const ChangeNumberTitle = (changedId) => {
    if (changedId === 1) {
      return changedId + "st";
    } else if (changedId === 2) {
      return changedId + "nd";
    } else if (changedId === 3) {
      return changedId + "rd";
    } else {
      return changedId + "th";
    }
  };

  return (
    <ChangeContainer toggleChange={toggleChange}>
      <ChangeWrapper>
        <ChangeTitle>Change</ChangeTitle>
        <InputWrapper>
          <InputTitle
            type="text"
            placeholder=" Type Changed Id"
            value={changedUserId}
            onChange={changeUserId}
          />
          <InputTitle
            type="text"
            placeholder=" Type Changed Title"
            value={changedTitle}
            onChange={changeTitle}
          />
        </InputWrapper>
        <SubmitButton
          onClick={() => cardModify(changedId, changedTitle, changedUserId)}
        >
          Change {ChangeNumberTitle(changedId)} Card
        </SubmitButton>
        <QuitButton onClick={togglingChange}>Quit</QuitButton>
      </ChangeWrapper>
    </ChangeContainer>
  );
}

const ChangeTitle = styled.span`
  font-size: 24px;
  line-height: 54px;
`;

const ChangeContainer = styled.section`
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(217, 188, 186, 0.25);
  display: ${(props) => (props.toggleChange ? "static" : "none")};
`;

const InputWrapper = styled.div`
  width: 80%;
`;

const InputTitle = styled.input`
  padding: 0 5px;
  border: 1px solid black;
  border-radius: 0.5em;
  font-size: 1rem;
  height: 32px;
  border: 1px solid black;
  border-radius: 10px;
  width: 100%;
  margin: 5px 0;
`;

const ChangeWrapper = styled.div`
  background-color: white;
  position: absolute;
  top: 35vh;
  left: 35vw;
  width: 30vw;
  height: 30vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem;
  @media only screen and (max-width: 1000px) {
    top: 82px;
    left: 0;
    width: 100vw;
    height: 30vh;
  }
`;

export default Change;
