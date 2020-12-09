import React, { useEffect, useState } from "react";
import ProjectCard from "../components/Project/projectCard"
import { BoostrapRow } from "../components/bootstrapRow";
import { useFetch } from "../shared/useFetch";




const ProjectMenu = () => {


    const [ProjectData] = useFetch("http://localhost:3000/user/project")
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
    const buildProjectLayout = () => {


        let projectCardArray = [];
        let rowOfProjectCardArray = [];

        ProjectData.map((project, index) => {
            projectCardArray.push(<ProjectCard id={project.id} title={project.titre} description={project.description} />)
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
            {}
            {/* on affiche les projets uniquement si projectData != null */}
            {ProjectData &&
                <BoostrapRow>{buildProjectLayout()}</BoostrapRow>}
        </div >
    )

}

export default ProjectMenu;