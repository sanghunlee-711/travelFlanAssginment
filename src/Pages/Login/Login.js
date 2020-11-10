import React, { useEffect, useState } from "react";
import styled from "styled-components";

function Login() {
  const [pictureData, setPictureData] = useState({});

  // useEffect(() => {
  //   fetch("https://via.placeholder.com/150", {
  //     method: "GET",
  //     headers: {},
  //     mode: "no-cors",
  //   })
  //     .then((res) => res)
  //     .then((res) => console.log(res));
  // }, []);

  return (
    <LoginContainer>
      <LoginWrapper>
        <div>
          <span>Login</span>
          <button>Button</button>
        </div>
        <Divider />
        <section>
          <input type="text" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button>Login</button>
        </section>
      </LoginWrapper>
    </LoginContainer>
  );
}

const LoginContainer = styled.section`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
`;

const LoginWrapper = styled.div`
  background-color: white;
  position: absolute;
  top: 30vh;
  left: 20vw;
`;
const Divider = styled.div`
  width: 100%;
  height: 1px;
`;

export default Login;
