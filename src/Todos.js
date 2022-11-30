import TodoItem from "./TodoItem";
import { useContext } from "react";
import { TodosContext } from "../context/todos-context";

const Todos = () => {
  const itemsCtx = useContext(TodosContext);

  return (
    <ul>
      {itemsCtx.items.map((item) => {
        return (
          <TodoItem
            onRemoveTodo={itemsCtx.removeItem.bind(null, item.id)}
            key={item.id}
            id={item.id}
            date={item.date}
            text={item.text}
          />
        );
      })}
    </ul>
  );
};

export default Todos;
