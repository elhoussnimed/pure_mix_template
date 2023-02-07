import "./ContactInfoItem.css";

function ContactInfoItem({ icone, title, info }) {
  return (
    <div className="contactInfoItem border d-flex flex-column flex-md-row align-items-center p-3 col-12 col-md-3">
      <div className="me-md-3">{icone}</div>
      <div>
        <p className=" contactItemTitle mb-0 fw-bold text-capitalize text-center text-md-start">
          {title} :
        </p>
        <p className="mb-0 ">{info}</p>
      </div>
    </div>
  );
}

export default ContactInfoItem;
