import { combineReducers } from 'redux'
import PollsReducer from './polls'
import ResultReducer from './result'


const rootReducer = combineReducers({
    polls:PollsReducer,
    result:ResultReducer


})

export default rootReducer
