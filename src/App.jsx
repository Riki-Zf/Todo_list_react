import Header from "./components/Header";
import Tabs from "./components/Tabs";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  const todos = [
    { input: "Hello! Add Your First Todo!", complete: true },
    { input: "Get the Groceries!", complete: false },
    { input: "Learn How To Web Design", complete: false },
    { input: "Say Hi To Gran Gran", complete: true },
  ];

  return (
    <>
      <Header todos={todos} />
      <Tabs todos={todos} />
      <TodoList todos={todos} />
      <TodoInput />
    </>
  );
}

export default App;
