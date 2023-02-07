import "./Comments.css";
import comment_bg_1 from '../../assets/images/comment1.jpg';
import comment_bg_2 from '../../assets/images/comment2.jpg';
import SingleComment from "./SingleComment";

function Comments() {
  return (
    <div className="commentsList container px-0 my-5">
      <p className="text-capitalize fw-bold fs-4">Comments list :</p>
      <SingleComment image={comment_bg_1} name={"jenne leon"} date={"5 june 2016, sunday"} comment={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, sequi eius? Ipsum recusandae ea possimus voluptates, sed natus ab soluta!"}/>
      <SingleComment image={comment_bg_2} name={"jenne leon"} date={"5 june 2016, sunday"} comment={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, sequi eius? Ipsum recusandae ea possimus voluptates, sed natus ab soluta!"}/>
    </div>
  );
}

export default Comments;
