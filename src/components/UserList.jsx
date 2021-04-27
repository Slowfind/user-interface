import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

import UserItem from './UserItem'
import { Loading } from './index'

function UserList() {
    const { isLoaded, items } = useSelector(({ users }) => users)

    return (
        <>
            {isLoaded ? (
                <>
                    {items.map((users) => (
                        <UserItem key={users.id} {...users} />
                    ))}
                    <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
                        <Link
                            className="user-add"
                            to={`/user/${items.length + 1}/edit`}
                        >
                            <span></span>
                        </Link>
                    </div>
                </>
            ) : (
                <Loading />
            )}
        </>
    )
}

export default UserList
