import React from 'react'

const ProjectDetails = (props) => {
    const id = props.match.params.id;
    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Project Title - {id} </span>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus quibusdam minus ex asperiores hic. Quam saepe temporibus molestias, laudantium dolore tempora commodi expedita optio nostrum dignissimos sunt. Consequuntur, cum quis!</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>Posted by the Net Ninja</div>
                    <div>2nd September, 2AM</div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails


