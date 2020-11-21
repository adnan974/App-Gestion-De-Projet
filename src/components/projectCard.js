import React from 'react'
import { Link } from 'react-router-dom'

const ProjectCard = () => {
    return (
        <div>
            <div className="card w-25 p-3" >
                <img className="card-img-top" src="..." alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">Projet N</h5>
                    <p className="card-text">Description : Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, nemo quia. Consectetur facere minima, nisi consequuntur blanditiis assumenda minus dolores earum quo. Adipisci aperiam totam consequuntur officiis itaque recusandae necessitatibus.</p>
                    <Link to="Home">
                        <button className="btn btn-primary">Accerder au projet</button>
                    </Link>

                </div>
            </div>
        </div >
    )
}

export default ProjectCard
