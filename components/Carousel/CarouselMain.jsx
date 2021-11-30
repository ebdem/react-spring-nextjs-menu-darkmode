import Carousel from "react-bootstrap/Carousel";
import Col from "react-bootstrap/Col";
import { urlFor } from "../../lib/api";
import { useTheme } from "../../providers/ThemeProvider";
import styles from "./carouselMain.module.scss";

const CarouselMain = ({ services, data }) => {
  const { theme } = useTheme();

  return (
    <Col md={data.columns} className="mb-4 px-0 px-md-3">
      <Carousel className="w-100 pb-3">
        {services.map((service) => (
          <Carousel.Item key={service.slug}>
            <img
              className={`d-block ${
                theme.type === "light"
                  ? styles.carouselLight
                  : styles.carouselDark
              }`}
              src={urlFor(service.openGraphImage)
                .width(1200)
                .height(700)
                .fit("max")
                .url()}
              alt={service.title}
            />
            <Carousel.Caption
              className={`${
                theme.type === "light"
                  ? styles.captionLight
                  : styles.captionDark
              }`}
            >
              <h4>{service.title}</h4>
              <p className="d-none d-md-block">{service.description}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </Col>
  );
};

export default CarouselMain;
