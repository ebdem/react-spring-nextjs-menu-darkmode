import { useRouter } from "next/router";
import Link from "next/link";
import { Navbar, Container } from "react-bootstrap";
import styles from "./navigation.module.scss";
import Menu from "../../Menus/Menu";
import MenuItem from "../../Menus/MenuItem";
import { useTheme } from "../../../providers/ThemeProvider";
import SideButton from "../../../components/Blog/SideButton";
import Toggler from "./Toggler";

const Navigation = ({ site }) => {
  const { theme, toggleTheme } = useTheme();
  const router = useRouter();

  const menuItems = site.mainNavigation;
  const menu = menuItems.map((menuItem) => {
    const path = `/${menuItem.slug === ("/" || "#") ? "" : menuItem.slug}`;
    const isActive = router.asPath === path;

    return (
      <MenuItem
        key={menuItem.slug}
        path={path}
        name={menuItem.page}
        active={isActive ? true : false}
      />
    );
  });

  return (
    <Navbar
      className={styles.topbar}
      fixed="top"
      collapseOnSelect
      expand="lg"
      bg={theme.type}
      variant={theme.type}
    >
      <Container>
        <Navbar.Brand className={styles.logo}>
          <Link href="/">
            <div as="a">
              {" "}
              <img
                src={site.logo}
                alt="react-bootstrap"
                height="40px"
                style={{ display: "inline" }}
              />{" "}
              {site.title}
            </div>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle
          style={{ color: theme.foreground }}
          className={styles.burger}
          aria-controls="responsive-navbar-nav"
        >
          <Toggler />
        </Navbar.Toggle>
        <Navbar.Collapse
          style={{ color: theme.foreground }}
          id="responsive-navbar-nav"
        >
          <Menu>{menu}</Menu>{" "}
          <div style={{ height: 30, color: theme.foreground }}>
            <SideButton on_Change={toggleTheme} />
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
