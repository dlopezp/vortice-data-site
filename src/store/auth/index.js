import state from './state'
import getters from './getters'
import mutations, { types as mutationsTypes } from './mutations'
import actions from './actions'

export const name = 'auth'

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,

  mutationsTypes
}
