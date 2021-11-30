import Nav from "react-bootstrap/Nav";
import styles from "./menu.module.scss";
import ActiveLink from "./ActiveLink";

// const MenuItem = ({ path, name, active }) => {
//   return (
//     <Nav.Link
//       as={() => (
//         <Link href={path}>
//           <a className={active ? styles.active : undefined}>{name}</a>
//         </Link>
//       )}
//     ></Nav.Link>
//   );
// };

const MenuItem = ({ path, name, active }) => {
  return (
    <ActiveLink href={path} className={styles.anchor}>
      <Nav.Link href={path} as="a" className={styles.anchor}>
        {name}
      </Nav.Link>
    </ActiveLink>
  );
};

export default MenuItem;
