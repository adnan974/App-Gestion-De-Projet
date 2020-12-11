import React from 'react'


function UserList(props) {


    return (
        <div className="row">
            <div className="col-6">
                <li className="list-group-item">
                    <img src="../../" className="rounded" />

                    <h6>{props.nom}{" "}{props.prenom}</h6>
                </li>
            </div>

        </div>

    )
}

export default UserList
