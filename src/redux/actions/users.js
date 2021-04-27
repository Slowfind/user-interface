export const setLoaded = (payload) => ({
    type: 'USERS:SET_LOADED',
    payload,
})

export const fetchUsers = async (dispatch) => {
    dispatch(setLoaded(false))
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const json = await response.json()
    setTimeout(() => {
        dispatch(setLoaded(true))
        dispatch(setUsers(json))
    }, 1000)
}
export const setUsers = (items) => ({
    type: 'USERS:SET_USERS',
    payload: items,
})

export const addUser = (user) => ({
    type: 'USERS:ADD_USER',
    payload: user,
})
export const editUser = (user) => ({
    type: 'USERS:EDIT_USER',
    payload: user,
})
