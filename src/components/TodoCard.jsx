import React from "react";

const TodoCard = (props) => {
  const { todo, handleDeleteTodo, todoIndex, handleCompleteTodo } = props;

  return (
    <div className="card">
      <p className="todo-date">{todo.addTime}</p>
      <p>{todo.input}</p>
      <div className="todo-buttons">
        <button
          onClick={() => {
            handleCompleteTodo(todoIndex);
          }}
          disabled={todo.complete}
        >
          Done
        </button>
        <button
          onClick={() => {
            handleDeleteTodo(todoIndex);
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoCard;
