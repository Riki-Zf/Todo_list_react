import React from "react";

const TodoCard = (props) => {
  const { todoIndex, todos } = props;
  const todo = todos[todoIndex];
  console.log(todo);

  return (
    <div className="card">
      <p>{todo.input}</p>
      <div className="todo-buttons">
        <button>Done</button>
        <button>Delete</button>
      </div>
    </div>
  );
};

export default TodoCard;
