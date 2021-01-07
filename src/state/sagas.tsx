import { all, fork } from 'redux-saga/effects'

import reddits from './reddits/redditsSagas'

/**
 * rootSaga
 */
export default function* root() {
  yield all([fork(reddits)])
}
