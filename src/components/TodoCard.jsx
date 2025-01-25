import React from "react";

const TodoCard = (props) => {
  const { todo } = props;

  return (
    <div className="card">
      <p>{todo.input}</p>
      <div className="todo-buttons">
        <button disabled={todo.complete}>Done</button>
        <button>Delete</button>
      </div>
    </div>
  );
};

export default TodoCard;
