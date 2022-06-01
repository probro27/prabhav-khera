import React from "react";
import data from "./projects.json";
import ProjectItem from "./ProjectItem";

function Projects() {
  return (
    <section className="parallex mt-16 pb-16">
      <div className="title pt-16 mt-2 mb-16">
        <h1 className="text-blue-900 font-mono dark:text-terminal text-4xl text-center">
          Projects
        </h1>
      </div>
      <div className="flex flex-col justify-center items-center mx-16">
        {data.map((project) => {
          return <ProjectItem key={project.id} project={project} />;
        })}
      </div>
    </section>
  );
}

export default Projects;
