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
    changeId,
    changeTitle,
    cardModify,
    toggleChange,
    togglingChange,
  } = props;
  return (
    <ChangeContainer toggleChange={toggleChange}>
      <UploadWrapper>
        <InputWrapper>
          <InputTitle
            type="text"
            placeholder=" Type Changed title"
            value={changedUserId}
            onChange={changeUserId}
          />
          <InputTitle
            type="text"
            placeholder=" Type Changed Id"
            value={changedTitle}
            onChange={changeTitle}
          />
        </InputWrapper>
        <ChangeButton
          onClick={() => cardModify(changedId, changedTitle, changedUserId)}
        >
          Change
        </ChangeButton>
        <QuitButton onClick={togglingChange}>Quit</QuitButton>
      </UploadWrapper>
    </ChangeContainer>
  );
}

//changedId 는 인덱스 숫자고 userId를 따로 받아서 수정용으로 사용해야할듯

const ChangeContainer = styled.section`
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(217, 188, 186, 0.25);
  display: ${(props) => (props.toggleChange ? "static" : "none")};
`;

const InputWrapper = styled.div``;

const QuitButton = styled.button`
  position: absolute;
  right: 1em;
  top: 1em;
`;

const InputTitle = styled.input`
  width: 60%;
  height: 4vh;
  border: 1px solid black;
  border-radius: 0.5em;
  font-size: 1rem;
`;

const ChangeButton = styled.button`
  margin-left: 10px;
  font-size: 1rem;
  &:hover {
    transition: all 0.5s ease-in-out;
    color: red;
  }
`;

const UploadWrapper = styled.div`
  background-color: white;
  position: absolute;
  top: 35vh;
  left: 35vw;
  width: 30vw;
  height: 30vh;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem;
`;

export default Change;
