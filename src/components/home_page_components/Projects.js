import "./Projects.css";
import projectsList from "../../assets/projects";
import Project from "./Project";

function Projects({cat}) {
  const filtredProjects = projectsList.filter((project) => {
    if (cat === "all") {
      return project;
    } else {
      return project.project_category === cat;
    }
  });

  const projects = filtredProjects.map((project) => {
    const { project_name, project_category, project_bg, id } = project;
    return (
      <Project key={id} project_name={project_name} project_category={project_category} project_bg={project_bg} id={id}/>
    );
  });

  return <div className="projects">{projects}</div>;
}

export default Projects;
