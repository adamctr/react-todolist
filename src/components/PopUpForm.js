import React from "react";
import styled from "styled-components";

const PopUpFormBox = styled.div`
  position: fixed;
  background-color: rgba(0, 0, 0, 0.5);
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
`;

const FormBox = styled.div`
  position: relative;
  top: 25%;
  width: 50%;
  min-height: 300px;
  background-color: #fff;
  border: 1px solid #999;
  border-radius: 4px;
  margin: 20px auto;
  padding: 20px;
  overflow: auto;
`;

const CloseBox = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 25px;
  height: 25px;
  border: 2px solid black;
  cursor: pointer;
`;

const PopUpForm = () => {
  return (
    <PopUpFormBox>
      <FormBox>
        <CloseBox />
      </FormBox>
    </PopUpFormBox>
  );
};

export default PopUpForm;
