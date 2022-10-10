import React from "react";
import styled from "styled-components";
import Task from "./components/Task";
import { useState } from "react";
import Section from "./components/Section";
import ButtonCreate from "./components/ButtonCreate";

const ToDoElementsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  margin: auto;
  justify-content: space-evenly;
  align-items: center;
  border: 1px solid black;
`;

const ButtonCreateWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const ToDoElements = () => {
  //Créer Task et Section, les regroupe

  const [todos, setTodos] = useState([
    { id: 1, sectionRef: 1, desc: "Acheter du lait" },
    { id: 2, sectionRef: 3, desc: "Acheter du fromage" },
    { id: 3, sectionRef: 2, desc: "Acheter du pain" },
  ]);

  const [sections, setSections] = useState([
    { id: 1, title: "titre 1" },
    { id: 2, title: "titre 2" },
  ]);

  const [toggle, setToggle] = React.useState(true);
  function toggleInput() {
    setToggle(false);
  }

  const createSection = (section) => {
    const newSections = [...sections];
    newSections.push(section);
    setSections(newSections);
  };

  const modifyTitleSection = (e, id) => {};

  const createTodo = (todo) => {
    const newTodos = [...todos];
    newTodos.push(todo);
    setTodos(newTodos);
  };

  return (
    <>
      <ButtonCreateWrapper>
        <ButtonCreate>Create a Task</ButtonCreate>
        <ButtonCreate>Create a Section</ButtonCreate>
      </ButtonCreateWrapper>

      <ToDoElementsWrapper>
        {sections.map((section, index) => (
          <Section key={section.id}>
            <h2>{section.title}</h2>

            {/* Changer titre dynamiquement */}
            {/* {toggle ? (
              <h2 onDoubleClick={toggleInput}>{section.title}</h2>
            ) : (
              <input
                type="text"
                value={section.title}
                onChange={(e) => modifyTitleSection(e)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === "Escape") {
                    setToggle(true);
                    event.preventDefault();
                    event.stopPropagation();
                  }
                }}
              />
            )} */}
            {/* On affiche le todo dans sa section attribuée */}
            {todos.map((todo) =>
              todo.sectionRef === section.id ? (
                <Task key={todo.id} sectionRef={todo.sectionRef}>
                  {todo.desc}
                </Task>
              ) : (
                ""
              )
            )}
          </Section>
        ))}
      </ToDoElementsWrapper>
    </>
  );
};
export default ToDoElements;
