import React from 'react'

const ProjectDetails = (props)=> {
    const id=props.match.params.id;
    return (
        <div className="container section project-deatail">
            <div className="card z-depth-0">
                <div className="card-content">
    <span className="card-title">Project title={id}</span>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati dolorum commodi vel tempora doloremque facilis? Dolor fugit, at iste porro, libero esse ullam, officiis aliquam corporis sint fugiat deserunt nihil.</p>
                </div>
                <div className="card-action  lighten-3 grey-text">
                    <div>posted by Mritunjay rai</div>
                    <div>date</div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails
