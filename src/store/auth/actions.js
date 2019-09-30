import auth from '@/services/auth'
// import * as api from '@/services/api'
import { types as mutations } from './mutations'

export const types = {
  currentSession: 'currentSession',
  login: 'login',
  logout: 'logout',
  completeNewPassword: 'completeNewPassword'
}

const currentSession = ({ commit }) => {
  return auth.currentSession()
    .then(
      user => {
        commit(mutations.ADD_USER, { user })
        return user
      }
    )
    .catch(
      () => commit(mutations.ADD_USER, { user: null })
    )
}

const login = ({ dispatch }, { username, password }) => {
  return auth.signIn(username, password)
    .then(
      user => {
        if (user.challengeName) return user
        return dispatch(types.currentSession)
      }
    )
}

const logout = ({ commit }) => {
  return auth.signOut()
    .then(
      user => {
        commit(mutations.ADD_USER, { user: null })
      }
    )
}

const completeNewPassword = ({ dispatch }, { user, password }) => {
  return auth.completeNewPassword(user, password)
    .then(
      () => dispatch(types.currentSession)
    )
}

export default {
  currentSession,
  login,
  logout,
  completeNewPassword
}
