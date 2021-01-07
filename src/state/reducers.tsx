import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import { History } from 'history'

import reddits from './reddits/redditsReducer'

const createRootReducer = (history: History) =>
  combineReducers({
    router: connectRouter(history),
    reddits,
  })
export default createRootReducer
