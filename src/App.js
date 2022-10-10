import "./App.css";
import React from "react";
import styled, { css } from "styled-components";
import ToDoElements from "./ToDoElements";

const Main = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: space-evenly;
  padding: 20px;
`;

const Header = styled.header`
  text-align: center;
`;

function App() {
  return (
    <div className="App">
      <Header>
        <h1 style={{ textAlign: "center" }}>To-Do List</h1>
        <p style={{ textAlign: "center", fontSize: "15px" }}>
          Click and drop your task in your section if she feels alone ! (not
          yet)
        </p>
      </Header>

      <Main>
        <ToDoElements></ToDoElements>
      </Main>
    </div>
  );
}

export default App;
