import logo from "./logo.svg";
import "./App.css";
import Section from "./components/Section";
import ButtonAddSection from "./components/ButtonAddSection";

function App() {
  return (
    <div className="App">
      <header>
        <h1>To-do List</h1>
        <p>On fait quoi aujourd'hui ?</p>
      </header>

      <div className="main">
        <div className="container">
          <Section></Section>
        </div>
        <ButtonAddSection />
      </div>
    </div>
  );
}

export default App;
