import React from 'react'
import data from './work.json'
import WorkItem from './WorkItem'

function Works() {
    return (
        <div className="flex flex-col justify-center items-center mx-16 py-8">
            {
                data.map((work)=> {
                    return <WorkItem work={work} key={work.id}/>
                })
            }
        </div>
    )
}

export default Works