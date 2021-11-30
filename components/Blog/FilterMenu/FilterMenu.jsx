import SortButton from "../SortButton";
import styles from "./filterMenu.module.scss";

const FilterMenu = ({ onChange, on_Change, filter }) => (
  <div className={styles.menu}>
    <SortButton onChange={onChange} filter={filter} />
  </div>
);

export default FilterMenu;
