import React from "react";
import "./App.css";

import { ITodoItem } from "./model";
import Input from "./components/input/input.component";
import TodoCardList from "./components/todo-cardList.component/todo-cardList.component";

const App: React.FC = () => {
  const [inputField, setInputField] = React.useState<string>("");
  const [todoList, setTodoList] = React.useState<ITodoItem[]>([]);

  const handleAddToList = (e: React.FormEvent) => {
    e.preventDefault();

    if (inputField) {
      setTodoList([
        ...todoList,
        { id: Date.now(), content: inputField, complete: false },
      ]);
      setInputField("");
    }
  };

  return (
    <div className="App">
      <h1 className="heading">Today's Todos</h1>
      <Input
        inputField={inputField}
        setInputField={setInputField}
        handleAddToList={handleAddToList}
      />
      <TodoCardList todoList={todoList} setTodoList={setTodoList} />
    </div>
  );
};

export default App;
