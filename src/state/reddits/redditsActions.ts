// @flow
/**
 * @module Reddits/RedditsActions
 * @desc Reddits Actions
 */
import * as ActionTypes from './redditsActionTypes'

interface IFetchReddits {
  id: string
  after?: string
  init?: boolean
}
export const fetchReddits = ({ id, after, init }: IFetchReddits) => {
  return {
    type: ActionTypes.FETCH_REDDITS_REQUEST,
    payload: { id, after, init },
  }
}
interface IFetchNewComments {
  url: string
}
export const fetchNewComments = ({ url }: IFetchNewComments) => {
  return {
    type: ActionTypes.COMMENTS_NEW_REQUEST,
    payload: { url },
  }
}
