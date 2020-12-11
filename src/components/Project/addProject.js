import Axios from 'axios'
import React, { useContext } from 'react'
import { AuthContext } from '../../App'
import ProjectForm from './projectForm'

function AddProject(props) {

    const state = useContext(AuthContext)

    const initialValues = {
        titre: "",
        description: "",
        utilisateurCreation: {
            id: state.state.user.id
        }
    }

    const onSubmit = (values) => {
        console.log(values)
        Axios.post("http://localhost:3000/project/create", { project: values })
            .then(() => {

            })
    }
    return (
        <div>
            <ProjectForm initialValues={initialValues} onSubmit={onSubmit} title="Nouveau Projet" show={props.openState} closeCallback={props.closeEvent} />
        </div>
    )
}

export default AddProject
