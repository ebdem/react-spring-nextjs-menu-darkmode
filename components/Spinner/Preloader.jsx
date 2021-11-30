import Spinner from "react-bootstrap/Spinner";

const Preloader = () => {
  return (
    <div style={{ height: "100vh" }} className="text-center pt-4">
      <Spinner animation="grow" />
      <Spinner animation="grow" />
      <Spinner animation="grow" />
    </div>
  );
};

export default Preloader;
