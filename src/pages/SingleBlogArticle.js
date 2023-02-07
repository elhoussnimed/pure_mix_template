import "./SingleBlogArticle.css";
import articlesList from "../assets/articles";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Hero from "../components/home_page_components/Hero";
import HeroBg from "../assets/images/header-five-bg.jpg";
import Comments from "../components/blog_page_component/Comments";
import AddNewComment from "../components/blog_page_component/AddNewComment";

function SingleBlogArticle() {
  const { blogId } = useParams();
  const [blog, setBlog] = useState({});

  useEffect(() => {
    const blogFiltred = articlesList.filter(el => el.id === blogId)
    setBlog(blogFiltred[0]);
    
    
  }, []);

  
  const { background, id, title, author, date, description } = blog;
  
  return (
    <>
      <Hero bg={HeroBg} title={"single blog"} />
      <div id={id} className="singleBlogArticle container col-12 col-md-8 mx-auto">
        <h1 className="mb-1 fw-bold text-capitalize">{title}</h1>
        <div className="d-flex gap-3 mb-3">
          <p className="mb-0 text-capitalize text-secondary">by : {author} </p>
          <p className="mb-0 text-capitalize text-secondary"> {date} </p>
        </div>
        <p className="mb-3">{description}</p>
        <p className="lh-lg text-secondary mb-3 px-2 border-start border-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, sequi eius? Ipsum recusandae ea possimus voluptates, sed natus ab soluta!</p>
        <img src={background} alt={title} className='w-100 mb-3' />
        <p className="lh-lg text-secondary mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, sequi eius? Ipsum recusandae ea possimus voluptates, sed natus ab soluta Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, sequi eius? Ipsum recusandae ea possimus voluptates, sed natus ab soluta!</p>
        <Comments />
        <AddNewComment />
      </div>
    </>
  );

}

export default SingleBlogArticle;
