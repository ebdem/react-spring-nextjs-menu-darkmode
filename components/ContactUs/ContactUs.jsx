import { Col } from "react-bootstrap";

const ContactUs = ({ data }) => {
  return (
    <Col md={4} className="mb-4">
      <h2>{data.title}</h2>
      {data.locations?.map((location) => (
        <div key={location.name}>
          <hr />
          <div>
            <strong>{location.name}</strong>
            <br />
            {location.street} {location.streetNo}
            <br />
            {location.city}, {location.postal}
            <br />
          </div>
          <div>
            <span title="Phone">P: </span>
            {location.phone}
            <br />
            <span title="Email">E: </span>
            <a href={`mailto: ${location.email}`}>{location.email}</a>
          </div>
        </div>
      ))}
    </Col>
  );
};
export default ContactUs;
