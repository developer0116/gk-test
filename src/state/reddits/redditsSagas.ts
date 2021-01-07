/**
 * @module Reddits
 * @desc Reddits
 */

import { all, put, takeLatest } from 'redux-saga/effects'
import * as actionTypes from './redditsActionTypes'
import axios from 'axios'

const buildURL = (id: string) =>
  id === 'new' || id === 'popular'
    ? `https://api.reddit.com/subreddits/${id}`
    : `https://api.reddit.com/r/${id}`

interface IFetchReddits {
  payload: {
    id: string
    after?: string
    init?: boolean
  }
}
export function* fetchReddits({ payload: { id, after, init } }: IFetchReddits) {
  try {
    const data = yield axios.get(buildURL(id), { params: { after } })
    yield put({
      type: actionTypes.FETCH_REDDITS_SUCCESS,
      payload: { ...data.data.data, init },
    })
  } catch (error) {
    yield put({
      type: actionTypes.FETCH_REDDITS_FAILURE,
      payload: error,
    })
  }
}
interface IFetchNewComments {
  payload: {
    url: string
  }
}
export function* fetchNewComments({ payload: { url } }: IFetchNewComments) {
  try {
    const data = yield axios.get(`https://api.reddit.com${url}`)
    yield put({
      type: actionTypes.COMMENTS_NEW_SUCCESS,
      payload: data.data[1].data.children,
    })
  } catch (error) {
    yield put({
      type: actionTypes.COMMENTS_NEW_FAILURE,
      payload: error,
    })
  }
}
/**
 * Reddits Sagas
 */
export default function* root() {
  yield all([
    takeLatest(actionTypes.FETCH_REDDITS_REQUEST as any, fetchReddits),
    takeLatest(actionTypes.COMMENTS_NEW_REQUEST as any, fetchNewComments),
  ])
}
