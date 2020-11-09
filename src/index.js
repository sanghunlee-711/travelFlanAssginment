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
//reducer는 sotre를 업데이트시키는 함수이다 그러니 두개 연결이 필요
//provider는 컴포넌트와 스토어의 연결을 위함
ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider key={theme} theme={theme}>
      <Router />
      <GlobalStyle />
    </ThemeProvider>
  </Provider>,
  document.getElementById("app")
);
