import "./todo-card.component.css";
import { ITodoItem } from "../../../model";
import { AiOutlineEdit, AiOutlineCheck, AiTwotoneDelete } from "react-icons/ai";
import React, { useEffect } from "react";

interface ITodoCardProps {
  aTodo: ITodoItem;
  todoList: ITodoItem[];
  setTodoList: React.Dispatch<React.SetStateAction<ITodoItem[]>>;
}

const TodoCard = ({ aTodo, todoList, setTodoList }: ITodoCardProps) => {
  const [editable, setEditable] = React.useState<Boolean>(false);
  const [editTodo, setEditTodo] = React.useState<string>(aTodo.content);

  console.log(editTodo);

  const toggleEditable = (id: number) => {
    if (!editable && !aTodo.complete) {
      setEditable(!editable);
    }
  };

  const editInput = (event: React.FormEvent<HTMLInputElement>) => {
    setEditTodo(event.currentTarget.value);
  };

  const editInputSubmit = (event: React.FormEvent, id: number) => {
    event.preventDefault();

    setTodoList(
      todoList.map((todo) =>
        todo.id === id ? { ...todo, content: editTodo } : todo
      )
    );
    setEditable(false);
  };

  const toggleComplete = (id: number) => {
    const editedTodoList = todoList.map((todo) =>
      todo.id === id ? { ...todo, complete: !todo.complete } : todo
    );
    setTodoList(editedTodoList);
  };

  const handleDelete = (id: number) => {
    const editedTodoList = todoList.filter((todo) => todo.id !== id);
    setTodoList(editedTodoList);
  };

  const inputRef = React.useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, [editable]);

  return (
    <form className="todo-card" onSubmit={(e) => editInputSubmit(e, aTodo.id)}>
      {editable ? (
        <div className="todo-input-box">
          <input ref={inputRef} onChange={editInput} value={editTodo} />
        </div>
      ) : aTodo.complete ? (
        <s className="todo-text">{aTodo.content}</s>
      ) : (
        <span className="todo-text">{aTodo.content}</span>
      )}

      <div>
        <span className="todo-icon">
          <AiOutlineEdit onClick={() => toggleEditable(aTodo.id)} />
          <AiOutlineCheck onClick={() => toggleComplete(aTodo.id)} />
          <AiTwotoneDelete onClick={() => handleDelete(aTodo.id)} />
        </span>
      </div>
    </form>
  );
};

export default TodoCard;
