import Button from "react-bootstrap/Button";
import styles from "./scrollTop.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "../../../../providers/ThemeProvider";
import { useState, useEffect } from "react";
import { useTransition, animated } from "react-spring";

const ScrollTop = () => {
  const { theme } = useTheme();
  const [show, set] = useState(false);
  const transitions = useTransition(show, null, {
    from: {
      position: "fixed",
      bottom: "18vh",
      right: "0",
      transform: "translate3d(5rem,0,0)"
    },
    enter: { transform: "translate3d(0,0,0)" },
    leave: { transform: "translate3d(5rem,0,0)" }
  });

  // When the user clicks on the button, scroll to the top of the document smoothly
  const handleClick = () => {
    const view = document.getElementById("__next");
    view.scrollIntoView({ behavior: "smooth" });
  };

  // When the user reach close to the bottom, show the button
  useEffect(() => {
    const onScroll = () => {
      const bottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 200;
      if (bottom) {
        set(true);
      } else {
        set(false);
      }
    };
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", onScroll);
    }
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return transitions.map(
    ({ item, key, props }) =>
      item && (
        <animated.div key={key} style={props}>
          <Button
            onClick={handleClick}
            className={styles.buttonTop}
            variant={theme.type}
          >
            <FontAwesomeIcon size="lg" icon={faArrowUp} />
          </Button>
        </animated.div>
      )
  );
};

export default ScrollTop;
