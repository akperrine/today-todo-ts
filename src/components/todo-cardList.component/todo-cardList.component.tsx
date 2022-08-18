import { ITodoItem } from "../../model";
import TodoCard from "./todo-card.component/todo-card.component";

interface ITodoCardListProps {
  todoList: ITodoItem[];
  setTodoList: React.Dispatch<React.SetStateAction<ITodoItem[]>>;
}

const TodoCardList: React.FC<ITodoCardListProps> = ({
  todoList,
  setTodoList,
}: ITodoCardListProps) => {
  return (
    <div className="card-list-container">
      {todoList.map((todo) => (
        <TodoCard
          key={todo.id}
          aTodo={todo}
          todoList={todoList}
          setTodoList={setTodoList}
        />
      ))}
    </div>
  );
};

export default TodoCardList;
