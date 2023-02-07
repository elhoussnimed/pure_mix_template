import './AboutContent.css'
import img_1 from '../../assets/images/about-img1.jpg'
import img from '../../assets/images/about-img.jpg'
import Paragraph from './Paragraph'

function AboutContent() {
  return (
    <div className='container'>
        <div className="row justify-content-center mb-5 py-2">
            <div className='about-img col-lg-4'>
                <img src={img_1} alt="about " className='w-100 h-100 object-fit-cover'/>
                <Paragraph />
            </div>
            <div className="col-lg-6">
                <Paragraph />
                <div>
                    <p className='lh-lg text-secondary px-2 border-5 border-start '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, iste amet dignissimos saepe reiciendis sapiente sint dolorum voluptas nostrum tempore iste amet dignissimos saepe reiciendis sapiente sint dolorum voluptas nostrum tempore?</p>
                    <img src={img} alt="" className='w-100 h-50 object-fit-cover'/>
                </div>
                <p className='mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, eveniet. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum accusamus quia beatae nulla dignissimos porro voluptatum minus, esse deleniti doloremque.</p>
            </div>
        </div>
        <div className="row py-5">
            <div className="col-md-6 col-lg-4 p-2">
                <Paragraph />
            </div>
            <div className="col-md-6 col-lg-4 p-2">
                <Paragraph />
            </div>
            <div className="col-md-6 col-lg-4 p-2">
                <Paragraph />
            </div>
        </div>
        <div className="row ">
            <div className="col-md-6 p-2">
                <Paragraph />
            </div>
            <div className="col-md-6 p-2">
                <Paragraph />
            </div>
        </div>
    </div>
  )
}

export default AboutContent