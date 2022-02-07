import React from 'react'
import data from './projects.json'
import ProjectItem from './ProjectItem'
import '../../pages/_app'

function Projects() {
    return (
        <div className="grid grid-cols-2 gap-4">
            {
                data.map((project)=> {
                    return <ProjectItem key={project.id} project={project} />
                })
            }
        </div>
    )
}

export default Projects
