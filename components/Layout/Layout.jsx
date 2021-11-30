import Head from "next/head";
import Navigation from "./Navigation/Navigation";
import Footer from "./Footer/Footer";
import { urlFor } from "../../lib/api";

const Layout = ({ children, site, page }) => {
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
      <Navigation site={site} />
      {children}
      <Footer site={site} />
    </div>
  );
};

export default Layout;
