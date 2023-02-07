import "./Portfolio.css";
import Projects from "./Projects";
import { useState } from "react";

function Portfolio() {
  const buttons = document.querySelectorAll(".tabs .tab");

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      buttons.forEach((button) => button.classList.remove("clicked"));
      btn.classList.add("clicked");
    });
  });

  const [category, setCategory] = useState("all");

  return (
    <section className="portfolio container">
      <div className="tabs">
        <button className="tab" onClick={() => setCategory("all")}>
          all
        </button>
        <button className="tab" onClick={() => setCategory("graphic")}>
          graphic
        </button>
        <button className="tab" onClick={() => setCategory("web template")}>
          web template
        </button>
        <button className="tab" onClick={() => setCategory("photoshop")}>
          photoshop
        </button>
        <button className="tab" onClick={() => setCategory("branding")}>
          branding
        </button>
      </div>
      <Projects cat={category} />
    </section>
  );
}

export default Portfolio;
