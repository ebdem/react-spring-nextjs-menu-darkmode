import CardDeck from "react-bootstrap/CardDeck";
import Col from "react-bootstrap/Col";
import PostCard from "../Blog/PostCard";

const LatestNews = ({ data, posts }) => {
  const latestPosts = posts.slice(0, data.dislayedPosts);
  return (
    <>
      <Col md={data.columns} className="mb-4">
        <h2>{data.title}</h2>
        <hr />
        <CardDeck>
          {latestPosts.map((post) => (
            <PostCard
              key={post.slug}
              title={post.title}
              author={post.author}
              category={post.category}
              description={
                post.description.length >= 40
                  ? post.description.substr(0, 40) + "..."
                  : post.description
              }
              image={post.image}
              createdAt={post._createdAt}
              link={{
                href: "/blog/[slug]",
                as: `/blog/${post.slug}`
              }}
            />
          ))}
        </CardDeck>
      </Col>
    </>
  );
};

export default LatestNews;
