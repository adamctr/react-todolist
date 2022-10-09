import React, { Component } from "react";
import Todo from "./Todo";
import uuid from "react-uuid";
import ButtonPlus from "./ButtonPlus";

class Sections extends Component {
  state = {
    section: [
      {
        id: 1,
        title: "Aujourd'hui",
        todo: ["salut je suis un todo", "Todo2"],
      },
      {
        id: 2,
        title: "Demain",
        todo: ["salut je suis un todo"],
      },
    ],
    toggle: true,
  };

  addSection = () => {
    this.setState((prevState) => {
      return {
        section: [
          ...prevState.section,
          {
            id: uuid(),
            title: "Semaine prochaine",
            todo: [""],
          },
        ],
      };
    });
  };

  addTodo = () => {
    this.setState((prevState) => ({
      section: prevState.section.map((obj, index) =>
        obj.id == this.state.section[index].id
          ? Object.assign(obj, {
              todo: [...obj.todo, "aller stp"],
            })
          : obj
      ),
    }));
  };

  render() {
    return (
      <>
        {/* On retourne chaque section */}
        {this.state.section.map((section) => {
          return (
            <section key={section.id}>
              {/* Titre de la section qui change dynamiquement */}
              {this.state.toggle ? (
                <p
                  onDoubleClick={() => {
                    this.setState({ toggle: false });
                  }}
                >
                  {section.title}
                </p>
              ) : (
                <input
                  type="text"
                  value={section.title}
                  onChange={(e) => {
                    this.setState((prevState) => ({
                      section: prevState.section.map((obj) =>
                        obj.id == section.id
                          ? Object.assign(obj, {
                              title: e.target.value,
                            })
                          : obj
                      ),
                    }));
                  }}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === "Escape") {
                      this.setState({ toggle: true });
                      event.preventDefault();
                      event.stopPropagation();
                    }
                  }}
                />
              )}

              {/* <h2 onDoubleClick={this.onDoubleClickHandler}>{section.title}</h2> */}
              <div className="todolist">
                {/* On retourne chaque todo de chaque section */}
                {section.todo.map((todo) => {
                  return <Todo key={uuid()}>{todo}</Todo>;
                })}
                <div onClick={this.addTodo}>
                  <ButtonPlus></ButtonPlus>
                </div>
              </div>
            </section>
          );
        })}
      </>
    );
  }
}

export default Sections;
