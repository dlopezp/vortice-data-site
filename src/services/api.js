import axios from 'axios'

const BASE_URL = 'https://zvl7f4pov2.execute-api.eu-west-1.amazonaws.com/dev'
// const BASE_URL = 'http://localhost:3000'

export const guild = guildId => {
  return axios.get(`/guild-${guildId}.json`)
    .then(response => response.data)
}

export const characters = () => {
  return axios.get(`/characters.json`)
    .then(response => response.data)
}

export const units = () => {
  return axios.get(`${BASE_URL}/units`)
    .then(response => response.data)
}

export const ships = () => {
  return axios.get(`/ships.json`)
    .then(response => response.data)
}

export const statsBase = () => {
  return axios.get(`/stats.json`)
    .then(response => response.data)
}

export const communityGuilds = () => {
  return axios.get(`${BASE_URL}/guilds`)
    .then(response => response.data)
}

export const metas = () => {
  return axios.get(`${BASE_URL}/metas`)
    .then(response => response.data)
}

export const setMetas = metas => {
  return axios.put(`${BASE_URL}/metas`, { metas })
}

export const strProvenSquads = () => {
  return axios.get(`${BASE_URL}/strProvenSquads`)
    .then(response => response.data)
}

export const setStrProvenSquads = strProvenSquads => {
  return axios.put(`${BASE_URL}/strProvenSquads`, { strProvenSquads })
}

export const users = () => {
  return axios.get(`${BASE_URL}/users`)
    .then(response => response.data)
    .then(users => {
      return users.map(
        user => ({
          id: user.username,
          username: user.username,
          email: user.type,
          roles: JSON.parse(user.role)
        })
      )
    })
}

export const registerUser = user => {
  return axios.post(`${BASE_URL}/users`, { ...user, role: JSON.stringify(user.roles) })
}

export const previewGuild = async leaderAllyCode => {
  const response = await axios.get(`${BASE_URL}/guild-preview/${leaderAllyCode}`)
  return response.data
}

export const registerGuild = async guild => {
  await axios.post(`${BASE_URL}/guilds`, guild)
}

export const deleteGuild = guildId => {
  return axios.delete(`${BASE_URL}/guilds/${guildId}`)
}
