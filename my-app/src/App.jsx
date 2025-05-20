import { useState } from "react";
import "./App.css";
import React from "react";
import TodoList from "./components/TodoList";
import Filter from "./components/Filter";
import TodoEditor from "./components/TodoEditor";
import Info from "./components/Info";
import todo from "./components/data/todo.json";

class App extends React.Component {
  state = {
    todos: this.settingsTodos(todo),
    filter: "",
    idCounter: todo.length + 1,
  };

  settingsTodos(todo) {
    let counter = 0;
    let filteredTodos = [];
    todo.forEach((element) => {
      filteredTodos.push({
        id: counter,
        text: element.text,
        completed: element.completed,
      });
      counter += 1;
    });
    return filteredTodos;
  }

  addTodo = (text) => {
    const newTodo = {
      id: this.state.idCounter,
      text: text,
      completed: false, // Використовуємо булевий тип
    };
    this.setState((prevState) => ({
      todos: [...prevState.todos, newTodo],
      idCounter: prevState.idCounter + 1,
    }));
  };

  deleteTodo = (id) => {
    this.setState({
      todos: this.state.todos.filter((todo) => todo.id !== id),
    });
  };

  changeTodo = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      ),
    });
  };

  filterTodo = (text) => {
    this.setState({
      filter: text,
    });
  };

  render() {
    let filterArray = [];
    const filterCase = this.state.filter.toLowerCase();
    this.state.todos.forEach((element) => {
      if (element.text.toLowerCase().includes(filterCase)) {
        filterArray.push(element);
      }
    });
    const filteredTodos = this.state.todos.filter((todo) => {
      if (this.state.filter === "completed") {
        return todo.completed;
      } else if (this.state.filter === "incomplete") {
        return !todo.completed;
      }
      return true;
    });
    return (
      <div className="container">
        <h1>Мій список завдань</h1>
        <Info
          all={this.state.todos.length}
          job={
            this.state.todos.filter((element) => {
              if (element.completed) {
                return element;
              }
            }).length
          }
        />
        <TodoEditor onAdd={this.addTodo} />
        <div className="search">
          <Filter onChange={this.filterTodo} value={this.state.filter} />
          <TodoList
            array={filteredTodos}
            choose={this.changeTodo}
            deleteItem={this.deleteTodo}
          />
        </div>
      </div>
    );
  }
}

export default App;
