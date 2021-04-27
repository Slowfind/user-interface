import React from 'react'

function PostItem(posts) {
    return (
        <li className="posts__item">
            <h3 className="posts__title">{posts.title}</h3>
            <p>{posts.body}</p>
        </li>
    )
}

export default PostItem
