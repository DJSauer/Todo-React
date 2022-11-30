import Title from "./Title";
import classes from '../styles/Header.module.css'
import NavBar from "./NavBar";

const Header = () => {
  return (
    <header className={classes.header}>
      <Title />
      <NavBar className={classes.navbar}/>
    </header>
  );
};

export default Header;
