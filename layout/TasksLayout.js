import classes from "../styles/Tasks.module.css";
import CompletedTodos from "../src/CompletedTodos";
import Container from "./Containter";

const TasksLayout = () => {
  return (
    <div>
      <Container>
        <div className={classes.tasks}>
          <h3>Here's what you've completed:</h3>
          <CompletedTodos />
        </div>
      </Container>
    </div>
  );
};

export default TasksLayout;
