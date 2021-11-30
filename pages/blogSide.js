import PageHeading from "../components/Blog/PageHeading";
import FilterMenu from "../components/Blog/FilterMenu/FilterMenu";
import {
  getAllPosts,
  getAllCategories,
  getSiteConfig,
  getPageBySlug
} from "../lib/api";
import Pages from "../actions/pagination";
import { useState } from "react";
import SidebarLayout from "../components/Layout/SidebarLayout/SidebarLayout";
import SideButton from "../components/Blog/SideButton";
import TogglerWrapper from "../components/Blog/FilterMenu/TogglerWrapper";

const BlogSide = ({ posts, categories, site, page }) => {
  const [filter, setFilter] = useState({
    date: { asc: 0 },
    category: { displayCategory: "all" },
    search: { searchValue: 0 }
  });

  const [toggle, set] = useState(false);
  const handleChange = () => {
    set(!toggle);
  };

  const subtitle =
    filter.category.displayCategory === "all"
      ? "All categories"
      : `Category: ${filter.category.displayCategory}`;

  return (
    <SidebarLayout
      categories={categories}
      filter={filter}
      onChange={(option, value) => setFilter({ ...filter, [option]: value })}
      toggle={toggle}
      site={site}
      page={page}
    >
      <PageHeading head={page.title} subtitle={subtitle} />
      <FilterMenu
        filter={filter}
        onChange={(option, value) => setFilter({ ...filter, [option]: value })}
        on_Change={handleChange}
      />
      <TogglerWrapper>
        <SideButton on_Change={handleChange} />
      </TogglerWrapper>

      <hr />

      <Pages posts={posts} filter={filter} />
    </SidebarLayout>
  );
};

export async function getStaticProps() {
  const posts = await getAllPosts({ offset: 0, date: "desc" });
  const categories = await getAllCategories();
  const site = await getSiteConfig();
  const page = await getPageBySlug("blogSide");
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

export default BlogSide;
