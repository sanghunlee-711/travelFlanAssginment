import React from "react";
import styled from "styled-components";
import SubmitButton from "../../Components/Button/SubmitButton";
import QuitButton from "../../Components/Button/QuitButton";

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

        <SubmitButton onClick={uploadNewOne}>Upload</SubmitButton>
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

const InputTitle = styled.input`
  width: 80%;
  height: 32px;
  margin: 5px;
  padding-left: 10px;
  border: 1px solid black;
  border-radius: 10px;
  font-size: 1rem;
`;

const UploadWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  position: absolute;
  top: 35vh;
  left: 35vw;
  width: 30vw;
  border-radius: 0.5rem;
  background-color: white;
`;

export default Upload;
