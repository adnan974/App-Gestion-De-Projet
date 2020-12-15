import Axios from 'axios'
import React, { useContext } from 'react'
import { AuthContext } from '../../App'
import ProjectForm from './projectForm'
import { PROJECT_STATE_TERMINE, PROJECT_STATE_EN_COURS } from "../../constants"
import { useFetch } from '../../shared/useFetch'


function AddProject(props) {

    const state = useContext(AuthContext)

    const initialValues = {
        titre: "",
        description: "",
        utilisateurCreation: {
            id: state.state.user.id
        },
        etatProjet: PROJECT_STATE_EN_COURS

    }

    const onSubmit = (values) => {
        Axios.post("http://localhost:3000/project/create", { project: values })
            .then(async () => {
                console.log("values :")
                console.log(values)
                props.updateProjectAfterAdd([...props.projectCurrentData, values])
                props.closeEvent()
            })
    }
    return (
        <div>
            <ProjectForm initialValues={initialValues} onSubmit={onSubmit} title="Nouveau Projet" show={props.openState} closeCallback={props.closeEvent} />
        </div>
    )
}

export default AddProject
