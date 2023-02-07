import './ContactInfo.css';
import ContactInfoItem from './ContactInfoItem';

function ContactInfo() {
  return (
    <div className='container mb-5 p-4 d-flex justify-content-center flex-wrap gap-2'>
        <ContactInfoItem icone={<i className="fa-solid fa-mobile-screen-button"></i>} title={"phone"} info={"+123-456-789"}/>
        <ContactInfoItem icone={<i className="fa-solid fa-envelope-open"></i>} title={"email"} info={"contact@contact.com"}/>
        <ContactInfoItem icone={<i className="fa-solid fa-map-location-dot"></i>} title={"address"} info={"123 New Street , Big City 11220 Country"}/>
    </div>
  )
}

export default ContactInfo