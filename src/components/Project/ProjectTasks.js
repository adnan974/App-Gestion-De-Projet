import Axios from 'axios'
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../App'

function ProjectTask(props) {

    const state = useContext(AuthContext)

    const deleteTask = (id) => {
        props.handleDelete(id)
    }
    return (
        <div key={props.id}>


            <li className="list-group-item">
                <h6>{props.libelle}</h6>
                <div><p>{props.description}</p></div>
                <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                    <button type="button" className="btn btn-primary btn-sm">Modifier</button>
                    <button type="button" className="btn btn-danger btn-sm" onClick={() => { deleteTask(props.id) }}>Supprimer</button>
                </div>


            </li>

        </div>
    )
}

export default ProjectTask

