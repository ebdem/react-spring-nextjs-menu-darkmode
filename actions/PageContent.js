import CallToAction from "../components/CallToAction/CallToAction";
import ContactUs from "../components/ContactUs/ContactUs";
import LatestNews from "../components/LatestNews/LatestNews";
import ContactForm from "../components/Forms/ContactForm";
import ServicesCards from "../components/Servises/ServicesCards";
import CarouselMain from "../components/Carousel/CarouselMain";
import ContactMap from "../components/Maps/ContactMap";

const pageContent = ({ page }) => {
  const data = page.content;
  return (
    <>
      {data?.map((item) => {
        if (item._type === "callToAction") {
          return <CallToAction data={item} key={item._key} />;
        }
        if (item._type === "contactUs") {
          return <ContactUs data={item} key={item._key} />;
        }
        if (item._type === "latestNews") {
          return <LatestNews data={item} posts={page.posts} key={item._key} />;
        }
        if (item._type === "contactForm") {
          return <ContactForm data={item} key={item._key} />;
        }
        if (item._type === "contactMap") {
          return <ContactMap data={item} key={item._key} zoom={15} />;
        }
        if (item._type === "servicesCards") {
          return (
            <ServicesCards
              data={item}
              services={page.services}
              key={item._key}
            />
          );
        }
        if (item._type === "servisesCarousel") {
          return (
            <CarouselMain
              data={item}
              services={page.services}
              key={item._key}
            />
          );
        }
        return "";
      })}
    </>
  );
};

export default pageContent;
