import React from 'react'
import { BoostrapRow } from '../components/bootstrapRow';
import TaskCard from '../components/taskCard';
import { useFetch } from '../shared/useFetch'

function TaskMenu() {
    const [data] = useFetch("http://localhost:3000/user/task/")

    // A FAIRE: rendre cette partie générique DEJA UTILISEE DANS projectMenu 
    const buildProjectLayout = () => {


        let taskCardArray = [];
        let rowOfTaskCardArray = [];

        data.map((task, index) => {
            taskCardArray.push(<TaskCard id={task.id} libelle={task.libelle} description={task.description} />)
            if ((index + 1) % 3 === 0) {
                // rq: on utilise un child propd ici
                rowOfTaskCardArray.push(<BoostrapRow>{taskCardArray}</BoostrapRow>)
                taskCardArray = []
            }
        })

        return [rowOfTaskCardArray, taskCardArray];
    }
    return (
        <div>
            {data && <BoostrapRow>{buildProjectLayout()}</BoostrapRow>}
        </div>
    )
}

export default TaskMenu
