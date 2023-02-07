import "./Article.css";

function Article({ image, id, title, author, date, description }) {
  return (
    <div key={id}>
      <img
        src={image}
        alt="article info"
        className="w-100 h-100 object-fit-cover"
      />
      <h2 className="article_title text-uppercase fw-bold py-2">{title}</h2>
      <div className="d-flex gap-3 text-capitalize text-secondary mb-1">
        <p className="m-0">by : {author}</p>
        <p className="m-0">{date}</p>
      </div>
      <p className="article_description lh-lg">{description}</p>
      <a
        href={`/blog/${id}`}
        className="article_btn btn border p-2 text-capitalize"
      >
        read more
      </a>
    </div>
  );
}

export default Article;
