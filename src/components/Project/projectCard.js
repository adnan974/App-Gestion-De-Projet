import Axios from 'axios'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import UpdateProject from './updateProject';

// TAG:[CRUD]

const ProjectCard = (props) => {

    // TAG:[CRUD]
    // remarque: ici j'utile useState. L'état me permettra de gérer l'affichage ou non de la page modale
    //           liée à l'update dun projet
    const [showProjectUpdateComponent, setShowProjectUpdateComponent] = useState(false);

    const deleteProject = (id) => {
        Axios.delete(`http://localhost:3000/project/delete/${id}`)
            .then(() => {
                props.updateProjectAfterRemove(id)
            })
    }


    // TAG:[CRUD]
    // remarque: updateState permet de mettre d'afficher la page modale pour update un projet
    const updateProject = () => {
        setShowProjectUpdateComponent(true);
    }


    return (
        <div className="col" key={props.id}>


            <div className="card w-3 p-1" >
                {/* <img className="card-img-top" src="..." alt="Card image cap" /> */}
                <div className="card-body">
                    <h5 className="card-title" >{props.title}</h5>
                    <p className="card-text">{props.description} </p>
                    <Link to={`project/${props.id}`}>
                        <button className="btn btn-primary">Accerder au projet</button>
                    </Link>
                    <button className="btn btn-primary" onClick={() => updateProject(props.id)}>Modifier</button>
                    <button className="btn btn-danger" onClick={() => deleteProject(props.id)}>Supprimer</button>



                </div>
            </div>
            {/*Tag: [CRUD] : remarques :
                - Ce composant est afficher losqe l'utilisateur veut modifier un projet. Sinon il est invisible */}
            {/* - On transmet la prop closeEvent, pour permettre a la page modal de MAJ l'affichage du composant  */}
            {showProjectUpdateComponent && <UpdateProject updateProjectAfterUpdate={props.updateProjectAfterUpdate} projectCurrentData={props.projectCurrentData} projectData={{ id: props.id, titre: props.title, description: props.description, etatProjet: props.projectState }} openState={showProjectUpdateComponent} closeEvent={setShowProjectUpdateComponent} />}
        </div >
    )
}

export default ProjectCard
