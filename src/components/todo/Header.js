import React from "react";

class Header extends React.Component {
  constructor() {
    super();
  }

  handleClick = () => {
    var value = this.todoTitle.value;

    if (!value.trim()) {
      return;
    }

    // add todo
    this.props.addTodo(value);
    this.todoTitle.value = "";
  };

  render() {
    return (
      <div>
        <input
          type="text"
          name="todo"
          ref={(input) => {
            this.todoTitle = input;
          }}
        />
        <input type="button" value="Add Todo" onClick={this.handleClick} />
      </div>
    );
  }
}

export default Header;
