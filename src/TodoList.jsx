import React from "react";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";

class TodoList extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: []
    };
    this.create = this.create.bind(this);
  }

  create(newTodo) {
    this.setState({
      todos: [...this.state.todos, newTodo]
    });
  }

  render() {
    const todos = this.state.todos.map(todo => {
      return <Todo key={todo.id} task={todo.task} />;
    });
    return (
      <div>
        <h1>Todo List</h1>
        <NewTodoForm createTodo={this.create} />
        <ul>{todos}</ul>
      </div>
    );
  }
}

export default TodoList;
