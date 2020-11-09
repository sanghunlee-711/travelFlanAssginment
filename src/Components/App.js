import React, { Component } from "react";
import styled from "styled-components";

class App extends Component {
  render() {
    return (
      <div>
        <Check>My React HEllo</Check>
      </div>
    );
  }
}

export default App;

const Check = styled.div`
  color: red;
`;
