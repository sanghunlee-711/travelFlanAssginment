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
  ${(props) => props.theme.ModalTitle()}
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
  width: 100%;
  height: 32px;
  padding: 0 5px;
  margin: 5px 0;
  border: 1px solid black;
  border-radius: 0.5em;
  font-size: 1rem;
  border: 1px solid black;
  border-radius: 10px;
`;

const ChangeWrapper = styled.div`
  ${(props) => props.theme.ModalWrapper()}
`;

export default Change;
