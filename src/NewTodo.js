import { useRef, useContext } from "react";
import classes from "../styles/Homepage.module.css";
import { TodosContext } from "../context/todos-context";

const NewTodo = () => {
  const itemsCtx = useContext(TodosContext);

  const itemRef = useRef();

  const itemSubmitHandler = (event) => {
    event.preventDefault();
    const enteredTodo = itemRef.current.value;

    if(enteredTodo.trim().length === 0){
        alert("You didn't add anything. Please add something to the input box...")
        return;
    }

    itemsCtx.addItem(enteredTodo);

    itemRef.current.value = "";
  };

  return (
    <form className={classes.form} onSubmit={itemSubmitHandler}>
      <label htmlFor="text">Add to list</label>
      <input ref={itemRef} id="text" />
      <button>Submit</button>
    </form>
  );
};

export default NewTodo;
