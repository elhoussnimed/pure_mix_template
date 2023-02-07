import Hero from "../components/home_page_components/Hero";
import HeroBg from "../assets/images/header-four-bg.jpg";
import ContactUs from "../components/contact_page_components/ContactUs";
import ContactInfo from '../components/contact_page_components/ContactInfo'

function Contact() {
  return (
    <>
        <Hero bg={HeroBg} title={"contact page"}/>
        <ContactUs />
        <ContactInfo />
    </>
  )
}

export default Contact