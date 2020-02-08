import authReducer from './authreducer'
import projectReducer from './projectReducer'
import {combineReducers} from 'redux'

const rootReducer =combineReducers({
    auth:authReducer,
    projext:projectReducer
});
export default rootReducer