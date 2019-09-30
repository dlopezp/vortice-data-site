import { types as mutations } from './mutations'
import * as api from '@/services/api'
import { Loading } from 'quasar'

export const types = {
  fetchData: 'fetchData',
  // fetchRootGuild: 'fetchRootGuild',
  fetchGuild: 'fetchGuild',
  fetchUnits: 'fetchUnits',
  fetchCharacters: 'fetchCharacters',
  fetchShips: 'fetchShips',
  fetchMetas: 'fetchMetas',
  fetchStrProvenSquads: 'fetchStrProvenSquads',
  fetchUsers: 'fetchUsers',
  fetchStatsBase: 'fetchStatsBase',
  fetchCommunityGuilds: 'fetchCommunityGuilds',

  previewGuild: 'previewGuild',
  createGuild: 'createGuild',
  deleteGuild: 'deleteGuild',

  setMetas: 'setMetas',
  removeMeta: 'removeMeta',

  setStrProvenSquads: 'setStrProvenSquads',

  createUser: 'createUser'
}

const fetchData = ({ dispatch, getters }) => {
  Loading.show()
  return Promise
    .all([
      dispatch(types.fetchUnits),
      dispatch(types.fetchMetas),
      dispatch(types.fetchStrProvenSquads),
      dispatch(types.fetchStatsBase),
      dispatch(types.fetchCommunityGuilds)
    ])
    // .then(
    //   () => {
    //     const rootGuildId = Object.values(getters.guilds)
    //       .find(guild => guild.root)
    //       .id

    //     return dispatch(types.fetchRootGuild, { guildId: rootGuildId })
    //   }
    // )
    .then(
      () => {
        const guildIds = Object.values(getters.guilds)
          // .filter(guild => !guild.root)
          .map(guild => guild.id)

        return Promise
          .all(
            guildIds.map(
              guildId => dispatch(types.fetchGuild, { guildId })
            )
          )
      }
    )
    .then(
      () => dispatch(types.fetchUsers)
    )
    .then(
      () => Loading.hide()
    )
}

// const fetchRootGuild = ({ commit }, { guildId }) => {
//   return api.guild(guildId)
//     .then(
//       guild => {
//         commit(mutations.setRootGuild, { id: guildId, guild })
//         commit(mutations.setGuild, { id: guildId, guild })
//       }
//     )
// }

const fetchGuild = ({ commit }, { guildId }) => {
  return api.guild(guildId)
    .then(
      guild => commit(mutations.setGuild, { id: guildId, guild })
    )
}

const fetchUnits = ({ commit }) => {
  return api.units()
    .then(
      units => commit(mutations.setUnits, { units })
    )
}

const fetchCharacters = ({ commit }) => {
  return api.characters()
    .then(
      characters => commit(mutations.setCharacters, { characters })
    )
}

const fetchShips = ({ commit }) => {
  return api.ships()
    .then(
      ships => commit(mutations.setShips, { ships })
    )
}

const fetchMetas = ({ commit }) => {
  return api.metas()
    .then(
      metas => commit(mutations.setMetas, { metas })
    )
}

const fetchStrProvenSquads = ({ commit }) => {
  return api.strProvenSquads()
    .then(
      strProvenSquads => commit(mutations.setStrProvenSquads, { strProvenSquads })
    )
}

const fetchUsers = ({ commit }) => {
  return api.users()
    .then(
      users => commit(mutations.setUsers, { users })
    )
}

const fetchStatsBase = ({ commit }) => {
  return api.statsBase()
    .then(
      stats => commit(mutations.setStatsBase, { stats })
    )
}

const fetchCommunityGuilds = ({ commit }) => {
  return api.communityGuilds()
    .then(
      guilds => commit(mutations.setCommunityGuilds, { guilds })
    )
}

const previewGuild = async (ctx, { leaderAllyCode }) => {
  const guild = await api.previewGuild(leaderAllyCode)
  return guild
}
const createGuild = async ({ commit }, { guild }) => {
  await api.registerGuild(guild)
  commit(mutations.ADD_COMMUNITY_GUILD, { guild })
}

const deleteGuild = async ({ commit }, { guildId }) => {
  await api.deleteGuild(guildId)
  commit(mutations.DELETE_GUILD, { guildId })
}

const setMetas = ({ commit }, { metas }) => {
  return api.setMetas(metas)
    .then(
      () => commit(mutations.setMetas, { metas })
    )
}

const removeMeta = ({ commit }, { id }) => {
  // TODO: to API
  // TODO: refresh players (define state.playerMetas and state.subscribe ??)
  commit(mutations.removeMeta, { id })
}

const setStrProvenSquads = ({ commit }, { strProvenSquads }) => {
  return api.setStrProvenSquads(strProvenSquads)
    .then(
      () => commit(mutations.setStrProvenSquads, { strProvenSquads })
    )
}

const createUser = ({ commit }, { user }) => {
  return api.registerUser(user)
    .then(
      () => {
        const userToCommit = {
          id: user.username,
          email: user.email,
          roles: user.roles
        }
        commit(mutations.addUser, { user: userToCommit })
      }
    )
}

export default {
  fetchData,
  // fetchRootGuild,
  fetchGuild,
  fetchUnits,
  fetchCharacters,
  fetchShips,
  fetchMetas,
  fetchStrProvenSquads,
  fetchUsers,
  fetchStatsBase,
  fetchCommunityGuilds,

  previewGuild,
  createGuild,
  deleteGuild,

  setMetas,
  removeMeta,

  setStrProvenSquads,

  createUser
}
