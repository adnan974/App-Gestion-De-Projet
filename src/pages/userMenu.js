import React from 'react'
import UserList from '../components/userList'
import { useFetch } from '../shared/useFetch'

function UserMenu() {

    const [userData] = useFetch("http://localhost:3000/user/");
    console.log(userData);
    return (
        <div className="container-fluid">
            <ul>
                {userData && userData.users.map(user => (

                    <UserList nom={user.nom} prenom={user.prenom} />
                ))}
            </ul>
        </div>
    )
}

export default UserMenu
