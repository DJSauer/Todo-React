import classes from '../styles/TodoItem.module.css'

const TodoItem = (props) => {
  console.log(props.date)
  return (
    <li className={classes.todoitem} key={props.id} id={props.id} date={props.date} onClick={props.onRemoveTodo}>
      {props.text}
    </li>
  );
};

export default TodoItem;
