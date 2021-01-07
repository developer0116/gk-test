import * as types from './redditsActionTypes'
import produce from 'immer'

const initialState = {
  error: '',
  list: [],
  hasMore: '',
  isRunning: false,
}
export default produce((state, action) => {
  switch (action.type) {
    case types.FETCH_REDDITS_REQUEST:
      state.error = ''
      state.isRunning = action.payload.init
      break
    case types.FETCH_REDDITS_SUCCESS:
      state.error = ''
      state.list = action.payload.init
        ? (state.list = action.payload.children)
        : [...state.list, ...action.payload.children]
      state.hasMore = action.payload.after
      state.isRunning = false
      break
    case types.FETCH_REDDITS_FAILURE:
      state.error = action.payload
      state.isRunning = false
      break
    case types.COMMENTS_NEW_REQUEST:
      state.isRunning = true
      state.error = ''
      state.list = []
      break
    case types.COMMENTS_NEW_SUCCESS:
      state.isRunning = false
      state.error = ''
      state.list = action.payload
      break
    case types.COMMENTS_NEW_FAILURE:
      state.list = []
      state.isRunning = false
      state.error = action.payload
      break

    default:
      break
  }
}, initialState)
