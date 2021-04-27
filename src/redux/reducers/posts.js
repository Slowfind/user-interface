const initialState = {
    items: [],
    isLoaded: false,
}

const posts = (state = initialState, action) => {
    switch (action.type) {
        case 'POSTS:SET_POSTS':
            return {
                ...state,
                items: action.payload,
                isLoaded: true,
            }
        case 'POSTS:SET_LOADED':
            return {
                ...state,
                isLoaded: action.payload,
            }
        default:
            return state
    }
}

export default posts
