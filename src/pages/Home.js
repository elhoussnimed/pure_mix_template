import Hero from "../components/home_page_components/Hero";
import Portfolio from "../components/home_page_components/Portfolio";
import HeroBg from "../assets/images/header-bg.jpg";

function Home() {
  return (
    <>
      <Hero bg={HeroBg} title={"home page"} />
      <Portfolio />
    </>
  );
}
export default Home;
