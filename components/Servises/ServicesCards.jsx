import CardItem from "../CardItem/CardItem";
import CardDeck from "react-bootstrap/CardDeck";
import Col from "react-bootstrap/Col";
import { urlFor } from "../../lib/api";

const ServicesCards = ({ data, services }) => {
  return (
    <Col>
      <CardDeck>
        {services.map((service) => (
          <CardItem
            key={service.slug}
            title={service.title}
            content={service.description}
            image={urlFor(service.openGraphImage)
              .width(400)
              .height(200)
              .fit("max")
              .url()}
            buttonText="Find Out More"
            path={`https://0pqwy.sse.codesandbox.io/services/${service.slug}`}
          />
        ))}
      </CardDeck>
    </Col>
  );
};

export default ServicesCards;
