import CustomWidget from "../SidebarWidgets/CustomWidget";
import Search from "../SidebarWidgets/Search";
import CategoriesWidget from "../SidebarWidgets/CategoriesWidget";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "./blogLayout.module.scss";

const BlogLayout = ({ children, categories, onChange }) => {
  return (
    <Container>
      <Row>
        {/* <!-- Blog Entries Column --> */}
        <Col className="pt-4" md={8}>
          {children}
        </Col>

        {/* <!-- Sidebar Widgets Column --> */}
        <Col className={`pt-4 ${styles.sidebar}`} md={4}>
          <Search
            title="Search"
            inputText="Search for..."
            buttonText="Go"
            onChange={onChange}
          />

          <CategoriesWidget
            title="Categories"
            categories={categories}
            onChange={onChange}
          />

          <CustomWidget title="Side Widget" />
        </Col>
      </Row>
    </Container>
  );
};

export default BlogLayout;
