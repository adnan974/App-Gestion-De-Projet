import Axios from 'axios';
import React, { useState } from 'react'
import { BASE_URL,URL_ADD_TAG_TO_A_PROJECT, URL_DELETE_TASK_TAG, URL_FETCH_PROJECT_TAGS, URL_FETCH_TASK_TAGS, URL_UPDATE_PROJECT_TAG } from '../../constants';
import { useFetch } from '../../shared/useFetch'

// Tuto 
// Tag:[tag systeme type notion]
function TagList(props) {

    console.log("for : " + props.for)
    let urlForFetch = props.for == "project" ? `${BASE_URL}/projecttag` : `${BASE_URL}/tasktag`;
    let urlForDelete = props.for == "project" ? `${BASE_URL}/projecttag/delete` : `${BASE_URL}/tasktag/delete`;

    const [tagsData, setTagsData] = useFetch(urlForFetch);
    const [showUpdate, setShowUpdate] = useState(false);
    const [updatedTag, setUpdatedTag] = useState();

    if (!tagsData) {
        return (
            <div> Loading... </div>
        )
    }


    const checkIfTagIsInSelectedTags = (tag) => {
        for (let i = 0; i < props.selectedTagState.selectedTag.length; i++) {
            console.log("id : " + props.selectedTagState.selectedTag[i].id)
            if (props.selectedTagState.selectedTag[i].id === tag.id) {
                return true;
            }
        }
        return false

    }

    // A FAIRE: gestion des erreurs
    const handleAdd = (tag) => {
        // Requete Axios
        Axios.post(URL_ADD_TAG_TO_A_PROJECT, { tagId: tag.id, projectId: props.projectId })
            .then(res => {
                console.log("succes")
            })


        if (checkIfTagIsInSelectedTags(tag) === false) {
            let updatedSelectedTag = props.selectedTagState.selectedTag
            updatedSelectedTag.push(tag)
            props.selectedTagState.setSelectedTag(updatedSelectedTag)
            props.setShowTagList(false)
        }



    }

    // A Faire: gestio des erreurs
    const handleDelete = (tag) => {
        // requete pour delete le tag dans le serveur
        Axios.delete(urlForDelete + `${tag.id}`)
            .then(res => {
                console.log("succes")
            })

        // update les selected data si necessaire
        if (checkIfTagIsInSelectedTags) {
            let updatedSelectedTag = props.selectedTagState.selectedTag.filter(aTag => aTag.id != tag.id)
            props.selectedTagState.setSelectedTag(updatedSelectedTag)
        }

        // delete le tag côté client
        let key = Object.keys(tagsData)[0]
        let updatedTagsData = tagsData[key].filter(aTag => aTag.id != tag.id)

        // Remarque : les crochets permettent d'ajouter une varable en tant que clé
        setTagsData({ [key]: updatedTagsData })
        console.log(tagsData)




    }

    //  A FAIRE: gestion erreur
    const handleUpdate = async () => {

        Axios.patch(URL_UPDATE_PROJECT_TAG, { projectTag: updatedTag[0] })
            .then(res => {
                console.log("succes")
            })

        if (checkIfTagIsInSelectedTags) {
            let updatedSelectedTag = await props.selectedTagState.selectedTag.map(obj => updatedTag.find(o => o.id === obj.id) || obj);
            props.selectedTagState.setSelectedTag(updatedSelectedTag)
        }

        let key = Object.keys(tagsData)[0];
        let updatedTagsData = await tagsData[key].map(obj => updatedTag.find(o => o.id === obj.id) || obj);
        setTagsData({ [key]: updatedTagsData });
        setShowUpdate(false);

        console.log(updatedTag)



    }

    const handleChange = (tag, e) => {
        const { name, value } = e.target
        tag[name] = value
        setUpdatedTag([tag])
    }




    return (
        <ul className="list-group ">
            {tagsData && tagsData[Object.keys(tagsData)[0]].map((tag) => {
                return (
                    <li key={tag.id} onClick={() => handleAdd(tag)} className="list-group-item p-1 d-flex justify-content-between align-items-center" >
                        {showUpdate ? <input type="text" name="libelle" defaultValue={tag.libelle} onChange={(e) => handleChange(tag, e)} onBlur={() => handleUpdate(tag)} /> : tag.libelle}
                        <span>
                            <div className="dropdown">
                                <button className="btn btn-link btn-sm dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">

                                </button>
                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <a className="dropdown-item" href="#" onClick={() => setShowUpdate(true)}>Modifier</a>
                                    <a className="dropdown-item" href="#" onClick={() => handleDelete(tag)}>Supprimer</a>
                                </div>
                            </div>
                        </span>
                    </li>
                )


            })}
        </ul>
    )
}

export default TagList
