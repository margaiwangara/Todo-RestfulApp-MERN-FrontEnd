import React, { Component } from "react";
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";
import * as apiCalls from "./api";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
    this.addTodo = this.addTodo.bind(this);
  }

  componentWillMount() {
    this.loadTodos();
  }

  async loadTodos() {
    let todos = await apiCalls.getTodos();
    this.setState({ todos });
  }

  async addTodo(value) {
    let newTodo = await apiCalls.createTodo(value);
    this.setState({ todos: [...this.state.todos, newTodo] });
  }

  async deleteTodo(id) {
    await apiCalls.deleteTodo(id);
    const todos = this.state.todos.filter(todo => todo._id !== id);
    this.setState({ todos: todos });
  }

  async updateTodo(data) {
    let updatedTodo = await apiCalls.updateTodo(data);
    const todos = this.state.todos.map(t =>
      t._id === updatedTodo._id ? { ...t, completed: !t.completed } : t
    );
    this.setState({ todos: todos });
  }
  render() {
    const todo = this.state.todos.map(i => (
      <TodoItem
        key={i._id}
        {...i}
        onDelete={this.deleteTodo.bind(this, i._id)}
        onUpdate={this.updateTodo.bind(this, i)}
      />
    ));
    return (
      <div>
        <h1>Todo List</h1>
        <TodoForm addTodo={this.addTodo} />
        <ul>{todo}</ul>
      </div>
    );
  }
}

export default TodoList;
