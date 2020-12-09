import Axios from 'axios';
import React, { useContext } from 'react'
import { useParams } from 'react-router-dom';
import { AuthContext } from '../App';
import ProjectTask from '../components/Project/ProjectTasks';
import { useFetch } from '../shared/useFetch'

function Project() {

    const state = useContext(AuthContext)
    // Remarque : permet de récupérer l'id présent dans l'url
    let { id } = useParams();
    //const [currentProjectData] = useFetch(`http://localhost:3000/project/${id}`)

    const [taskData, setTaskData] = useFetch(`http://localhost:3000/project/task/${id}`)
    const [currentProjectData] = useFetch(`http://localhost:3000/project/${id}`)
    console.log(taskData)

    const handleDeleteTask = (id) => {
        Axios.delete(`http://localhost:3000/task/delete/${id}`, { headers: { Authorization: `Bearer ${state.token}` } })
            .then(async () => {
                let taskDataUpdated = await taskData.task.filter(el => el.id != id)
                await setTaskData({ task: taskDataUpdated })
            })
    }


    return (

        <div>
            <h3>Titre: {currentProjectData && currentProjectData.titre}  </h3>
            <h4>Description: {currentProjectData && currentProjectData.description} </h4>
            <h4> Tâches </h4>
            <ul className="list-group">
                {taskData && taskData.task.map((task) => {
                    return (
                        <ProjectTask id={task.id} libelle={task.libelle} description={task.description} handleDelete={handleDeleteTask} />)
                })}
            </ul>


        </div>
    )
}

export default Project
