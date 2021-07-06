import React, { useEffect, useState } from "react";
import ProjectCard from "../components/Project/projectCard"
import { BoostrapRow } from "../components/bootstrapRow";
import { useFetch } from "../shared/useFetch";
import AddProject from "../components/Project/addProject";
import { BASE_URL } from "../constants";



// TAG:[CRUD]
// TUTO: comment le crud a été mis en place
//     remarques:
//        - Concernant les projets et les tâches, on a un formulaire communs pour l'ajout et la modification
//          (voir le formulaire projectForm pour plus de détails )
//              
const ProjectMenu = () => {

    //// TAG:[CRUD]
    // remarque: ici j'utile useState. L'état me permettra de gérer l'affichage ou non de la page modale
    //           liée à l'ajout dun projet
    const [showAddProjectComponent, setShowAddProjectComponent] = useState(false)


    //// TAG:[CRUD]
    // remarque: useFectch apelle une api pour récupérer les projets de l'utilisateur
    const [projectData, setProjectData] = useFetch(`${BASE_URL}/user/project`)

    //Tag : [buildLayout]
    // Cette fonction va construire les balises ou seront stockés les projets.
    // On aura des balises du type : 
    // <div className = "row">
    //      <projet 1></projet 1>
    //      <projet 2></projet 2>
    //      <projet 3></projet 3>
    // </div>
    // <div className = "row">
    //      <projet 1></projet 4>
    //      <projet 2></projet 5>
    //      <projet 3></projet 6>
    // </div>
    //          .......
    //          .....
    //          ...
    // A FAIRE: rendre cette partie générique 

    //// TAG:[CRUD]
    // Cette est appelée après qu'un projet est delete. Cette 
    // fonction met à jour le tableau qui contient les données du projet. Grâce à ca le projet supprimé est aussi
    // supprimée de l'interface côté client
    const updateProjectAfterRemove = async (id) => {
        let projectDataUpdated = await projectData.filter(el => el.id != id)

        await setProjectData(projectDataUpdated)

    }



    const buildProjectLayout = () => {


        let projectCardArray = [];
        let rowOfProjectCardArray = [];

        projectData.map((project, index) => {
            console.log("projectData")
            console.log(projectData)

            //// TAG:[CRUD]
            // Remarques:
            //           - on transmet la prop updateAfterRemove pour la déclenchée après le delete d'un projet
            //           - 

            //  A FAIRE : ici je fais du prop drilling. les props dans project card vont être transmise à un autre composant
            //            Le props drilling ne pose pas pb sur un petit nombre de composant. Mais est-ce que là c'est une
            //            bonne pratique ?
            projectCardArray.push(<ProjectCard id={project.id} title={project.titre} description={project.description} projectState={project.etatProjet} projectTags={project.tagProjet} closeEvent={setShowAddProjectComponent} updateProjectAfterRemove={updateProjectAfterRemove} updateProjectAfterUpdate={setProjectData} projectCurrentData={projectData} />)
            if ((index + 1) % 3 === 0) {
                // rq: on utilise un child propd ici
                rowOfProjectCardArray.push(<BoostrapRow>{projectCardArray}</BoostrapRow>)
                projectCardArray = []
            }
        })

        return [rowOfProjectCardArray, projectCardArray];
    }
    return (
        <div>
            <button className="btn btn-primary" onClick={() => setShowAddProjectComponent(true)} >Ajouter</button>

            {/* on affiche les projets uniquement si projectData != null */}
            {projectData &&

                <BoostrapRow>{buildProjectLayout()}</BoostrapRow>}

            {/*Tag: [CRUD] : remarques :
                - Ce composant est afficher losqe l'utilisateur veut ajouter un projet. Sinon il est invisible */}
            {/* - On transmet la prop closeEvent, pour permettre a la page modal de MAJ l'affichage du composant  */}
            {showAddProjectComponent && <AddProject openState={showAddProjectComponent} closeEvent={setShowAddProjectComponent} updateProjectAfterAdd={setProjectData} projectCurrentData={projectData} />}
        </div >
    )

}

export default ProjectMenu;