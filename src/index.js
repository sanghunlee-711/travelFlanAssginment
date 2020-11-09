import React from "react";
import ReactDOM from "react-dom";
import Router from "./Routes";
import GlobalStyle from "./Styles/GlobalStyle";
import theme from "./Styles/ThemeProvider";
import { ThemeProvider } from "styled-components";

ReactDOM.render(
  <ThemeProvider key={theme} theme={theme}>
    <Router />
    <GlobalStyle />
  </ThemeProvider>,
  document.getElementById("app")
);
