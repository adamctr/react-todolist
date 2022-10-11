import React from "react";
import styled from "styled-components";
import { useState } from "react";

const SectionWrapper = styled.section`
  position: relative;
  min-width: 260px;
  max-width: 30%;
  min-height: 400px;
  padding: 10px;
  margin: 15px 0px;
  border-radius: 20px;
  background: linear-gradient(145deg, #f3f3f3, #cccccc);
  box-shadow: 9px 9px 14px #a6a6a6, -9px -9px 14px #ffffff;
`;

const CloseSection = styled.div`
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

export default function Section(props) {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  const deleteSection = (e) => {
    if (props.sections.length > 1) {
      const dataId = parseInt(e.target.dataset.id);
      let newSections = [...props.sections];
      newSections = newSections.filter(
        (section, index) => section.id !== dataId
      );
      props.setSections(newSections);
    }
  };

  return (
    <SectionWrapper onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
      {isHovering && props.sections.length > 1 ? (
        <CloseSection
          data-id={props.id}
          onClick={deleteSection}
          className="close"
        ></CloseSection>
      ) : (
        ""
      )}
      {props.children}
    </SectionWrapper>
  );
}
