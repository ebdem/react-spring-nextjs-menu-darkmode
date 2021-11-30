import Nav from "react-bootstrap/Nav";
import styles from "./menu.module.scss";

const Menu = ({ children }) => (
  <Nav className={`mr-auto p-10 ${styles.menu}`}>{children}</Nav>
);

export default Menu;
