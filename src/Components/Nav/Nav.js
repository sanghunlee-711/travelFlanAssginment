import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Login from "../../Pages/Login/Login";
import Upload from "../../Pages/Upload/Upload";

import { Link } from "react-router-dom";

function Nav() {
  const [toggleLogin, setToggleLogin] = useState(false);
  const [toggleUpload, setToggleUpload] = useState(false);

  const togglingUpload = (e) => {
    setToggleUpload(!toggleUpload);
    console.log(toggleUpload);
    // if (toggleUpload === true) {
    //   window.addEventListener("DOMMouseScroll", e.preventDefault, false);
    // } else {
    //   window.removeEventListener("DOMMouseScroll", e.preventDefault, false);
    // }
  };

  return (
    <NavContainer>
      <NavWrapper>
        <Logo />
        <div>
          <LoginText>Login</LoginText>
          <UpLoadText onClick={togglingUpload}>Upload</UpLoadText>
        </div>
      </NavWrapper>
      {/* <Login /> */}
      <Upload toggleUpload={toggleUpload} togglingUpload={togglingUpload} />
    </NavContainer>
  );
}

export default Nav;

const NavContainer = styled.nav`
  justify-content: space-evenly;
  width: 100vw;
  height: 82px;
  position: fixed;
  top: 0;
  left: 0;
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
`;

const LoginText = styled.span`
  color: #666;
  font-weight: 600;
  margin-left: 30px;
  line-height: 60px;
  font-family: Helvetica, Tahoma, Arial, sans-serif;
  cursor: pointer;
`;

const UpLoadText = styled(LoginText)`
  &:hover {
    transition: all 0.5s ease-in-out;
    color: blue;
  }
`;
