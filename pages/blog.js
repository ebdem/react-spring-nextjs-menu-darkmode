import { useState } from "react";
import { withRouter } from "next/router";
import Layout from "../components/Layout/Layout";
import BlogLayout from "../components/Blog/BlogLayout/BlogLayout";
import PageHeading from "../components/Blog/PageHeading";
import FilterMenu from "../components/Blog/FilterMenu/FilterMenu";
import {
  getAllPosts,
  getAllCategories,
  getSiteConfig,
  getPageBySlug
} from "../lib/api";
import Pages from "../actions/pagination";

const Blog = ({ posts, categories, site, page, ...props }) => {
  // check if query from redirect
  let displayCategory =
    props.router.query.category !== undefined
      ? props.router.query.category
      : "all";

  let searchValue =
    props.router.query.search !== undefined ? props.router.query.search : 0;

  const [filter, setFilter] = useState({
    date: { asc: 0 },
    category: { displayCategory: displayCategory },
    search: { searchValue: searchValue }
  });

  const handleChange = (option, value) => {
    if (props.router.asPath !== "/blog") {
      props.router.push({
        pathname: "/blog"
      });
      setFilter({
        ...filter,
        category: { displayCategory: "all" },
        search: { searchValue: 0 }
      });
    } else {
      setFilter({ ...filter, [option]: value });
    }
  };

  // console.log(`${displayCategory} & ${searchValue}`);

  const subtitle =
    filter.category.displayCategory === "all"
      ? "All categories"
      : `Category: ${filter.category.displayCategory}`;

  return (
    <Layout site={site} page={page}>
      <BlogLayout categories={categories} onChange={handleChange}>
        <PageHeading head={page.title} subtitle={subtitle} />
        <FilterMenu
          filter={filter}
          on_Change={() => {}}
          onChange={handleChange}
        />
        <div style={{ height: "20px" }}></div>
        <hr />
        <Pages posts={posts} filter={filter} />
      </BlogLayout>
    </Layout>
  );
};

export async function getStaticProps() {
  const posts = await getAllPosts({ offset: 0, date: "desc" });
  const categories = await getAllCategories();
  const site = await getSiteConfig();
  const page = await getPageBySlug("blog");
  return {
    props: {
      posts,
      categories,
      site,
      page
    },
    revalidate: 1
  };
}

export default withRouter(Blog);
