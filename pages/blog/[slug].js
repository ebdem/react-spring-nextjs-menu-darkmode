import { useState } from "react";
import Layout from "../../components/Layout/Layout";
import BlogLayout from "../../components/Blog/BlogLayout/BlogLayout";
import PostHeader from "../../components/Blog/PostHeader";
import {
  getPostBySlug,
  getAllPostsSingle,
  getAllCategories,
  getSiteConfig
} from "../../lib/api";
import PostBody from "../../components/Blog/PostBody";

const Post = ({ post, categories, site }) => {
  const [filter, setFilter] = useState({
    date: { asc: 0 },
    category: { displayCategory: "all" },
    search: { searchValue: 0 }
  });

  const handleChange = (option, value) => {
    setFilter({ ...filter, [option]: value });
  };

  const postPage = {
    description: post.description,
    disallowRobots: false,
    includeInSitemap: true,
    openGraphImage: post.image,
    slug: `blog/${post.slug}`,
    title: post.title,
    author: post.author
  };

  return (
    <Layout site={site} page={postPage}>
      <BlogLayout onChange={handleChange} categories={categories}>
        <PostHeader
          title={post.title}
          category={post.category}
          author={post.author}
          createdAt={post._createdAt}
          image={post.image}
        />

        {/* <!-- Post Content --> */}
        {post.body && <PostBody content={post.body} />}
        <hr />
      </BlogLayout>
    </Layout>
  );
};

export async function getStaticProps({ params }) {
  const categories = await getAllCategories();
  const post = await getPostBySlug(params.slug);
  const site = await getSiteConfig();
  return {
    props: {
      post,
      categories,
      site
    },
    revalidate: 1
  };
}

export async function getStaticPaths({ params }) {
  const posts = await getAllPostsSingle();
  const paths = posts?.map((p) => ({ params: { slug: p.slug } }));
  return {
    paths,
    fallback: false
  };
}

export default Post;
