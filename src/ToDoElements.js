import React from "react";
import styled from "styled-components";
import Task from "./components/Task";
import { useState } from "react";
import Section from "./components/Section";
import ButtonCreate from "./components/ButtonCreate";
import { v4 as uuidv4 } from "uuid";

const ToDoElementsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1440px;
  height: 100%;
  margin: auto;
  justify-content: space-evenly;
  align-items: center;
  gap: 10px;
`;

const ButtonCreateWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Title = styled.h2`
  width: 100%;
  border-radius: 30px 15px;
  height: 50px;
  margin: 10px auto;
  background: #e3e3e3;
  box-shadow: inset 6px 6px 12px #a6a6a6, inset -6px -6px 12px #ffffff;
  text-align: center;
  font-size: 20px;
  padding: 17px;
  transition: background-color 3s ease;
`;

const ButtonPlus = styled.button`
  width: 35px;
  height: 35px;
  font-size: 20px;
  margin-left: 20px;
  border: none;
  border-radius: 50px;
  background: linear-gradient(145deg, #f3f3f3, #cccccc);
  box-shadow: 5px 5px 10px #c1c1c1, -5px -5px 10px #ffffff;
  cursor: pointer;
`;

const ToDoElements = () => {
  //Créer Task et Section, les regroupe

  const [todos, setTodos] = useState([
    { id: 1, sectionRef: 1, desc: "10:30AM | Buy Bread" },
    { id: 2, sectionRef: 2, desc: "Chill ~ Chill ~" },
    { id: 3, sectionRef: 2, desc: "Chill ~" },
  ]);

  const [sections, setSections] = useState([
    { id: 1, title: "Today" },
    { id: 2, title: "Tomorrow" },
  ]);

  const [toggleSection, setToggleSection] = React.useState(true);
  const [toggleTask, setToggleTask] = React.useState(true);

  function toggleInputSection(e) {
    const toggledId = parseInt(e.target.dataset.id);
    console.log("toggle input sur ", toggledId);
    setToggleSection(parseInt(toggledId));
  }

  function toggleInputTask(e) {
    const toggledId = parseInt(e.target.dataset.id);
    console.log("toggle input sur ", toggledId);
    setToggleTask(parseInt(toggledId));
  }

  const modifyTitleSection = (e) => {
    const sectionId = parseInt(e.target.dataset.id);
    const value = e.target.value;

    let newSections = [...sections];

    newSections[newSections.findIndex((e) => e.id === sectionId)].title = value;

    setSections(newSections);
  };

  const modifyTodoDesc = (e) => {
    const todoId = parseInt(e.target.dataset.id);
    const value = e.target.value;

    let newTodos = [...todos];

    newTodos[newTodos.findIndex((e) => e.id === todoId)].desc = value;

    setTodos(newTodos);
  };

  const createTodo = (e) => {
    const sectionRef = e.target.dataset.id;
    const newTodos = [...todos];
    const newTodo = {
      id: todos[todos.length - 1].id + 1,
      sectionRef: parseInt(sectionRef),
      desc: "",
    };
    newTodos.push(newTodo);
    setTodos(newTodos);
    console.log(todos);
  };

  return (
    <>
      <ButtonCreateWrapper>
        <ButtonCreate
          name="section"
          setSections={setSections}
          sections={sections}
        >
          Create a Section
        </ButtonCreate>
      </ButtonCreateWrapper>

      <ToDoElementsWrapper>
        {sections.map((section, index) => (
          <Section key={section.id}>
            {/* <h2>{section.title}</h2> */}

            {/* Changer titre dynamiquement */}
            {toggleSection !== section.id ? (
              <Title onClick={toggleInputSection} data-id={section.id}>
                {section.title}
              </Title>
            ) : (
              <input
                className="title"
                type="text"
                value={section.title}
                data-id={section.id}
                onChange={modifyTitleSection}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === "Escape") {
                    setToggleSection(null);
                    event.preventDefault();
                    event.stopPropagation();
                  }
                }}
              />
            )}

            {/* On affiche le todo dans sa section attribuée + Changement dynamique des Todo*/}
            {todos.map((todo) =>
              todo.sectionRef === section.id ? (
                toggleTask !== todo.id ? (
                  <Task
                    toggleInput={toggleInputTask}
                    key={todo.id}
                    dataId={todo.id}
                    placeholder="Click to change"
                  >
                    {todo.desc}
                  </Task>
                ) : (
                  <input
                    className="task"
                    placeholder="Click to change"
                    key={todo.id}
                    type="text"
                    value={todo.desc}
                    data-id={todo.id}
                    onChange={modifyTodoDesc}
                    onKeyDown={(event) => {
                      if (event.key === "Enter" || event.key === "Escape") {
                        setToggleTask(null);
                        event.preventDefault();
                        event.stopPropagation();
                      }
                    }}
                  />
                )
              ) : (
                ""
              )
            )}
            <ButtonPlus data-id={section.id} onClick={(e) => createTodo(e)}>
              +
            </ButtonPlus>
          </Section>
        ))}
      </ToDoElementsWrapper>
    </>
  );
};
export default ToDoElements;
