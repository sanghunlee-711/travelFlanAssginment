import React from "react";
import styled from "styled-components";

function Upload(props) {
  const {
    toggleUpload,
    togglingUpload,
    newPostTitle,
    handleChange,
    uploadNewOne,
  } = props;

  return (
    <UploadContainer toggleUpload={toggleUpload}>
      <UploadWrapper>
        <UploadTitle>Upload</UploadTitle>
        <InputTitle
          type="text"
          placeholder="Type new Post title"
          value={newPostTitle}
          onChange={handleChange}
        />
        <UploadButton onClick={uploadNewOne}>Upload</UploadButton>
        <QuitButton onClick={togglingUpload}>Quit</QuitButton>
      </UploadWrapper>
    </UploadContainer>
  );
}

const UploadContainer = styled.section`
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(217, 188, 186, 0.25);
  display: ${(props) => (props.toggleUpload ? "static" : "none")};
`;

const UploadTitle = styled.span`
  font-size: 24px;
  line-height: 54px;
`;

const QuitButton = styled.button`
  position: absolute;
  right: 1em;
  top: 1em;
  &:hover {
    transition: all 0.5s ease-in-out;
    color: red;
  }
`;

const InputTitle = styled.input`
  height: 32px;
  border: 1px solid black;
  border-radius: 10px;
  width: 80%;
  margin: 5px;
  padding-left: 10px;
  font-size: 1rem;
`;

const UploadButton = styled.button`
  font-size: 1rem;
  width: 80%;
  height: 40px;
  margin-bottom: 50px;
  border: 1px solid black;
  border-radius: 10px;
  &:hover {
    transition: all 0.5s ease-in-out;
    color: white;
    background-color: black;
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
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 0.5rem;
`;

export default Upload;
