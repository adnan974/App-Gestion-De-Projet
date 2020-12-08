import { Link } from 'react-router-dom'

// A Faire: rendre cette partie générique avec projet card ?
const TaskCard = (props) => {




    return (

        <div className="col">


            <div className="card w-3 p-1" >
                {/* <img className="card-img-top" src="..." alt="Card image cap" /> */}
                <div className="card-body">
                    <h5 className="card-title" key={props.id}>{props.libelle}</h5>
                    <p className="card-text">{props.description} </p>
                    <Link to={`task/${props.id}`}>
                        <button className="btn btn-primary">Accerder à la tâche</button>
                    </Link>

                </div>
            </div>



        </div >
    )
}

export default TaskCard
