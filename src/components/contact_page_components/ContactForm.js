import "./ContactForm.css";

function ContactForm() {
  return (
    <>
      <h3 className='text-uppercase fw-bold mb-2'>let's work together!</h3>
      <input type="text" placeholder="your name" className='d-block w-100 mb-2 p-2 rounded-3 text-capitalize'/>
      <input type="email" placeholder="your email" className='d-block w-100 mb-2 p-2 rounded-3 text-capitalize'/>
      <textarea placeholder="message" className='d-block w-100 mb-2 p-2 rounded-3 text-capitalize'></textarea>
      <button className='p-2 mb-2 rounded-3 text-capitalize fs-6'>send a message</button>
    </>
  );
}

export default ContactForm;
