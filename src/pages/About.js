import Hero from "../components/home_page_components/Hero";
import HeroBg from "../assets/images/header-three-bg.jpg";
import AboutContent from "../components/about_page_component/AboutContent";

function About() {
  return (
    <>
      <Hero bg={HeroBg} title={"about page"} />
      <AboutContent />
    </>
  );
}
export default About;
