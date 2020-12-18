import Axios from 'axios'
import React from 'react'
import ProjectForm from './projectForm'

// TAG: [CRUD]
// A FAIRE: Ajout des états projets
function UpdateProject(props) {

    // TAG: [CRUD]
    // InitialeValue sera trasmit au projectForm, comme ça il sait que il est en mode modif
    const initialValues = {
        id: props.projectData.id,
        titre: props.projectData.titre,
        description: props.projectData.description,
        etatProjet: props.projectData.etatProjet.id,
        tagProjet: props.projectData.tagProjet



    }




    // TAG: [CRUD]
    // Cette fonction sera transmise au projectForm, pour faire un submit lié à l'update
    const onSubmit = (values) => {
        Axios.patch("http://localhost:3000/project/update", { project: values })
            .then(async () => {
                const updatedProject = [values]
                const updatedProjectsData = await props.projectCurrentData.map(obj => updatedProject.find(o => o.id === obj.id) || obj)


                props.updateProjectAfterUpdate([...updatedProjectsData])
                props.closeEvent()
            })

    }
    return (
        <div>
            {/* TAG: [CRUD]*/}
            {/* On transmet le onSubmit personnalisé, les valeurs initiales personnalisées, l'état d'affichage et de séaffichage du composant*/}
            <ProjectForm initialValues={initialValues} onSubmit={onSubmit} title="Modifier Projet" show={props.openState} closeCallback={props.closeEvent} />
        </div>
    )
}

export default UpdateProject
