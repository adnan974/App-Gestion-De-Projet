import React, { useState } from 'react'
import { BoostrapRow } from '../components/bootstrapRow';
import AddTask from '../components/Task/addTask';
import TaskCard from '../components/Task/taskCard';
import { useFetch } from '../shared/useFetch'

function TaskMenu() {


    const [tasksData, setTasksData] = useFetch("http://localhost:3000/user/task/");
    const [showAddTaskComponent, setShowAddTaskComponent] = useState(false);



    // A FAIRE: rendre cette partie générique DEJA UTILISEE DANS projectMenu 
    const buildTaskLayout = () => {
        let taskCardArray = [];
        let rowOfTaskCardArray = [];
        tasksData.tasks.map((task, index) => {
            taskCardArray.push(<TaskCard taskData={{ id: task.id, libelle: task.libelle, description: task.description }} stateElement={{ tasksData: tasksData.tasks, setTasksData: setTasksData }} />)
            if ((index + 1) % 3 === 0) {
                // rq: on utilise un child propd ici
                rowOfTaskCardArray.push(<BoostrapRow>{taskCardArray}</BoostrapRow>)
                taskCardArray = []
            }
        })

        return [rowOfTaskCardArray, taskCardArray];
    }
    return (
        <div>
            <button className="btn btn-primary" onClick={() => setShowAddTaskComponent(true)} >Ajouter une Tâche </button>
            {tasksData && <BoostrapRow>{buildTaskLayout()}</BoostrapRow>}
            {showAddTaskComponent && <AddTask projectId={null} setShowAddTaskComponent={setShowAddTaskComponent} taskStateElement={{ tasksData: tasksData.tasks, setTasksData: setTasksData }} />}
        </div>
    )
}

export default TaskMenu
