import Head from "next/head";
import Navigation from "../Navigation/Navigation";
import Footer from "../Footer/Footer";
import CustomWidget from "../../Blog/SidebarWidgets/CustomWidget";
import Search from "../../Blog/SidebarWidgets/Search";
import CategoriesWidget from "../../Blog/SidebarWidgets/CategoriesWidget";
import { useTheme } from "../../../providers/ThemeProvider";
import { urlFor } from "../../../lib/api";

import styles from "./sidebarLayout.module.scss";
import Col from "react-bootstrap/Col";
import { Container } from "react-bootstrap";

const SidebarLayout = ({
  site,
  page,
  children,
  categories,
  onChange,
  filter,
  toggle
}) => {
  const { theme } = useTheme();
  const arrayClass = [styles.wrapper, styles.wrapperToggled];
  const trick = arrayClass[+toggle];
  const schemaData = {
    /* Your schema goes here */
  };

  return (
    <div>
      <Head>
        <meta
          name="robots"
          content={page?.disallowRobots ? "noindex" : "index"}
        />
        <title>
          {page?.title ? `${page?.title} | ${site?.title}` : site?.title}
        </title>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta name="description" content={page?.description} />
        <meta name="author" content={page?.author?.name} />
        <link rel="icon" type="image/svg" href={site?.logo} />
        <link
          rel="canonical"
          href={`${site?.url}/${page?.slug === ("/" || "#") ? "" : page?.slug}`}
        />
        {/* Open Graph */}
        <meta property="og:title" content={page?.title} key="ogtitle" />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content={page?.description}
          key="ogdesc"
        />
        <meta
          property="og:url"
          content={`${site?.url}/${
            page?.slug === ("/" || "#") ? "" : page?.slug
          }`}
          key="ogurl"
        />
        <meta
          property="og:image"
          content={urlFor(page?.openGraphImage)
            .width(1200)
            .height(630)
            .fit("max")
            .url()}
          key="ogimage"
        />
        <meta property="og:site_name" content={site?.title} key="ogsitename" />
        {/* Twitter */}
        <meta name="twitter:card" content="summary" key="twcard" />
        <meta
          property="twitter:url"
          content={`${site?.url}/${
            page?.slug === ("/" || "#") ? "" : page?.slug
          }`}
        />
        <meta
          name="twitter:creator"
          content={page?.author?.name}
          key="twhandle"
        />
        <meta name="twitter:title" content={page?.title} />
        <meta name="twitter:description" content={page?.description} />
        <meta
          name="twitter:image"
          content={urlFor(page?.openGraphImage)
            .width(1200)
            .height(630)
            .fit("max")
            .url()}
        />
      </Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <div className={`${trick} d-flex`}>
        {/* <!-- Sidebar --> */}
        <Col
          className={`p-4 bg-${theme.type} border-right ${styles.sidebarWrapper}`}
        >
          <Col className={`p-0 ${styles.group}`}>
            <Search
              title="Search"
              inputText="Search for..."
              buttonText="Go"
              onChange={onChange}
            />

            <CategoriesWidget
              title="Categories"
              categories={categories}
              onChange={onChange}
            />

            <CustomWidget title="Side Widget" />
          </Col>
        </Col>
        {/* <!-- /#sidebar-wrapper --> */}

        {/* <!-- Page Content --> */}

        <Col className={`px-0  ${styles.pageContentWrapper}`}>
          <Navigation site={site} />
          <Container className={`pt-4 ${styles.childrenWrapper}`}>
            <Col>{children}</Col>
          </Container>
          <Footer site={site} />
        </Col>

        {/* <!-- /#page-content-wrapper --> */}
      </div>
    </div>
  );
};

export default SidebarLayout;
