import { useState } from "react";
import { useTransition, animated } from "react-spring";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faToggleOn, faToggleOff } from "@fortawesome/free-solid-svg-icons";

export const SideButton = ({ on_Change }) => {
  const [toggle, set] = useState(false);
  const transitions = useTransition(toggle, null, {
    from: { position: "absolute", opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 }
  });
  //TODO: useEffect
  const handleClick = () => {
    set(!toggle);
    on_Change(() => {});
  };

  return transitions.map(({ item, key, props }) =>
    item ? (
      <animated.div key={key} style={props}>
        <FontAwesomeIcon onClick={handleClick} size="lg" icon={faToggleOff} />
      </animated.div>
    ) : (
      <animated.div key={key} style={props}>
        <FontAwesomeIcon onClick={handleClick} size="lg" icon={faToggleOn} />
      </animated.div>
    )
  );
};

export default SideButton;
