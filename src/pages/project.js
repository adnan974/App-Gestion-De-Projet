import React, { useEffect, useState } from "react";
import ProjectCard from "../components/projectCard"
import axios from 'axios';
import { BoostrapRow } from "../components/bootstrapRow";

//tag: [project fetch api]
// Tuto


// A FAIRE: créer un useFetch générique
const Project = () => {


    // Correspond à l'état qui va s'ocupper de stocker les données de l'api
    const [projectData, setProjectData] = useState(null)

    // Ici, on récupère les données de  l'api
    const getUrlData = async (url) => {
        await axios.get(url)
            .then(async (res) => {
                // On ajoute les données projectData
                await setProjectData(res.data);
            })
    }

    // Ce useEffect se comporte commme la méthode didMount. Cette fonction va l'executer à l'initialisation
    // du composant uniquement.
    useEffect(async () => {
        await getUrlData("http://localhost:3000/project")
    }, [])

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
    const buildProjectLayout = () => {

        let projectCardArray = [];
        let rowOfProjectCardArray = [];

        projectData.map((project, index) => {
            projectCardArray.push(<ProjectCard id={project.id} title={project.titre} description={project.description} />)
            if ((index + 1) % 3 === 0) {
                rowOfProjectCardArray.push(<BoostrapRow>{projectCardArray}</BoostrapRow>)
                projectCardArray = []
            }
        })

        return [rowOfProjectCardArray, projectCardArray];
    }

    return (
        <div>
            {/* on affiche les projets uniquement si projectData != null */}
            {projectData &&
                <BoostrapRow>{buildProjectLayout()}</BoostrapRow>}


        </div >
    )

}

export default Project;