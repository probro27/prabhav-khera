import React from "react";
import ProjectImage from "./ProjectImage";

function ProjectItem(props) {
    if(props.project.id % 2 === 0){
        return (
            <div className="sm:flex sm:justify-center sm:items-center py-8">
               
                <div className="sm:flex w-full sm:w-3/4 sm:flex-col sm:justify-center sm:items-center">
                  <div className="w-full sm:w-11/12 flex flex-col justify-center items-center">
                    <h1 className="text-xl font-bold text-pink-600 dark:text-terminal">
                      <a href={props.project.url}>
                        {props.project.name}
                      </a>
                    </h1>
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
            <div className="sm:flex sm:justify-center sm:items-center">
                <div className="w-full sm:w-1/4">
                    <ProjectImage image={props.project.image} name={props.project.name}/>
                </div>
                <div className="sm:flex w-full sm:w-3/4 sm:flex-col sm:justify-center sm:items-center">
                  <div className="w-full sm:w-11/12 flex flex-col justify-center items-center">
                    <h1 className="text-xl font-bold text-pink-600 dark:text-terminal">
                      <a href={props.project.url}>
                        {props.project.name}
                      </a>  
                    </h1>
                    <p className="dark:text-white italic">{props.project.tech}</p>
                    <p className="dark:text-white">{props.project.description}</p>
                  </div>
                </div>
              
            </div>
          );
    }
  
}

export default ProjectItem;
