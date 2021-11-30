import SimpleBlockContent from "../../SimpleBlockContent/SimpleBlockContent";

const Absolute = ({ site }) => (
  <>
    <br />
    <div className="m-0 text-center">
      <SimpleBlockContent blocks={site.footerText} />
    </div>
  </>
);

export default Absolute;
