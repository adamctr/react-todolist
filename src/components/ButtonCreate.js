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

  const createSection = () => {
    const newSections = [...sections];
    const newSection = {
      id: sections[sections.length - 1].id + 1,
      title: "",
    };
    newSections.push(newSection);
    console.log(newSections);
    setSections(newSections);
  };

  return (
    <ButtonCreateWrapper
      onClick={props.name == "section" ? () => createSection() : ""}
    >
      {props.children}
    </ButtonCreateWrapper>
  );
}
