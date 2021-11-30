import Link from "next/link";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";

const CallToAction = ({ data }) => (
  <Col md={data.columns} className="mb-4">
    <h2>{data.title}</h2>
    <hr />
    <p>{data.content}</p>
    <Link href="/">
      <Button variant="primary" className="btn-lg">
        {data.buttonText}
      </Button>
    </Link>
  </Col>
);
export default CallToAction;
