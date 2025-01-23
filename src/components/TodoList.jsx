import React from "react";
import TodoCard from "./TodoCard";

const TodoList = (props) => {
  const { todos } = props;
  const tab = "All";

  return (
    <>
      {todos.map((todo, todoIndex) => {
        return <TodoCard key={todoIndex} todoIndex={todoIndex} {...props} />;
      })}
    </>
  );
};

export default TodoList;
