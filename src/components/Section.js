import React from "react";
import styled from "styled-components";

const SectionWrapper = styled.section`
  min-width: 260px;
  max-width: 350px;
  min-height: 400px;
  padding: 10px;
  margin: 15px 0;
  border-radius: 20px;
  background: linear-gradient(145deg, #f3f3f3, #cccccc);
  box-shadow: 9px 9px 14px #a6a6a6, -9px -9px 14px #ffffff;
  & > h2 {
    text-align: center;
    font-size: 20px;
    padding: 10px;
    width: 260px;
    transition: background-color 3s ease;
  }
`;

export default function Section(props) {
  return <SectionWrapper>{props.children}</SectionWrapper>;
}
