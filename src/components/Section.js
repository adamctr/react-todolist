import React from "react";
import styled from "styled-components";

const SectionWrapper = styled.section`
  width: 300px;
  min-height: 400px;
  border: 2px solid red;
  padding: 10px;
  margin: 5px;
  border-radius: 5px;

  & > h2 {
    text-align: center;
    font-size: 25px;
  }
`;

export default function Section(props) {
  return (
    <SectionWrapper>
      <h2>{props.children}</h2>
    </SectionWrapper>
  );
}
