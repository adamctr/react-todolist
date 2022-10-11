import React from "react";
import styled from "styled-components";

const TaskWrapper = styled.div`
  width: 100%;
  min-height: 60px;
  padding: 17px;
  margin: 20px auto;
  background: #e3e3e3;
  box-shadow: 5px 5px 10px #a6a6a6, -5px -5px 10px #ffffff;
  border-radius: 10px;
  cursor: pointer;

  & > p {
    overflow-wrap: break-word;
    font-size: 13px;
    font-weight: 400;
    text-align: initial;
  }
`;

export default function Task(props) {
  console.log(props);
  return (
    <TaskWrapper data-id={props.dataId} onClick={(e) => props.toggleInput(e)}>
      {props.children}
    </TaskWrapper>
  );
}
