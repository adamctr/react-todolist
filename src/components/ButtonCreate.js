import React from "react";
import styled from "styled-components";

const ButtonCreateWrapper = styled.button`
  background: white;
  padding: 10px;
  margin: 10px 10px 35px 10px;
  cursor: pointer;
  border: none;
  border-radius: 10px;
  background: linear-gradient(145deg, #f3f3f3, #cccccc);
  box-shadow: 5px 5px 5px #bababa, -5px -5px 5px #ffffff;
`;

export default function ButtonCreate(props) {
  const { sections, setSections } = props;
  const { todos, setTodos } = props;

  const createSection = (title) => {
    const newSections = [...sections];
    const newSection = {
      id: sections[sections.length - 1].id + 1,
      title: title,
    };
    newSections.push(newSection);
    console.log(newSections);
    setSections(newSections);
  };

  const createTodo = (e) => {
    const sectionRef = e.target.dataset.id;
    const newTodos = [...todos];
    const newTodo = {
      id: todos[todos.length - 1].id + 1,
      sectionRef: sectionRef,
      desc: "Double Click to Change",
    };
    newTodos.push(newTodo);
    setTodos(newTodos);
  };

  return (
    <ButtonCreateWrapper
      onClick={props.name == "section" ? () => createSection() : ""}
    >
      {props.children}
    </ButtonCreateWrapper>
  );
}
