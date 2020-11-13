import React, { useEffect, useState } from "react";
import styled from "styled-components";

function Nav({ togglingUpload, togglingLogin, loginStatus }) {
  return (
    <NavContainer>
      <NavWrapper>
        <Logo />
        <div>
          <LoginText onClick={togglingLogin}>
            {loginStatus ? "Logout" : "Login"}
          </LoginText>
          <UpLoadText onClick={togglingUpload}>Upload</UpLoadText>
        </div>
      </NavWrapper>
    </NavContainer>
  );
}

export default Nav;

const NavContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 82px;
  padding: 0 30px;
  background-color: #fff;
`;

const NavWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 85vw;
  margin: auto;
`;

const Logo = styled.a`
  display: block;
  width: 129px;
  height: 76px;
  margin-right: 30px;
  background: url("https://marketplace.travelflan.com/img/logo2.f43e83b3.png")
    50% no-repeat;
  background-size: 100%;
  cursor: pointer;
`;

const LoginText = styled.span`
  margin-left: 30px;
  line-height: 60px;
  font-weight: 600;
  font-family: Helvetica, Tahoma, Arial, sans-serif;
  color: #666;
  cursor: pointer;
  &:hover {
    transition: color 0.5s ease-in-out;
    color: #fe5b60;
  }
`;

const UpLoadText = styled(LoginText)`
  &:hover {
    transition: all 0.5s ease-in-out;
    color: blue;
  }
`;
