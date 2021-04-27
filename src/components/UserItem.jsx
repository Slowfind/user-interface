import React from 'react'
import { Link } from 'react-router-dom'

import user from '../assets/img/user.svg'

function UserItem({ username, img, id }) {
    return (
        <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
            <Link to={`/user/${id}`} className="user">
                <img className="img-responsive" src={user || img} alt="User" />
                <div className="user__name text-center mt-2">{username}</div>
            </Link>
        </div>
    )
}

export default UserItem
