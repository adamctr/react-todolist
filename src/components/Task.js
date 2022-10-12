import React from "react";
import styled from "styled-components";
import { useState } from "react";

const TaskWrapper = styled.div`
  position: relative;
  width: 100%;
  min-height: 60px;
  padding: 17px;
  margin: 20px auto;
  background: #e3e3e3;
  box-shadow: 5px 5px 10px #a6a6a6, -5px -5px 10px #ffffff;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.1s ease;

  & > p {
    overflow-wrap: break-word;
    font-size: 13px;
    font-weight: 400;
    text-align: initial;
  }

  &:hover {
    border-radius: 10px;
    background: #e3e3e3;
    box-shadow: 9px 9px 18px #cccccc, -9px -9px 18px #fafafa;
    transform: scale(0.95, 0.95);
  }
`;

const CloseTask = styled.div`
  width: 15px;
  height: 15px;
  position: absolute;
  top: -2.5px;
  right: -2.5px;
  border-radius: 50px;
  background: linear-gradient(145deg, #f3f3f3, #cccccc);
  box-shadow: 5px 5px 9px #c1c1c1, -5px -5px 9px #ffffff;

  &::before {
    position: absolute;
    font-weight: 600;
    font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
      "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
    content: "x";
    transform: translate(25%, -23%);
  }
`;

export default function Task(props) {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  const deleteTask = (e) => {
    const dataId = parseInt(e.target.dataset.id);
    let newTodos = [...props.todos];
    newTodos = newTodos.filter((todo, index) => todo.id !== dataId);
    props.setTodos(newTodos);
  };
  return (
    <TaskWrapper
      data-id={props.dataId}
      onClick={(e) => props.toggleInput(e)}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      {isHovering && (
        <CloseTask
          data-id={props.dataId}
          onClick={deleteTask}
          className="close"
        ></CloseTask>
      )}

      {props.children}
    </TaskWrapper>
  );
}
