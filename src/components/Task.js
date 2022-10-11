import React from "react";
import styled from "styled-components";
import { useState } from "react";

const TaskWrapper = styled.section`
  max-width: 220px;
  width: 100%;
  min-height: 50px;
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
  return (
    <TaskWrapper>
      <p>{props.children}</p>
    </TaskWrapper>
  );
}
