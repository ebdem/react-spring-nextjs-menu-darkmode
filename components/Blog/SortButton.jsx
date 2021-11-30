import { useState } from "react";
import { useTransition, animated } from "react-spring";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSortAlphaUp,
  faSortAlphaDown
} from "@fortawesome/free-solid-svg-icons";

export const SortButton = ({ onChange, filter }) => {
  const [toggle, set] = useState(false);
  const transitions = useTransition(toggle, null, {
    from: { position: "absolute", opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 }
  });
  //TODO: useEffect
  const handleClick = () => {
    set(!toggle);
    onChange("date", { asc: +!filter.date.asc });
  };

  return transitions.map(({ item, key, props }) =>
    item ? (
      <animated.div key={key} style={props}>
        <FontAwesomeIcon onClick={handleClick} size="lg" icon={faSortAlphaUp} />
      </animated.div>
    ) : (
      <animated.div key={key} style={props}>
        <FontAwesomeIcon
          onClick={handleClick}
          size="lg"
          icon={faSortAlphaDown}
        />
      </animated.div>
    )
  );
};

export default SortButton;
