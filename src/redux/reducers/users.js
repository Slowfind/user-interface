const initialState = {
    items: [],
    isLoaded: false,
}

const users = (state = initialState, action) => {
    switch (action.type) {
        case 'USERS:SET_USERS':
            return {
                ...state,
                items: action.payload,
                isLoaded: true,
            }
        case 'USERS:SET_LOADED':
            return {
                ...state,
                isLoaded: action.payload,
            }
        case 'USERS:ADD_USER': {
            state.items.push(action.payload)
            console.log(state.items, 'state')
            return {
                ...state,
            }
        }
        case 'USERS:EDIT_USER': {
            let user = {}
            const editUser = state.items.map((item) => {
                if (action.payload.id === item.id)
                    return Object.assign(user, item, action.payload)
                return item
            })
            return {
                ...state,
                items: editUser,
            }
        }
        default:
            return state
    }
}

export default users
