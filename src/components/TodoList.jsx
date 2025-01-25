import React from "react";
import TodoCard from "./TodoCard";

const TodoList = (props) => {
  const { todos } = props;

  const tab = "All";
  const filterTodoList = tab === "All" ? todos : tab === "Complete" ? todos.filter((val) => val.complete) : todos.filter((val) => !val.complete);

  return (
    <>
      {filterTodoList.map((todo, todoIndex) => {
        return <TodoCard key={todoIndex} todo={todo} /*kenapa ini tidak menggunakan {todos} */ />;
      })}
    </>
  );
};

export default TodoList;
