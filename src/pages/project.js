import Axios from 'axios';
import React, { createContext, useContext, useState } from 'react'
import { useParams } from 'react-router-dom';
import { AuthContext } from '../App';
import ProjectTask from '../components/Project/ProjectTasks';
import AddTask from '../components/Task/addTask';
import { useFetch } from '../shared/useFetch'

//  Tag[useParams]
//  Ce composant est rempli d'une maniere particulière, dans le sens ou il n'a pas de props mais est appelé 
//  après un Link. Je ne sais pas si c'est une bonne pratique
function Project() {

    // Remarque : permet de récupérer l'id présent dans l'url
    let { id } = useParams();

    const [showAddTaskComponent, setShowAddTaskComponent] = useState(false)


    const [taskData, setTaskData] = useFetch(`http://localhost:3000/project/task/${id}`)
    const [currentProjectData] = useFetch(`http://localhost:3000/project/${id}`)

    const updateTaskListAfterDelete = async (id) => {

        let taskDataUpdated = await taskData.tasks.filter(el => el.id != id)
        await setTaskData({ tasks: taskDataUpdated })

    }

    const handleAddTask = () => {
        setShowAddTaskComponent(true)
    }




    return (

        <div>
            <h3>Titre: {currentProjectData && currentProjectData.titre}  </h3>
            <h4>Description: {currentProjectData && currentProjectData.description} </h4>
            <h4> Tâches </h4>
            <button type="button" className="btn btn-primary btn-sm" data-toggle="modal" data-target="#updateOrAddTaskModal" onClick={handleAddTask}>Ajouter</button>

            <ul className="list-group">
                {taskData && taskData.tasks.map((task) => {
                    return (
                        <ProjectTask taskStateElement={{ tasksData: taskData.tasks, setTasksData: setTaskData }} projectId={id} taskId={task.id} libelle={task.libelle} description={task.description} updateTaskListAfterDelete={updateTaskListAfterDelete} />)
                })}
            </ul>



            {showAddTaskComponent && <AddTask projectId={id} setShowAddTaskComponent={setShowAddTaskComponent} taskStateElement={{ tasksData: taskData.tasks, setTasksData: setTaskData }} />}


        </div>
    )
}

export default Project
