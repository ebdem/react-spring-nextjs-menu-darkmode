import styles from "./filterMenu.module.scss";

const TogglerWrapper = ({ children }) => {
  return <div className={styles.togglerWrapper}>{children}</div>;
};

export default TogglerWrapper;
