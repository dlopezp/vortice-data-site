export const types = {
  currentUser: 'currentUser',
  username: 'username',
  roles: 'roles'
}

const currentUser = state => state.user

const username = state => state.user && state.user.idToken.payload['cognito:username']

const roles = state => state.user && JSON.parse(state.user.idToken.payload['custom:role'])

export default {
  currentUser,
  username,
  roles
}
