import { useEffect, useState } from "react";
import Header from "./components/Header";
import Tabs from "./components/Tabs";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  // const todos = [
  //   { input: "Hello! Add Your First Todo!", complete: true },
  //   { input: "Get the Groceries!", complete: false },
  //   { input: "Learn How To Web Design", complete: false },
  //   { input: "Say Hi To Gran Gran", complete: true },
  // ];

  const [todos, setTodos] = useState([{ addTime: "", input: "Hello! Add Your First Todo!", complete: true }]);

  const [selectedTab, setSelectedTab] = useState("All");

  function handleAddTodo(newTodo) {
    const newTodoList = [...todos, { addTime: new Date().toLocaleDateString("id-ID"), input: newTodo, complete: false }];
    setTodos(newTodoList);
    handleSaveData(newTodoList);
  }
  function handleCompleteTodo(index) {
    // edit/update/modify
    let newTodoList = [...todos];
    let completeTodo = todos[index];
    completeTodo["complete"] = true;
    newTodoList[index] = completeTodo;
    setTodos(newTodoList);
    handleSaveData(newTodoList);
  }
  function handleDeleteTodo(index) {
    const newTodoList = todos.filter((val, valIndex) => {
      return valIndex !== index;
    });
    setTodos(newTodoList);
    handleSaveData(newTodoList);
  }
  function handleSaveData(currTodos) {
    localStorage.setItem("todo-app", JSON.stringify({ todos: currTodos }));
  }

  useEffect(() => {
    if (!localStorage || !localStorage.getItem("todo-app")) {
      return;
    }
    let db = JSON.parse(localStorage.getItem("todo-app"));
    setTodos(db.todos);
  }, []);

  return (
    <>
      <Header todos={todos} />
      <Tabs selectedTab={selectedTab} setSelectedTab={setSelectedTab} todos={todos} />
      <TodoList handleCompleteTodo={handleCompleteTodo} handleDeleteTodo={handleDeleteTodo} selectedTab={selectedTab} todos={todos} />
      <TodoInput handleAddTodo={handleAddTodo} />
    </>
  );
}

export default App;
