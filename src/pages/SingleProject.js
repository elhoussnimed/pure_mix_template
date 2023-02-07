import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import projectsList from "../assets/projects";
import "./SingleProject.css";
import Hero from "../components/home_page_components/Hero";
import HeroBg from "../assets/images/header-bg.jpg";

function SingleProject() {
  const { projectId } = useParams();
  const [project, setProject] = useState({});

  useEffect(() => {
    const filtredProject = projectsList.filter((el) => el.id === +projectId);
    setProject(filtredProject[0]);
  }, [projectId]);

  const { project_name, project_category, project_bg } = project;

  return (
    <>
      <Hero bg={HeroBg} title={"single project"} />
      <div className="singleProject container d-flex flex-wrap p-5">
        <div className="singleProjectInfo col-12 col-md-3 text-center">
          <p className="fw-bold text-uppercase">client:</p>
          <p className="text-capitalize text-secondary">john doe</p>
          <p className="fw-bold text-uppercase">date:</p>
          <p className="text-capitalize text-secondary">12/12/2022</p>
          <p className="fw-bold text-uppercase">project name:</p>
          <p className="text-capitalize text-secondary">{project_name}</p>
          <p className="fw-bold text-uppercase">category:</p>
          <p className="text-capitalize text-secondary">{project_category}</p>
        </div>
        <div className="singleProjectImg col-12 col-md-9 px-md-5">
          <p className="w-100 lh-lg text-secondary mb-5">
            Ut urna turpis, tempor sit amet massa vitae, pulvinar porttitor
            magna. Pellentesque dolor lorem, blandit ac congue non, mattis a mi.
            Vestibulum id accumsan neque. Aenean turpis dui, consectetur in
            ornare quis, sollicitudin vel mauris. Aliquam eros elit, blandit et
            tortor non, ornare tincidunt ante. Sed quis quam ullamcorper,
            tincidunt eros vel, malesuada purus. Mauris risus erat, faucibus in
            aliquam ut, posuere posuere metus. Phasellus eget sem tempus,
            egestas nisl dapibus, aliquet elit.
          </p>
          <img
            src={project_bg}
            alt={project_name}
            className="w-100 object-fit-cover"
          />
        </div>
      </div>
    </>
  );
}

export default SingleProject;
