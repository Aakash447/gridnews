import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import logger from 'redux-logger'
import ReduxThunk from 'redux-thunk'
//. DEFAULT in reduxThunk

import rootReducer from './Reducers/index'

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger,ReduxThunk))
)

export default store
