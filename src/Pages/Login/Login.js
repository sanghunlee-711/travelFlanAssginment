import React, { useEffect, useState } from "react";
import styled from "styled-components";
import SubmitButton from "../../Components/Button/SubmitButton";
import QuitButton from "../../Components/Button/QuitButton";

function Login(props) {
  const {
    toggleLogin,
    togglingLogin,
    loginId,
    loginPw,
    saveLoginId,
    saveLoginPw,
    sampleUserData,
    doLogin,
    emailValidation,
  } = props;

  return (
    <LoginContainer toggleLogin={toggleLogin}>
      <LoginWrapper>
        <LoginTitle>Login</LoginTitle>
        <EmailInput
          type="text"
          placeholder="Email"
          value={loginId}
          onChange={saveLoginId}
        />
        <Validation emailValidation={emailValidation}>
          Please, type in Email form
        </Validation>

        <PassWordInput
          type="password"
          placeholder="Password"
          value={loginPw}
          onChange={saveLoginPw}
        />
        <SubmitButton
          onClick={doLogin}
          disabled={
            emailValidation || loginId.length <= 5 || loginPw.length <= 5
          }
        >
          Login
        </SubmitButton>
        <QuitButton onClick={togglingLogin}>Quit</QuitButton>
      </LoginWrapper>
    </LoginContainer>
  );
}

const LoginContainer = styled.section`
  ${(props) => props.theme.ModalContainer()}
  display: ${(props) => (props.toggleLogin ? "static" : "none")};
`;

const LoginWrapper = styled.div`
  ${(props) => props.theme.ModalWrapper()}
`;
const LoginTitle = styled.span`
  ${(props) => props.theme.ModalTitle()}
`;

const EmailInput = styled.input`
  ${(props) => props.theme.ModalInput()}
`;

const PassWordInput = styled(EmailInput)`
  margin-bottom: 10px;
`;

const Validation = styled.div`
  display: ${(props) => (props.emailValidation ? "static" : "none")};
  width: 80%;
  padding-left: 10px;
  color: red;
  text-align: left;
`;

export default Login;
