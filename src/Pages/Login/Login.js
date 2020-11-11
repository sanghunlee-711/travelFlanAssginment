import React, { useEffect, useState } from "react";
import styled from "styled-components";

//fetch와 동시에 로컬스토리지에 token에 저장한다
// 새로고침 시 로컬스토리지 확인해서 값 있으면 로그인->로그아웃 버튼으로 변경하기
// 회원가입페이지 하나 빠르게 만들어서 거기에서 타이핑만해서 만들기로 ?
// 아니면 로그인 진행하고 로컬스토리지에 저장?

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
        <Divider />
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

        <LoginButton onClick={doLogin}>Login</LoginButton>
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
  color: red;
  text-align: left;
  width: 80%;
  padding-left: 10px;
  display: ${(props) => (props.emailValidation ? "static" : "none")};

  /* display: none; */
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

const LoginButton = styled.button`
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

const LoginWrapper = styled.div`
  background-color: white;
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

const Divider = styled.div`
  width: 100%;
  height: 1px;
`;

export default Login;
