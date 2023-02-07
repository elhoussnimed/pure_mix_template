import ContactForm from "./ContactForm";
import "./ContactUs.css";
import Map from './Map'

function ContactUs() {
  return (
        <div className='ContactUs container d-flex flex-wrap justify-content-center gap-4 mb-5'>
            <div className="contact_map col-12 col-md-5">
                <Map  />
            </div>
            <div className="contact_form col-12 col-md-5">
                <ContactForm />
            </div>
        </div>
    )
}
 
export default ContactUs;
