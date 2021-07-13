import React, { useState, useEffect } from "react";
import FilterBar from "./FilterBar";
import ProjectItem from "./ProjectItem";

function ProjectList() {
  const [phaseFilter, setPhaseFilter] = useState("All");
  const [projectSearch, setProjectSearch] = useState("");

  // Move "projects" state from App so that it
  // doesn't need to re-render
  const [projects, setProjects] = useState([]);

  // shouldComponentUpdate = () => false
  useEffect(() => {
    fetch("http://localhost:3000/projects")
      .then((r) => r.json())
      .then(setProjects);
  }, []);

  const projectItems = projects
    .filter((project) => {
      return phaseFilter === "All" || project.phase === phaseFilter;
    })
    .filter((project) => {
      return project.name.toLowerCase().includes(projectSearch.toLowerCase());
    })
    .map((project) => {
      return <ProjectItem key={project.id} project={project} />;
    });

  return (
    <section>
      <h2>Projects</h2>

      <FilterBar
        setPhaseFilter={setPhaseFilter}
        setProjectSearch={setProjectSearch}
      />

      <ul className="cards">{projectItems}</ul>
    </section>
  );
}

export default ProjectList;
