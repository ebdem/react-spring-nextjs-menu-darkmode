import { useState } from "react";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";

const AllertError = () => {
  const [show, setShow] = useState(true);

  if (show) {
    return (
      <div style={{ height: "100vh" }}>
        <Alert variant="danger" onClose={() => setShow(false)} dismissible>
          <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
          <p>Change this and that and try again.</p>
        </Alert>
      </div>
    );
  }
  return (
    <div style={{ height: "100vh" }}>
      <Button variant="outline-danger" onClick={() => setShow(true)}>
        Show Error
      </Button>
    </div>
  );
};

export default AllertError;
