import Layout from "../components/Layout/Layout";
import ShopLayout from "../components/Shop/ShopLayout/ShopLayout";
import ShopCard from "../components/Shop/Product/ShopCard";
import Hero from "../components/Hero/Hero";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import PageContent from "../actions/PageContent";
import { getSiteConfig, getPageBySlug } from "../lib/api";
import CardColumns from "react-bootstrap/CardColumns";

export default function Shop({ site, page }) {
  return (
    <Layout site={site} page={page}>
      <Hero
        title={page.title}
        content={page.description}
        background={page.openGraphImage}
      />
      <ShopLayout>
        <Container fluid>
          <Row>
            <CardColumns>
              <ShopCard />
              <ShopCard />
              <ShopCard />
              <ShopCard />
              <ShopCard />
            </CardColumns>
            <PageContent page={page} />
          </Row>
        </Container>
      </ShopLayout>
    </Layout>
  );
}

export async function getStaticProps() {
  const site = await getSiteConfig();
  const page = await getPageBySlug("shop");
  return {
    props: {
      site,
      page
    },
    revalidate: 1
  };
}
