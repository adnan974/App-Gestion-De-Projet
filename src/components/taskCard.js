import Axios from 'axios'
import { useState } from 'react';
import { Link } from 'react-router-dom'
import { UPDATE_TASK_TITLE } from '../constants';
import UpdateTask from './Task/updateTask';

// A Faire: rendre cette partie générique avec projet card ?
const TaskCard = (props) => {

    const [showUpdateComponent, setShowUpdateComponent] = useState(false);

    const handleDelete = () => {
        console.log(props.taskData.id)
        Axios.delete(`http://localhost:3000/task/delete/${props.taskData.id}`)
            .then(async () => {
                let updatedTasksData = await props.stateElement.tasksData.filter(task => task.id != props.taskData.id)
                props.stateElement.setTasksData({ tasks: updatedTasksData })
            })
    }

    return (

        <div className="col" key={props.id}>


            <div className="card w-3 p-1" >
                {/* <img className="card-img-top" src="..." alt="Card image cap" /> */}
                <div className="card-body">
                    <h5 className="card-title" >{props.taskData.libelle}</h5>
                    <p className="card-text">{props.taskData.description} </p>
                    <Link to={`task/${props.taskData.id}`}>
                        <button className="btn btn-primary">Accerder à la tâche</button>
                    </Link>
                    <button className="btn btn-primary" onClick={() => setShowUpdateComponent(true)}>Modifier</button>
                    <button className="btn btn-danger" onClick={handleDelete}>Supprimer</button>
                </div>
            </div>


            {showUpdateComponent && <UpdateTask taskStateElement={{ tasksData: props.stateElement.tasksData, setTasksData: props.stateElement.setTasksData }} setShowUpdateComponent={setShowUpdateComponent} taskData={{ id: props.taskData.id, libelle: props.taskData.libelle, description: props.taskData.description }} />}
        </div >
    )
}

export default TaskCard
