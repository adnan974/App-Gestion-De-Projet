import React, { useContext } from 'react'

import Axios from 'axios';
import TaskForm from './taskForm';
import { UPDATE_TASK_TITLE } from '../../constants';



function UpdateTask(props) {



    const initialValues = {
        id: props.taskData.id,
        libelle: props.taskData.libelle,
        description: props.taskData.description,
        projet: {
            id: props.projectId,
        }
    }




    const onSubmit = (values) => {
        console.log(values)
        Axios.patch("http://localhost:3000/task/update", { task: values })
            .then(async () => {
                const updatedTask = [values]
                const updatedTaksData = await props.taskStateElement.tasksData.map(obj => updatedTask.find(o => o.id === obj.id) || obj)
                props.taskStateElement.setTasksData({ tasks: updatedTaksData })
            })
            .catch((error) => {
                console.log(error)
            })
    }
    {/* remarque: 
            1- J'utilise taskForm ici au lieu de mettre le formulaire en brut  
            2- Si je mets onSubmit= ()=>onSubmit, la validation ne marche pas */}

    return (
        <TaskForm onSubmit={onSubmit} initialValues={initialValues} show={true} closeCallback={props.setShowUpdateComponent} title={UPDATE_TASK_TITLE}></TaskForm>
    )
}

export default UpdateTask
