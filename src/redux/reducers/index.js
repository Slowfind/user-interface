import { combineReducers } from 'redux'
import users from '../reducers/users'
import posts from '../reducers/posts'

const rootReducer = combineReducers({ users, posts })

export default rootReducer
