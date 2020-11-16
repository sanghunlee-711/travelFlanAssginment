import React from "react";
import ReactDOM from "react-dom";
import Router from "./Routes";
import GlobalStyle from "./Styles/GlobalStyle";
import theme from "./Styles/ThemeProvider";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./store/reducers";

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider key={theme} theme={theme}>
      <Router />
      <GlobalStyle />
    </ThemeProvider>
  </Provider>,
  document.getElementById("app")
);
