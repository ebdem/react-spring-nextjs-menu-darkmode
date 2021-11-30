import { useRouter } from "next/router";
import Container from "react-bootstrap/Container";
import styles from "./footer.module.scss";
import Absolute from "./Absolute";
import Menu from "../../Menus/Menu";
import MenuItem from "../../Menus/MenuItem";
import { useTheme } from "../../../providers/ThemeProvider";
import ScrollTop from "./ScrollTop/ScrollTop";

const Footer = ({ site }) => {
  const router = useRouter();
  const { theme } = useTheme();

  const menuItems = site.footerNavigation;
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
    <>
      <footer
        className={`py-5 mb-0 bg-${theme.type} ${styles.footerContainer}`}
      >
        <div className={styles.wave}></div>
        <ScrollTop />
        <Container
          style={{ color: theme.foreground }}
          className={styles.footer}
        >
          <Menu className={styles.footerMenu}>{menu}</Menu>
          <Absolute site={site} text="Copyright &copy; Your Website 2020" />
        </Container>
      </footer>
    </>
  );
};

export default Footer;
