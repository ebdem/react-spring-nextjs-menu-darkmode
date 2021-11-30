import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import styles from "./mymarker.module.scss";

const MyMarker = ({ text }) => (
  <div onClick={() => {}} className={styles.marker}>
    <FontAwesomeIcon size="4x" icon={faMapMarkerAlt} />
    <h6>{text}</h6>
  </div>
);

export default MyMarker;
