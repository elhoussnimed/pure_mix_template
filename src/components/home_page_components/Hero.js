import "./Hero.css";

function Hero(props) {
  return (
    <section className="hero" style={{ backgroundImage: `url(${props.bg})` }}>
      <div className="content">
        <h2 className="contentTitle">{props.title} title</h2>
        <p className="contentDescription">content description description</p>
      </div>
    </section>
  );
}

export default Hero;
