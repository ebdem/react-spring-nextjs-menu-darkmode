import Card from "react-bootstrap/Card";
import { useTheme } from "../../../providers/ThemeProvider";
import styles from "./widget.module.scss";

const CustomWidget = ({ title }) => {
  const { theme } = useTheme();
  return (
    <Card className={`${styles.widgetcarditem} my-4`}>
      <Card.Header
        style={{ color: `${theme.foreground}` }}
        className={`h5 bg-${theme.type} `}
      >
        {title}
      </Card.Header>
      <Card.Body className="card-body">
        You can put anything you want inside of these side widgets. They are
        easy to use, and feature the new Bootstrap 4 card containers!
      </Card.Body>
    </Card>
  );
};
export default CustomWidget;
