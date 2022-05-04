import React from 'react'
import data from './projects.json'
import ProjectItem from './ProjectItem'
// import '../../pages/_app'

function Projects() {
    return (
        <div className="flex flex-col justify-center items-center mx-16">
            {
                data.map((project)=> {
                    return <ProjectItem key={project.id} project={project} />
                })
            }
        </div>
    )
}

export default Projects
