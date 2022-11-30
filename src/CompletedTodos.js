import { useContext } from "react";
import { TodosContext } from "../context/todos-context";

const CompletedTodos = () => {
  const itemsCtx = useContext(TodosContext);

  return (
    <ul id="secondList">
      {itemsCtx.completedItems.map((item) => {
        return <li key={item.id} id={item.id}>{item.text}</li>;
      })}
    </ul>
  );
};

export default CompletedTodos;
