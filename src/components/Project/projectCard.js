import { Link } from 'react-router-dom'


const ProjectCard = (props) => {




    return (
        <div className="col" key={props.id}>


            <div className="card w-3 p-1" >
                {/* <img className="card-img-top" src="..." alt="Card image cap" /> */}
                <div className="card-body">
                    <h5 className="card-title" >{props.title}</h5>
                    <p className="card-text">{props.description} </p>
                    <Link to={`project/${props.id}`}>
                        <button className="btn btn-primary">Accerder au projet</button>
                    </Link>

                </div>
            </div>



        </div >
    )
}

export default ProjectCard
