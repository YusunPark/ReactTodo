import React, { Component } from 'react';
import TodoListTemplate from './components/TodoListTemplate';
import Form from "./components/Form";                 // state 필요
import TodoItemList from "./components/TodoItemList"; // state 필요
import Palette from "./components/Palette"; // state 필요

class App extends Component {
  id = 3; // 이미 0,1,2가 존재하니까

  state = {
    input: "",
    colors: [ "#343a40", "#f03e3e", "#12b886", "#228ae6" ],
    todos: [
      { id: 0, text: "리액트 소개", checked: false },
      { id: 1, text: "리액트 소개", checked: true },
      { id: 2, text: "리액트 소개", checked: false },
    ],
  };

  handleChange = (e) => {
    this.setState({
      input: e.target.value, // input의 다음 바뀔 값
    });
  };

  handleCreate = () => {
    const { input, todos } = this.state;
    this.setState({
      input: "",
      todos: todos.concat({
        id: this.id++,
        text: input,
        checked: false,
      }),
    });
  };

  handleKeyPress = (e) => {
    if (e.key === "Enter") {
      this.handleCreate();
    }
  };

  handleToggle = (id) => {
    const { todos } = this.state;

    //id를 통해서 몇 번째인지 확인
    const index = todos.findIndex((todo) => todo.id === id);
    const selected = todos[index];

    const nextTodos = [...todos];

    // 기존의 값들을 복사후 checked 값 덮어쓰기
    nextTodos[index] = {
      ...selected,
      checked: !selected.checked,
    };

    this.setState({
      todos: nextTodos,
    });
  };

  handleRemove = (id) => {
    const { todos } = this.state;
    this.setState({
      todos: todos.filter((todo) => todo.id !== id),
    });
  };

  handleColor = (id) => {
    
  };

  render() {
    const { input, todos, colors } = this.state;
    const {
      handleChange,
      handleCreate,
      handleKeyPress,
      handleToggle,
      handleRemove,
    } = this;

    return (
      <TodoListTemplate
        colors={<Palette colorbax={colors} />}
        form={
          <Form
            value={input}
            onKeyPress={handleKeyPress}
            onChange={handleChange}
            onCreate={handleCreate}
          />
        }
      >
        <TodoItemList
          todos={todos}
          onToggle={handleToggle}
          onRemove={handleRemove}
        />
      </TodoListTemplate>
    );
  }
}

export default App;
