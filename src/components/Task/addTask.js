import React, { useContext } from 'react'

import Axios from 'axios';
import TaskForm from './taskForm';
import { AddOperationContext } from '../../pages/project';



function AddTask(props) {

    const state = useContext(AddOperationContext)

    const initialValues = {
        libelle: "",
        description: "",
        projet: {
            id: props.projectId,
        }
    }




    const onSubmit = (values) => {

        Axios.post("http://localhost:3000/task/create", { task: values })
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
        <TaskForm onSubmit={onSubmit} initialValues={initialValues} show={state.showAddTaskComponent} closeCallback={state.setShowAddtaskComponent} title="ajouter une tâche"></TaskForm>
    )
}

export default AddTask

