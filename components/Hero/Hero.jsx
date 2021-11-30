import { Container } from "react-bootstrap";
import styles from "./hero.module.scss";

const Hero = ({ title, content, background }) => (
  <header
    style={{
      backgroundImage: `url("${background}")`,
      width: "100%",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "center"
    }}
    className="text-light mb-5"
  >
    <div className={styles.hero}>
      <Container className="container h-100">
        <div className="row h-100 align-items-center">
          <div className="col-lg-12">
            <h1 className="display-4  mt-5 mb-2">{title}</h1>
            <p className="lead mb-5 ">{content}</p>
          </div>
        </div>
      </Container>
      <div className={styles.wave} />
    </div>
  </header>
);

export default Hero;
