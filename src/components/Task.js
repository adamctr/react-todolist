import React from "react";
import styled from "styled-components";
import { useState } from "react";

const TaskWrapper = styled.section`
  width: 250px;
  min-height: 100px;
  border: 2px solid red;
  padding: 5px;
  margin: 10px auto;
  border-radius: 5px;

  & > p {
    overflow-wrap: break-word;
    font-size: 15px;
    text-align: initial;
  }
`;

export default function Task(props) {
  return (
    <TaskWrapper>
      <p>{props.children}</p>
    </TaskWrapper>
  );
}
