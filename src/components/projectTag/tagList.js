import React from 'react'
import { URL_FETCH_PROJECT_TAGS, URL_FETCH_TASK_TAGS } from '../../constants';
import { useFetch } from '../../shared/useFetch'

// Tuto 
// Tag:[tag systeme type notion]
function TagList(props) {


    let urlToUse = props.for ? URL_FETCH_PROJECT_TAGS : URL_FETCH_TASK_TAGS;

    const [tagsData, setTagData] = useFetch(urlToUse)

    if (!tagsData) {
        return (
            <div> Loading... </div>
        )
    }

    const handleClick = (tag) => {
        let updatedSelectedTag = props.selectedTag
        updatedSelectedTag.push(tag)
        props.setSelectedTag(updatedSelectedTag)

        props.setShowTagList(false)

    }


    console.log(props.showTagList)


    return (
        <ul className="list-group ">
            {tagsData && tagsData[Object.keys(tagsData)[0]].map((tag) => {
                return (
                    <li key={tag.id} onClick={() => handleClick(tag)} className="list-group-item p-1 d-flex justify-content-between align-items-center" >
                        {tag.libelle}
                        <span>
                            <div className="dropdown">
                                <button className="btn btn-link btn-sm dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">

                                </button>
                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <a className="dropdown-item" href="#">Modifier</a>
                                    <a className="dropdown-item" href="#">Supprimer</a>
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
