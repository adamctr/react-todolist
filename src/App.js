import "./App.css";
import React from "react";
import styled, { css } from "styled-components";
import ToDoElements from "./ToDoElements";
import PopUpForm from "./components/PopUpForm";

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
      </Header>

      <Main>
        {/* <PopUpForm handleClose={() => {}} content={<div>
          <h2>Title</h2>
          <p>This is sample</p>
        </div>}></PopUpForm> */}
        <ToDoElements></ToDoElements>
      </Main>
    </div>
  );
}

export default App;
