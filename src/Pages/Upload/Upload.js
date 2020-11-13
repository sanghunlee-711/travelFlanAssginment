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
  ${(props) => props.theme.ModalContainer()}
  display: ${(props) => (props.toggleUpload ? "static" : "none")};
`;

const UploadWrapper = styled.div`
  ${(props) => props.theme.ModalWrapper()}
`;

const UploadTitle = styled.span`
  ${(props) => props.theme.ModalTitle()}
`;

const InputTitle = styled.input`
  ${(props) => props.theme.ModalInput()}
`;

export default Upload;
