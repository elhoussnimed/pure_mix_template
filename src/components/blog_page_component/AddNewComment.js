import './AddNewComment.css';

function AddNewComment() {
  return (
    <div className='addNewComment mb-5'>
        <p className='text-capitalize fw-bold fs-4'>leave a comment :</p>
        <div className='form'>
            <input type="text" placeholder='name' className='text-capitalize p-2  mb-2 d-block w-100'/>
            <input type="email" placeholder='email' className='text-capitalize p-2  mb-2 d-block w-100'/>
            <textarea placeholder='message' className='text-capitalize p-2  mb-2 d-block w-100'/>
            <button className='d-block w-100 p-2 bg-dark text-light text-capitalize fs-5'>submit</button>
        </div>
    </div>
  )
}

export default AddNewComment