import React, { useContext } from 'react'

import Axios from 'axios';
import TaskForm from './taskForm';
import { UpdateOperationContext } from '../Project/ProjectTasks';



function UpdateTask(props) {


    const state = useContext(UpdateOperationContext)

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
            .then(() => {
                console.log("succes")
            })
            .catch((error) => {
                console.log(error)
            })
    }
    {/* remarque: 
            1- J'utilise taskForm ici au lieu de mettre le formulaire en brut  
            2- Si je mets onSubmit= ()=>onSubmit, la validation ne marche pas */}

    return (
        <TaskForm onSubmit={onSubmit} initialValues={initialValues} show={state.showUpdateTaskComponent} closeCallback={state.setShowUpdatetaskComponent} title="modifier la tâche"></TaskForm>
    )
}

export default UpdateTask
