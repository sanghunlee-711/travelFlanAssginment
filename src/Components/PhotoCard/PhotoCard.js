import React from "react";
import styled from "styled-components";

function PhotoCard(props) {
  const { id, title, DeleteOne, userId, togglingChange } = props;

  return (
    <PhotoCardContainer>
      <img src={`https://via.placeholder.com/220x220?text=${title}`} />
      <TextWrapper>
        <UpperContents>
          <PhotoId>{id}</PhotoId>
          <UserId>{userId}</UserId>
          <ButtonWrapper>
            <DeleteButton onClick={DeleteOne}>Delete</DeleteButton>
            <ChangeButton onClick={() => togglingChange(id, title, userId)}>
              Change
            </ChangeButton>
          </ButtonWrapper>
        </UpperContents>
        <PhotoTitle>{title}</PhotoTitle>
      </TextWrapper>
    </PhotoCardContainer>
  );
}

const UpperContents = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1% 0;
`;

const PhotoCardContainer = styled.div`
  img {
    width: 100%;
  }
  width: calc(100vw / 6);
  margin: 10px;
`;
const TextWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 5px;
`;

const DeleteButton = styled.button`
  color: black;
  &:hover {
    color: red;
  }
`;
const ChangeButton = styled.button`
  color: black;
  &:hover {
    color: blue;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const PhotoId = styled.span`
  font-size: 22px;
  color: #000;
`;

const UserId = styled(PhotoId)`
  /* margin-left: 10px; */
`;

const PhotoTitle = styled.span`
  height: 36px;
  line-height: 18px;
  font-size: 20px;
  margin: 6px 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #000;
`;

export default PhotoCard;
