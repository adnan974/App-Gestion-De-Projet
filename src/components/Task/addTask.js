import React from 'react'

import Axios from 'axios';
import TaskForm from './taskForm';
import { ADD_TASK_TITLE } from '../../constants';
import {BASE_URL} from '../../constants';



function AddTask(props) {



    const initialValues = {
        libelle: "",
        description: "",
        projet: {
            id: props.projectId,
        }
    }




    const onSubmit = (values) => {

        Axios.post(`${BASE_URL}/task/create`, { task: values })
            .then(async (res) => {
                let updatedTaskData = await props.taskStateElement.tasksData
                await updatedTaskData.push(res.data)

                props.taskStateElement.setTasksData({ tasks: updatedTaskData })

            })
            .catch((error) => {
                console.log(error)
            })
    }
    {/* remarque: 
            1- J'utilise taskForm ici au lieu de mettre le formulaire en brut  
            2- Si je mets onSubmit= ()=>onSubmit, la validation ne marche pas */}

    return (
        <TaskForm onSubmit={onSubmit} initialValues={initialValues} show={true} closeCallback={props.setShowAddTaskComponent} title={ADD_TASK_TITLE} ></TaskForm>
    )
}

export default AddTask

