import { useState } from "react";
import { useTransition, animated } from "react-spring";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisH, faTimes } from "@fortawesome/free-solid-svg-icons";

export const TogglerIcon = () => {
  const [toggle, set] = useState(false);
  const transitions = useTransition(toggle, null, {
    from: { position: "absolute", right: "5%", opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 }
  });
  //TODO: useEffect
  const handleClick = () => {
    set(!toggle);
  };

  return transitions.map(({ item, key, props }) =>
    item ? (
      <animated.div key={key} style={props}>
        <FontAwesomeIcon onClick={handleClick} size="lg" icon={faTimes} />
      </animated.div>
    ) : (
      <animated.div key={key} style={props}>
        <FontAwesomeIcon onClick={handleClick} size="lg" icon={faEllipsisH} />
      </animated.div>
    )
  );
};

const Toggler = () => (
  <div style={{ height: 30 }}>
    <TogglerIcon />
  </div>
);

export default Toggler;
