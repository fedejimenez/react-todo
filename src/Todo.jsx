import React from "react";

class Todo extends React.Component {
  render() {
    return (
      <div>
        <button>Edit</button>
        <button>X</button>
        <li>{this.props.task}</li>
      </div>
    );
  }
}

export default Todo;
