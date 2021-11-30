import { useState } from "react";
import { useRouter } from "next/router";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import { useTheme } from "../../../providers/ThemeProvider";
import styles from "./widget.module.scss";

const CategoriesWidget = ({ title, categories, onChange }) => {
  const router = useRouter();
  const [currentCategory, setCurrentCategory] = useState("all");
  const { theme } = useTheme();

  const checkPath = () => {
    if (router.pathname !== "/blog" && router.pathname !== "/blogSide") {
      router.push({
        pathname: "/blog",
        query: { category: currentCategory }
      });
    }
  };

  const mapedCategories = categories?.map((i) => (
    <ListGroup.Item
      active={
        (currentCategory === i.name && !router.query.category) ||
        router.query.category === i.name
          ? true
          : false
      }
      key={i.slug}
    >
      <Button
        className={styles.categoryButton}
        onClick={() => {
          setCurrentCategory(i.name);
          onChange("category", { displayCategory: i.name });

          if (router.pathname !== "/blog" && router.pathname !== "/blogSide") {
            router.push({
              pathname: "/blog",
              query: { category: i.name }
            });
          }
        }}
        variant="unstyled"
      >
        {i.name}
      </Button>
    </ListGroup.Item>
  ));

  const handleClick = () => {
    setCurrentCategory("all");
    onChange("category", {
      displayCategory: "all"
    });

    checkPath();
  };

  return (
    <Card className={`${styles.widgetcarditem} my-4`}>
      <Card.Header
        style={{ color: `${theme.foreground}` }}
        className={`h5 bg-${theme.type} `}
      >
        {title}
      </Card.Header>
      <Card.Body>
        <ListGroup variant="flush" className="list-unstyled mb-0">
          <ListGroup.Item
            active={
              (currentCategory === "all" && !router.query.category) ||
              router.query.category === "all"
                ? true
                : false
            }
          >
            <Button
              className={styles.categoryButton}
              onClick={handleClick}
              variant="unstyled"
            >
              All Categories
            </Button>
          </ListGroup.Item>
          {mapedCategories}
        </ListGroup>
      </Card.Body>
    </Card>
  );
};

export default CategoriesWidget;
