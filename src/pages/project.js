import Axios from 'axios';
import React, { createContext, useContext, useState } from 'react'
import { useParams } from 'react-router-dom';
import { AuthContext } from '../App';
import ProjectTask from '../components/Project/ProjectTasks';
import AddTask from '../components/Task/addTask';
import { useFetch } from '../shared/useFetch'

//  A FAIRE: ou ranger les contextes ?
export const AddOperationContext = createContext()

function Project() {

    // Remarque : permet de récupérer l'id présent dans l'url
    let { id } = useParams();

    const [showAddTaskComponent, setShowAddtaskComponent] = useState(false)


    const [taskData, setTaskData] = useFetch(`http://localhost:3000/project/task/${id}`)
    const [currentProjectData] = useFetch(`http://localhost:3000/project/${id}`)

    const updateTaskListAfterDelete = async (id) => {

        let taskDataUpdated = await taskData.task.filter(el => el.id != id)
        await setTaskData({ task: taskDataUpdated })

    }

    const handleAddTask = () => {
        setShowAddtaskComponent(true)
    }




    return (

        <div>
            <h3>Titre: {currentProjectData && currentProjectData.titre}  </h3>
            <h4>Description: {currentProjectData && currentProjectData.description} </h4>
            <h4> Tâches </h4>
            <button type="button" className="btn btn-primary btn-sm" data-toggle="modal" data-target="#updateOrAddTaskModal" onClick={handleAddTask}>Ajouter</button>

            <ul className="list-group">
                {taskData && taskData.task.map((task) => {
                    return (
                        <ProjectTask projectId={id} taskId={task.id} libelle={task.libelle} description={task.description} updateTaskListAfterDelete={updateTaskListAfterDelete} />)
                })}
            </ul>


            <AddOperationContext.Provider
                value={{ showAddTaskComponent, setShowAddtaskComponent }}
            >
                {showAddTaskComponent && <AddTask projectId={id} />}
            </AddOperationContext.Provider>


        </div>
    )
}

export default Project
