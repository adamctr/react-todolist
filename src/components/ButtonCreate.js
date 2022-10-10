import React from "react";
import styled from "styled-components";

const ButtonCreateWrapper = styled.button`
  background: white;
  color: black;
  padding: 10px;
  border-radius: 5px;
  margin: 10px;
  cursor: pointer;
`;

export default function ButtonCreate(props) {
  return <ButtonCreateWrapper>{props.children}</ButtonCreateWrapper>;
}
