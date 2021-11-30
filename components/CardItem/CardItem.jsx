import Link from "next/link";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useTheme } from "../../providers/ThemeProvider";
import styles from "./cardItem.module.scss";

const CardItem = ({ title, content, buttonText, path, image }) => {
  const { theme } = useTheme();
  return (
    <Card
      style={{ maxWidth: "348px", minWidth: "280px" }}
      className={`${styles.carditem} mb-4`}
    >
      <Card.Img
        variant="top"
        src={image || `https://placehold.it/300x200`}
        alt=""
      />
      <Card.Body className="card-body">
        <h3 className="card-title">{title}</h3>
        <p className="card-text">{content}</p>
      </Card.Body>
      <Card.Footer
        style={{ color: theme.foreground }}
        className={`bg-${theme.type}`}
      >
        <Link href={path}>
          <Button variant="primary">{buttonText}</Button>
        </Link>
      </Card.Footer>
    </Card>
  );
};
export default CardItem;
