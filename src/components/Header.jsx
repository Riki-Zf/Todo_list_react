import React from "react";

const Header = (props) => {
  //destruction props{todos}
  const { todos } = props;

  //mengambil jumlah todo dari props {todos} yg diturunkan oleh induk(App)
  const todoslength = todos.length;

  //menentukan task/tasks
  const isTaskPlural = todos.length != 1;
  const taskOrTasks = isTaskPlural ? "tasks" : "task";

  return (
    <header>
      <h1 className="text-gradient">
        You have {todoslength} open {taskOrTasks}.
      </h1>
    </header>
  );
};

export default Header;
