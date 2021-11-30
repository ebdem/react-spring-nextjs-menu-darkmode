import { useState } from "react";
import Link from "next/link";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { urlFor } from "../../../lib/api";
import moment from "moment";
import { useTheme } from "../../../providers/ThemeProvider";
import styles from "./shopCard.module.scss";
import { useSpring, animated } from "react-spring";

const ShopCard = () => {
  const { theme } = useTheme();
  const [zoom, setZoom] = useState(false);

  const trigger = () => setZoom(!zoom);

  const props = useSpring({
    transform: zoom ? "scale(1.1)" : "scale(1)",
    config: { duration: 1000 }
  });
  const AnimatedImg = animated(Card.Img);

  return (
    <Card
      onMouseEnter={trigger}
      onMouseLeave={trigger}
      className={`${styles.productcarditem} bg-dark text-white`}
    >
      <AnimatedImg
        style={props}
        src="https://cdn.sanity.io/images/rnscop28/production/f0dfb02866f6aa972ab2a02df2fc45f23658a811-1920x1281.jpg"
        alt="Card image"
      />
      <Card.ImgOverlay className={styles.productoverlay}>
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            display: `${zoom ? "block" : "none"}`
          }}
        >
          <Button variant="dark">add</Button>
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 0,
            right: 0,
            display: `${zoom ? "block" : "none"}`
          }}
        >
          <Button variant="dark">+</Button>
        </div>
        <Card.Title>Product title</Card.Title>
        <Card.Text>
          Product text is a little bit longer.
          <br />
          9.99€
        </Card.Text>
      </Card.ImgOverlay>
    </Card>
  );
};
export default ShopCard;
