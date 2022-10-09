import React from "react";

export default function Todo(props) {
  return (
    <div className="todo">
      <input type="checkbox" />
      <p>{props.children}</p>
    </div>
  );
}
