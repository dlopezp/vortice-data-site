import state from './state'
import getters from './getters'
import mutations, { types as mutationsTypes } from './mutations'
import actions from './actions'

export const name = 'vortice'

export default {
  namespaced: true,
  name,

  state,
  getters,
  mutations,
  actions,

  mutationsTypes
}
