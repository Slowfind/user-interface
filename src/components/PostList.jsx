import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { fetchPosts } from '../redux/actions/posts'
import PostItem from './PostItem'

function PostList({ userId }) {
    const dispatch = useDispatch()
    const posts = useSelector(({ posts }) => posts)

    React.useEffect(() => {
        return dispatch(fetchPosts)
    }, [dispatch])

    const userPost = posts.items.filter((item) => +userId === item.userId)
    return (
        <ul className="posts">
            {userPost &&
                userPost.map((post) => <PostItem {...post} key={post.id} />)}
        </ul>
    )
}

export default PostList
