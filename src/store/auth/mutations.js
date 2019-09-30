export const types = {
  ADD_USER: 'ADD_USER'
}

const ADD_USER = (state, { user }) => {
  state.user = user
}

export default {
  ADD_USER
}
