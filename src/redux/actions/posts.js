export const setLoaded = (payload) => ({
    type: 'POSTS:SET_LOADED',
    payload,
})

export const fetchPosts = async (dispatch) => {
    dispatch(setLoaded(false))
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const json = await response.json()
    dispatch(setLoaded(true))
    dispatch(setPosts(json))
}
export const setPosts = (items) => ({
    type: 'POSTS:SET_POSTS',
    payload: items,
})
