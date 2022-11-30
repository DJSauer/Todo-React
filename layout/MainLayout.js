import classes from "../styles/Homepage.module.css";
import Header from "../src/Header";

const MainLayout = (props) => {
  return (
    <div className={classes.home}>
      <Header />
      {props.children}
    </div>
  );
};

export default MainLayout;
