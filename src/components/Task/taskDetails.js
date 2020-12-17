import React from 'react'
import { useParams } from 'react-router-dom'
import { useFetch } from '../../shared/useFetch';

function TaskDetails() {

    const { id } = useParams();


    const [taskData] = useFetch(`http://localhost:3000/task/${id}`);

    // ! Si les useFetch n'a pas fini son traitement, on affiche ça le temps qu'il finisse    
    if (!taskData) {
        return (
            <div> Loading...</div>
        )
    }


    const { libelle, description } = taskData.task
    return (
        <div>
            <h3>Libelle : {libelle}  </h3>
            <h4> Description : {description} </h4>

        </div>
    )
}

export default TaskDetails
