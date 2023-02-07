import './SingleComment.css';

function SingleComment({image,name,date,comment}) {
  return (
    <div className='singleComment d-flex gap-3 mb-5'>
        <img src={image} alt="comment 1" className='commentImage'/>
        <div className='commentInfo'>
            <p className='mb-0 text-uppercase fw-bold fs-5'>{name}</p>
            <p className='mb-1 text-secondary'>{date}</p>
            <p className='commentText mb-1 lh-lg'>{comment}</p>
        </div>
    </div>
  )
}

export default SingleComment