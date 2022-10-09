import React, { Component } from "react";
import Todo from "./Todo";

class Sections extends Component {
  state = {
    section: [
      {
        id: 1,
        title: "09/10/2022",
        todo: "salut je suis un todo",
      },
      {
        id: 2,
        title: "22/10/2022",
        todo: "salut je suis un todo",
      },
    ],
  };

  addSection = () => {
    this.setState((prevState) => {
      return {
        section: [
          ...prevState.section,
          {
            id: prevState + 1,
            title: "qsdqsd",
          },
        ],
      };
    });
  };
  render() {
    return (
      <>
        {this.state.section.map((section) => {
          return (
            <section key={section.id}>
              <h2>{section.title}</h2>
              <div className="todolist">
                <Todo>{section.todo}</Todo>
              </div>
            </section>
          );
        })}
      </>
    );
  }
}

export default Sections;
