import { Auth } from 'aws-amplify'

export const challenges = {
  NEW_PASSWORD_REQUIRED: 'NEW_PASSWORD_REQUIRED'
}

export const roles = {
  ADMIN: 'Admin',
  OFFICIAL: 'Official'
}

export default {
  currentAuthenticatedUser () {
    return Auth.currentAuthenticatedUser()
  },
  currentSession () {
    return Auth.currentSession()
  },
  currentUser () {
    return Auth.currentUserInfo()
  },
  signIn (email, password) {
    return Auth.signIn(email, password)
  },
  // forgotPassword (email) {
  //   return Auth.forgotPassword(email)
  // },
  // forgotPasswordSubmit (email, code, password) {
  //   return Auth.forgotPasswordSubmit(email, code, password)
  // },
  signOut () {
    return Auth.signOut()
  },
  completeNewPassword (user, password) {
    return Auth.completeNewPassword(user, password)
  }
}
