import React from "react";
import styled from "styled-components";
import Task from "./components/Task";
import { useState } from "react";
import Section from "./components/Section";
import ButtonCreate from "./components/ButtonCreate";

const ToDoElementsWrapper = styled.div`
  display: flex;
  width: 80%;
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
    { id: 2, sectionRef: 1, desc: "Acheter du fromage" },
    { id: 3, sectionRef: 2, desc: "Acheter du pain" },
  ]);

  const [sections, setSections] = useState([
    { id: 1, title: "titre 1" },
    { id: 2, title: "titre 2" },
  ]);

  const createSection = (todo) => {
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
        {sections.map((section) => (
          <Section key={section.id}>
            {section.title}
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
