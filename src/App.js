import "./App.css";
import Sections from "./components/Section";
import ButtonPlus from "./components/ButtonPlus";
import React from "react";

function App() {
  const myRef = React.createRef();

  const handleClick = () => {
    myRef.current.addSection();
  };
  console.log(myRef);
  return (
    <div className="App">
      <header>
        <h1>To-do List</h1>
        <p>On fait quoi aujourd'hui ?</p>
      </header>

      <div className="main">
        <div className="container">
          <Sections ref={myRef}></Sections>
        </div>

        <div className="footer" onClick={() => handleClick()}>
          <ButtonPlus></ButtonPlus>
          <p>Ajouter une section</p>
        </div>
      </div>
    </div>
  );
}

export default App;
