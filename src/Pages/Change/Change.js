import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { useSelector, useDispatch } from "react-redux";
import { addOne } from "../../store/actions";

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
        <ChangeButton
          onClick={() => cardModify(changedId, changedTitle, changedUserId)}
        >
          Change {changedId}th Card
        </ChangeButton>
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

const QuitButton = styled.button`
  position: absolute;
  right: 1em;
  top: 1em;
`;

const InputTitle = styled.input`
  border: 1px solid black;
  border-radius: 0.5em;
  font-size: 1rem;
  height: 32px;
  border: 1px solid black;
  border-radius: 10px;
  width: 100%;
  margin: 5px 0;
`;

const ChangeButton = styled.button`
  font-size: 1rem;
  width: 80%;
  height: 40px;
  margin-top: 5px;
  margin-bottom: 40px;
  border: 1px solid black;
  border-radius: 10px;
  &:hover {
    transition: all 0.5s ease-in-out;
    color: white;
    background-color: black;
  }
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
`;

export default Change;
