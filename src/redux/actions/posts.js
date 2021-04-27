import { apiUrl } from '../../api/index'
export const setLoaded = (payload) => ({
    type: 'POSTS:SET_LOADED',
    payload,
})

export const fetchPosts = async (dispatch) => {
    dispatch(setLoaded(false))
    const response = await fetch(`${apiUrl}/posts`)
    const json = await response.json()
    dispatch(setLoaded(true))
    dispatch(setPosts(json))
}
export const setPosts = (items) => ({
    type: 'POSTS:SET_POSTS',
    payload: items,
})
