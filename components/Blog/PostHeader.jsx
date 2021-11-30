import PageHeading from "./PageHeading";
import { urlFor } from "../../lib/api";
import moment from "moment";

const PostHeader = ({ title, category, author, createdAt, image }) => (
  <div>
    <PageHeading head={title} subtitle={`Category: ${category}`} />
    <p className="lead">
      <img
        src={author.avatar || "https://via.placeholder.com/150"}
        className="rounded-circle mr-3"
        height="50px"
        width="50px"
        alt="avatar"
      />
      by <a href="#">{author.name}</a>
    </p>
    <hr />
    <p>Posted on {moment(createdAt).format("LLL")}</p>
    <hr />
    <img
      className="img-fluid rounded"
      src={
        urlFor(image).width(900).fit("max").url() ||
        "http://placehold.it/900x300"
      }
      alt="cover"
    />
    <hr />
  </div>
);
export default PostHeader;
