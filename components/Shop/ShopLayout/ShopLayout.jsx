import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "./shopLayout.module.scss";
import CustomWidget from "../../Blog/SidebarWidgets/CustomWidget";

const ShopLayout = ({ children, categories, onChange }) => {
  return (
    <Container fluid>
      <Row>
        {/* <!-- Sidebar Widgets Column --> */}
        <Col className={`pt-4 ${styles.sidebar}`} md={3}>
          <CustomWidget title="Side Widget" />
        </Col>
        {/* <!-- Shop Entries Column --> */}
        <Col className="pt-4" md={9}>
          {children}
        </Col>
        {/* <!-- Sidebar Widgets Column --> */}
        {/* <Col className={`pt-4 ${styles.sidebar}`} md={3} lg={2}>
          <CustomWidget title="Side Widget" /> */}
        {/* </Col> */}
      </Row>
    </Container>
  );
};

export default ShopLayout;
