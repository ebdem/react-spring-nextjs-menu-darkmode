import Link from "next/link";
import Card from "react-bootstrap/Card";
import { urlFor } from "../../lib/api";
import moment from "moment";
import { useTheme } from "../../providers/ThemeProvider";
import styles from "./postCard.module.scss";

const PostCard = ({
  title,
  author,
  category,
  description,
  image,
  createdAt,
  link
}) => {
  const { theme } = useTheme();
  return (
    <Card
      style={{ minWidth: "280px" }}
      className={`${styles.postcarditem} mb-4`}
    >
      <img
        className="card-img-top"
        src={
          urlFor(image).width(750).fit("max").url() ||
          "https://via.placeholder.com/750x450"
        }
        alt="Post cover"
      />
      <Card.Body>
        <small>{category}</small>
        <h3 className="card-title">{title}</h3>
        <Card.Text>{description}</Card.Text>
        {link && (
          <Link {...link}>
            <a className="btn btn-primary">Read More &rarr;</a>
          </Link>
        )}
      </Card.Body>
      <Card.Footer
        style={{
          color: theme.foreground
        }}
        className={`bg-${theme.type} card-footer`}
      >
        {moment(createdAt).format("LL")} by{" "}
        <Link href="#">
          <a>{author?.name || " "}</a>
        </Link>
      </Card.Footer>
    </Card>
  );
};
export default PostCard;
