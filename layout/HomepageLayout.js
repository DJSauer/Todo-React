import NewTodo from "../src/NewTodo";
import Todos from "../src/Todos";
import CompletedTodos from "../src/CompletedTodos";
import { Fragment, useContext } from "react";
import { TodosContext } from "../context/todos-context";
import Container from "./Containter";

const HomepageLayout = () => {
  const itemsCtx = useContext(TodosContext);

  let todos = <p>Let's add something!</p>
  let completedTodos = <p>Nothing to see here...</p>;

  if(itemsCtx.items.length > 0){
    todos = <Todos />
  } else if(itemsCtx.items.length === 0 && itemsCtx.completedItems.length > 0){
    todos = <p>Wanna add more?</p>
  }

  if (itemsCtx.completedItems.length > 0) {
    completedTodos = <CompletedTodos />;
  } else if(itemsCtx.completedItems.length === 0 && itemsCtx.items.length > 0){
    completedTodos = <p>Cross something off!</p>
  }

  const onClickHandler = () => {
    itemsCtx.clearItems()
  };

  return (
    <Fragment>
      <h1>What do you have ToDo!</h1>
      <NewTodo />
      <Container>
        <h2>Here's what you have ToDo:</h2>
        {todos}
      </Container>
      <Container>
        <h3>Here's what you've completed:</h3>
        {completedTodos}
      </Container>
      <button id="clear" onClick={onClickHandler}>Done for the day?</button>
    </Fragment>
  );
};

export default HomepageLayout;
