import React from "react";
import data from "./projects.json";
import ProjectItem from "./ProjectItem";

function Projects() {
  return (
    <section className="parallex py-32">
      <div className="flex flex-col justify-center items-center mx-16">
        {data.map((project) => {
          return <ProjectItem key={project.id} project={project} />;
        })}
      </div>
    </section>
  );
}

export default Projects;
