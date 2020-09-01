import React, { Component } from "react";

class List extends Component {
    render(){
        var todos = this.props.todos || [];
        return (
            <ul>
              {todos.map((todo) => (
                <li
                  key={todo.id}
                  onClick={() => this.props.toggleTodo(todo.id)}
                  style={{
                    textDecoration: todo.isComplete ? "line-through" : "none",
                  }}
                >
                  {todo.text}
                </li>
              ))}
            </ul>
          );
    };
}

export default List;
