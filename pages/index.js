import Layout from "../components/Layout/Layout";
import Hero from "../components/Hero/Hero";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import PageContent from "../actions/PageContent";
import { getSiteConfig, getPageBySlug } from "../lib/api";

export default function HomePage({ site, page }) {
  return (
    <Layout site={site} page={page}>
      <Hero
        title={page.title}
        content={page.description}
        background={page.openGraphImage}
      />
      <Container>
        <Row>
          <PageContent page={page} />
        </Row>
      </Container>
    </Layout>
  );
}

export async function getStaticProps() {
  const site = await getSiteConfig();
  const page = await getPageBySlug("/");
  return {
    props: {
      site,
      page
    },
    revalidate: 1
  };
}
