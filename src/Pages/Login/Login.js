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
        <LoginText>Login</LoginText>
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
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(217, 188, 186, 0.25);
  display: ${(props) => (props.toggleLogin ? "static" : "none")};
`;
const LoginText = styled.span`
  font-size: 24px;
  line-height: 54px;
`;
const Validation = styled.div`
  display: ${(props) => (props.emailValidation ? "static" : "none")};
  width: 80%;
  padding-left: 10px;
  color: red;
  text-align: left;
`;

const EmailInput = styled.input`
  height: 32px;
  border: 1px solid black;
  border-radius: 10px;
  width: 80%;
  margin: 5px;
  padding-left: 10px;
`;

const PassWordInput = styled(EmailInput)`
  margin-bottom: 10px;
`;

const LoginWrapper = styled.div`
  position: absolute;
  top: 35vh;
  left: 35vw;
  width: 560px;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-radius: 0.5rem;
  background-color: white;
  @media only screen and (max-width: 1000px) {
    top: 82px;
    left: 0;
    width: 100vw;
    height: 30vh;
  }
`;

export default Login;
