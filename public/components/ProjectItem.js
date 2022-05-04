import React from 'react'

function ProjectItem(props) {
    return (
        <div className="flex flex-col justify-center items-center">
            <h1 className="text-blue-900">{props.project.name}</h1>
            <p>{props.project.tech}</p>
            <p>{props.project.description}</p>
        </div>
    )
}

export default ProjectItem
