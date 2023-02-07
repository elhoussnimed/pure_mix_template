import "./Project.css";

function Project({ project_name, project_category, project_bg, id }) {
  return (
    <div
      key={id}
      className="project"
      data-category={project_category}
      style={{ backgroundImage: `url(${project_bg})` }}
    >
      <a href={`/${id}`} title="project link">
        <i className="fa-solid fa-link"></i>
      </a>
      <h4>{project_name}</h4>
    </div>
  );
}

export default Project;
