import Hero from "../components/home_page_components/Hero";
import HeroBg from "../assets/images/header-five-bg.jpg";
import Article from "../components/blog_page_component/Article";
import Paragraph from "../components/about_page_component/Paragraph";
import articlesList from "../assets/articles";

function Blog() {
  return (
    <>
      <Hero bg={HeroBg} title={"blog page"} />
      <div className="container py-5">
        <div className="row mb-5 pb-5 pb-md-0">
          <div className="col-md-6 mb-3 mb-md-0">
            <Article
              image={articlesList[0].background}
              author={articlesList[0].author}
              id={articlesList[0].id}
              title={articlesList[0].title}
              date={articlesList[0].date}
              description={articlesList[0].description}
            />
          </div>
          <div className="col-md-6 mb-3 mb-md-0">
            <Article
              image={articlesList[1].background}
              author={articlesList[1].author}
              id={articlesList[1].id}
              title={articlesList[1].title}
              date={articlesList[1].date}
              description={articlesList[1].description}
            />
          </div>
        </div>
        <div className="row mb-5 pb-5 pb-md-0">
          <div className="col-md-4 mb-3 mb-md-0">
            <Article
              image={articlesList[2].background}
              author={articlesList[2].author}
              id={articlesList[2].id}
              title={articlesList[2].title}
              date={articlesList[2].date}
              description={articlesList[2].description}
            />
          </div>
          <div className="col-md-4 mb-3 mb-md-0">
            <Article
              image={articlesList[3].background}
              author={articlesList[3].author}
              id={articlesList[3].id}
              title={articlesList[3].title}
              date={articlesList[3].date}
              description={articlesList[3].description}
            />
          </div>
          <div className="col-md-4 mb-3 mb-md-0">
            <Article
              image={articlesList[4].background}
              author={articlesList[4].author}
              id={articlesList[4].id}
              title={articlesList[4].title}
              date={articlesList[4].date}
              description={articlesList[4].description}
            />
          </div>
        </div>
        <div className="row mb-5 pb-5 pb-md-0">
          <div className="col-md-3 mb-3 mb-md-0">
            <Article
              image={articlesList[5].background}
              author={articlesList[5].author}
              id={articlesList[5].id}
              title={articlesList[5].title}
              date={articlesList[5].date}
              description={articlesList[5].description}
            />
          </div>
          <div className="col-md-3 mb-3 mb-md-0">
            <Article
              image={articlesList[6].background}
              author={articlesList[6].author}
              id={articlesList[6].id}
              title={articlesList[6].title}
              date={articlesList[6].date}
              description={articlesList[6].description}
            />
          </div>
          <div className="col-md-3 mb-3 mb-md-0">
            <Article
              image={articlesList[7].background}
              author={articlesList[7].author}
              id={articlesList[7].id}
              title={articlesList[7].title}
              date={articlesList[7].date}
              description={articlesList[7].description}
            />
          </div>
          <div className="col-md-3 mb-3 mb-md-0">
            <Article
              image={articlesList[8].background}
              author={articlesList[8].author}
              id={articlesList[8].id}
              title={articlesList[8].title}
              date={articlesList[8].date}
              description={articlesList[8].description}
            />
          </div>
        </div>
        <Paragraph />
      </div>
    </>
  );
}

export default Blog;
