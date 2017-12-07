import { combineReducers } from 'redux'
import appData from './dataReducer'
import userAuth from './userAuthReducer'

const rootReducer = combineReducers({
    appData,
    userAuth
})

export default rootReducer
