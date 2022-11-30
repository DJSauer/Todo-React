import Link from "next/link";
import classes from "../styles/NavBar.module.css";

const NavBar = () => {
  return (
    <nav className={classes.nav}>
      <Link id="auth" href="/auth">
        Login
      </Link>
      <Link id="tasks" href="/tasks">
        Tasks
      </Link>
    </nav>
  );
};

export default NavBar;
