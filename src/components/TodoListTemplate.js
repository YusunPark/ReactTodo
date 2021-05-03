import React from 'react';
import './TodoListTemplate.css';

const TodoListTemplate = ({ colors, form, children }) => {
  return (
    <main className="todo-list-template">
      <div className="title">오늘 할 일</div>
      <section className="palette-wrapper">{colors}</section>

      <section className="form-wrapper">
        {(colors, form)}
        {/* 파라미터로 받게 되는 것은 props, 비구조화 할당된다.*/}
      </section>

      <section className="todos-wrapper">{children}</section>
    </main>
  );
};

export default TodoListTemplate;