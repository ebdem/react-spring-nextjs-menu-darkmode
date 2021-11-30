import { useGetPosts } from "./index";
import Pagination from "react-bootstrap/Pagination";
import Spinner from "react-bootstrap/Spinner";
import PostCard from "../components/Blog/PostCard";
import AllertError from "../components/AlertError";
import CardDeck from "react-bootstrap/CardDeck";
import Preloader from "../components/Spinner/Preloader";

const Pages = ({ offset, filter }) => {
  const { data: paginatedPosts, size, setSize, error } = useGetPosts({
    offset,
    filter
  });
  const isLoadingInitialData = !paginatedPosts && !error;
  const isLoadingMore =
    isLoadingInitialData ||
    (size > 0 &&
      paginatedPosts &&
      typeof paginatedPosts[size - 1] === "undefined");
  const isEmpty = paginatedPosts?.[0]?.length === 0;
  const isReachingEnd =
    isEmpty ||
    (paginatedPosts && paginatedPosts[paginatedPosts.length - 1] < { offset });
  if (isLoadingInitialData) {
    return <Preloader />;
  }

  if (error) {
    return <AllertError />;
  }

  let totalPosts = 0;
  for (let i = 0; i < paginatedPosts.length; i++) {
    totalPosts += paginatedPosts[i].length;
  }

  return (
    <>
      <CardDeck>
        {paginatedPosts.map((paginatedPosts) => {
          return paginatedPosts.map((post) => (
            <PostCard
              key={post.slug}
              title={post.title}
              category={post.category}
              description={post.description}
              author={post.author}
              createdAt={post._createdAt}
              image={post.image}
              link={{
                href: "/blog/[slug]",
                as: `/blog/${post.slug}`
              }}
            />
          ));
        })}
        <br />
      </CardDeck>
      <Pagination className="justify-content-center mb-4">
        <Pagination.Item
          as="button"
          size="lg"
          disabled={isLoadingMore || isReachingEnd}
          onClick={() => setSize(size + 1)}
        >
          {isLoadingMore ? (
            <Spinner as="span" size="sm" animation="border" />
          ) : isReachingEnd ? (
            `Total ${totalPosts} Posts`
          ) : (
            "Load More"
          )}
        </Pagination.Item>
      </Pagination>
    </>
  );
};

export default Pages;
