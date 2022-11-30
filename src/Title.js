import Link from "next/link";
import classes from "../styles/Title.module.css";

const Title = (props) => {
  return (
    <div className={classes.title}>
      <Link id="todo" href="/">
        Todo
      </Link>
    </div>
  );
};

export default Title;
