import * as redditsActions from './redditsActions'
import * as redditsReducers from './redditsReducer'
import * as redditsSagas from './redditsSagas'

export default {
  ...redditsActions,
  ...redditsReducers,
  ...redditsSagas,
}
