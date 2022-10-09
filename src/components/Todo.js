import React from "react";
import ButtonPlus from "./ButtonPlus";

export default function Todo(props) {
  return (
    <div className="todo">
      <ButtonPlus></ButtonPlus>
      <p>{props.children}</p>
    </div>
  );
}
