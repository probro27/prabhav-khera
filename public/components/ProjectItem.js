import React from "react";
import ProjectImage from "./ProjectImage";

function ProjectItem(props) {
    if(props.project.id % 2 === 0){
        return (
            <div className="flex flex justify-center items-center">
               
                <div className="flex w-full sm:w-3/4 flex-col justify-center items-center">
                  <div className="w-full sm:w-11/12 flex flex-col justify-center items-center">
                    <h1 className="text-xl dark:text-white">{props.project.name}</h1>
                    <p className="dark:text-white italic">{props.project.tech}</p>
                    <p className="dark:text-white">{props.project.description}</p>
                  </div>
                </div>
                <div className="w-full sm:w-1/4">
                    <ProjectImage image={props.project.image} />
                </div>
            </div>
            
          );
    }
    else{
        // return a div with preview on the left and description on the right
        return (
            <div className="flex flex justify-center items-center">
                <div className="w-full sm:w-1/4">
                    <ProjectImage image={props.project.image} />
                </div>
                <div className="flex w-full sm:w-3/4 flex-col justify-center items-center">
                  <div className="w-full sm:w-11/12 flex flex-col justify-center items-center">
                    <h1 className="text-xl dark:text-white">{props.project.name}</h1>
                    <p className="dark:text-white italic">{props.project.tech}</p>
                    <p className="dark:text-white">{props.project.description}</p>
                  </div>
                </div>
              
            </div>
          );
    }
  
}

export default ProjectItem;
