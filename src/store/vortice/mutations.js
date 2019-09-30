import Vue from 'vue'

// const tbRequirementsMap = {
//   HOTHREBELSCOUT: 6,
//   HOTHREBELSOLDIER: 5,
//   HOTHHAN: 5,
//   COLONELSTARCK: 5,
//   VEERS: 5,
//   SNOWTROOPER: 5,
//   CAPITALCHIMAERA: 5
// }

// const geonosisRequirements = [
//   // P1
//   {
//     stars: 6,
//     units: [ 'POGGLETHELESSER', 'SUNFAC', 'GEONOSIANSOLDIER' ]
//   },
//   {
//     stars: 6,
//     gp: 16500,
//     units: [ 'NUTEGUNRAY', 'B1BATTLEDROIDV2', 'B2SUPERBATTLEDROID', 'DROIDEKA' ]
//   },
//   // P2
//   {
//     stars: 6,
//     units: [ 'CAPITALSTARDESTROYER' ]
//   },
//   {
//     stars: 6,
//     gp: 16500,
//     units: [ 'COUNTDOOKU', 'ASAJVENTRESS' ]
//   },
//   {
//     stars: 6,
//     gp: 16500,
//     units: [ 'POGGLETHELESSER', 'SUNFAC', 'GEONOSIANSOLDIER', 'GEONOSIANSPY', 'GEONOSIANBROODALPHA' ]
//   },
//   // P3
//   {
//     stars: 7,
//     units: [ 'GEONOSIANSTARFIGHTER1', 'GEONOSIANSTARFIGHTER2', 'GEONOSIANSTARFIGHTER3' ]
//   },
//   {
//     stars: 7,
//     tag: 'affiliation_separatist_droid',
//     count: 5
//   },
//   {
//     stars: 7,
//     gp: 16500,
//     requirements: [
//       { units: [ 'GEONOSIANBROODALPHA' ] },
//       { tag: 'species_geonosian', count: 4 }
//     ]
//   },
//   // P4
//   {
//     stars: 7,
//     gp: 16500,
//     requirements: [
//       { units: 'COUNTDOOKU' },
//       { tag: 'affiliation_separatist' }
//     ]
//   },
//   {
//     stars: 7,
//     gp: 16500,
//     requirements: [
//       { units: 'WATTAMBOR' },
//       { tag: 'affiliation_separatist' }
//     ]
//   }
// ]

export const types = {
  setRootGuild: 'setRootGuild',
  setGuild: 'setGuild',
  setUnits: 'setUnits',
  setMetas: 'setMetas',
  removeMeta: 'removeMeta',
  setPlayerMetas: 'setPlayerMetas',
  setStrProvenSquads: 'setStrProvenSquads',
  setUsers: 'setUsers',
  addUser: 'addUser',
  setStatsBase: 'setStatsBase',
  setCommunityGuilds: 'setCommunityGuilds',
  DELETE_GUILD: 'DELETE_GUILD',
  ADD_COMMUNITY_GUILD: 'ADD_COMMUNITY_GUILD'
}

const flatten = list => list.reduce(
  (a, b) => a.concat(Array.isArray(b) ? flatten(b) : b), []
)

const setRootGuild = (state, { guild }) => {
  const normalizedGuild = {
    ...guild,
    players: []
  }

  const guildUnits = normalizedGuild.units
  const platoonRequirements = Object.keys(guildUnits)
    .reduce(
      (carry, guildUnitId) => {
        const unitTotals = guildUnits[guildUnitId]
        const unitsAtSixStars = unitTotals[6] || 0
        const unitsAtSevenStars = unitTotals[7] || 0
        const unitPlatoonsTotal = unitsAtSixStars + unitsAtSevenStars
        if (unitPlatoonsTotal > 9) return carry

        return {
          ...carry,
          [guildUnitId]: { 6: unitsAtSixStars, 7: unitsAtSevenStars }
        }
      },
      {}
    )

  state.platoonRequirements = platoonRequirements
}

const setGuild = (state, { id, guild }) => {
  const guildId = id

  const normalizedGuild = {
    ...guild,
    players: []
  }

  const normalizedPlayers = {}
  const normalizedUnitsPlayers = {}
  const normalizedMetasPlayers = {}
  let normalizedPlatoons = {}

  // if (guildId === VORTICE) {
  //   const guildUnits = normalizedGuild.units
  //   const platoonRequirements = Object.keys(guildUnits)
  //     .reduce(
  //       (carry, guildUnitId) => {
  //         const unitTotals = guildUnits[guildUnitId]
  //         const unitsAtSixStars = unitTotals[6] || 0
  //         const unitsAtSevenStars = unitTotals[7] || 0
  //         const unitPlatoonsTotal = unitsAtSixStars + unitsAtSevenStars
  //         if (unitPlatoonsTotal > 9) return carry

  //         return {
  //           ...carry,
  //           [guildUnitId]: { 6: unitsAtSixStars, 7: unitsAtSevenStars }
  //         }
  //       },
  //       {}
  //     )

  //   state.platoonRequirements = platoonRequirements
  // }

  // const platoonRequirements = state.platoonRequirements

  guild.players.forEach(
    player => {
      normalizedGuild.players.push(player.id)
      normalizedUnitsPlayers[player.id] = {}
      normalizedMetasPlayers[player.id] = {}
      normalizedPlayers[player.id] = {
        ...player,
        hasSwgohGgAccount: 'X',
        // totalBtRequirements: 0,
        totalBtPlattons: 0,
        totalTopCharactersPower: player.charactersGearElevenPower + player.charactersGearTwelvePower + player.charactersGearThirteenPower,
        totalGearElevenCharacters: player.charactersGearElevenTotal,
        totalGearTwelveCharacters: player.charactersGearTwelveTotal,
        totalGearThirteenCharacters: player.charactersGearThirteenTotal,
        // totalGearThirteenCharacters: 0,
        // totalMetaGearElevenCharacters: 0,
        // totalMetaGearTwelveCharacters: 0,
        units: []
      }

      // if (!normalizedPlayers[player.id].totalGearTwelveCharacters) {
      //   debugger
      // }

      player.units.forEach(
        playerUnit => {
          const unitId = playerUnit.id
          const playerId = player.id

          const normalizedPlayer = normalizedPlayers[playerId]
          const normalizedMetasPlayer = normalizedMetasPlayers[playerId]

          normalizedPlayer.units.push(unitId)
          normalizedUnitsPlayers[playerId][unitId] = playerUnit

          const unitPlatoon = normalizedPlatoons[unitId] || { 1: [], 2: [], 3: [], 4: [], 5: [], 6: [], 7: [] }
          unitPlatoon[playerUnit.stars].push(playerId)
          normalizedPlatoons = {
            ...normalizedPlatoons,
            ...{ [unitId]: unitPlatoon }
          }

          // const tbRequirement = tbRequirementsMap[unitId]
          // if (tbRequirement && playerUnit.stars >= tbRequirement) {
          //   normalizedPlayer.totalBtRequirements++
          // }

          // const tbPlatoon = platoonRequirements[unitId]
          // if (tbPlatoon && playerUnit.stars > 5) {
          //   normalizedPlayer.totalBtPlattons++
          // }

          if (playerUnit.gear > 10) {
            // normalizedPlayer.totalTopCharactersPower += playerUnit.power
            const isMeta = !!state.metas[unitId]

            if (isMeta) {
              normalizedMetasPlayer[unitId] = playerUnit.gear
            }

            // if (playerUnit.gear === 11) {
            //   normalizedPlayer.totalGearElevenCharacters++
            //   // if (isMeta) normalizedPlayer.totalMetaGearElevenCharacters++
            // } else if (playerUnit.gear === 12) {
            //   normalizedPlayer.totalGearTwelveCharacters++
            //   // if (isMeta) normalizedPlayer.totalMetaGearTwelveCharacters++
            // } else if (playerUnit.gear === 13) {
            //   // normalizedPlayer.totalGearThirteenCharacters++
            //   normalizedPlayer.totalGearTwelveCharacters++
            //   // if (isMeta) normalizedPlayer.totalMetaGearTwelveCharacters++
            //   // if (isMeta) normalizedPlayer.totalMetaGearThirteenCharacters++
            // }
          }
        }
      )
    }
  )

  Vue.set(state.guilds, guildId, { ...state.guilds[guildId], ...normalizedGuild })
  Vue.set(state.platoons, guildId, normalizedPlatoons)
  Vue.set(state.players, guildId, normalizedPlayers)
  Vue.set(state.playerUnits, guildId, normalizedUnitsPlayers)
  state.playerMetas = {
    ...state.playerMetas,
    ...normalizedMetasPlayers
  }
}

const setUnits = (state, { units }) => {
  state.units = units
  // state.units = Object.keysunits
  //   .reduce(
  //     (carry, unit) => {
  //       return {
  //         ...carry,
  //         ...{
  //           [unit.id]: unit
  //         }
  //       }
  //     },
  //     {}
  //   )
}

const setMetas = (state, { metas }) => {
  state.metas = metas
}

const removeMeta = (state, { id }) => {
  const { [id]: toRemove, ...metas } = state.metas
  state.metas = metas
}

const setPlayerMetas = (state, { metas }) => {
  const newPlayerMetas = {}
  Object.keys(state.playerUnits)
    .forEach(
      guildId => {
        Object.keys(state.playerUnits[guildId])
          .forEach(
            playerId => {
              const playerUnits = state.playerUnits[guildId][playerId]
              const playerMetas = Object.keys(playerUnits)
                .reduce(
                  (carry, unitId) => {
                    const unit = playerUnits[unitId]
                    if (!metas[unit.id]) return carry
                    if (unit.gear < 11) return carry

                    return {
                      ...carry,
                      [unit.id]: unit.gear
                    }
                  },
                  {}
                )

              newPlayerMetas[playerId] = playerMetas

              if (playerId === 852958149) {
                debugger
              }
            }
          )
      }
    )

  state.playerMetas = newPlayerMetas
}

const setStrProvenSquads = (state, { strProvenSquads }) => {
  state.strProvenSquads = strProvenSquads
}

const setUsers = (state, { users }) => {
  state.users = users.reduce(
    (carry, user) => ({ ...carry, ...{ [user.username]: user } }),
    {}
  )
}

const addUser = (state, { user }) => {
  state.users = { ...state.users, ...{ [user.username]: user } }
}

const setStatsBase = (state, { stats }) => {
  state.statsBase = stats
}

const setCommunityGuilds = (state, { guilds }) => {
  state.guilds = guilds.reduce(
    (carry, guild) => ({ ...carry, [guild.id]: guild }),
    {}
  )
}

const DELETE_GUILD = (state, { guildId }) => {
  const { [guildId]: guildToRemove, ...guilds } = state.guilds
  state.guilds = guilds

  const { [guildId]: platoonToRemove, ...platoons } = state.platoons
  state.platoons = platoons

  const { [guildId]: playerUnitsToRemove, ...playerUnits } = state.playerUnits
  state.playerUnits = playerUnits

  const { [guildId]: playersToRemove, ...players } = state.players
  state.players = players
}

const ADD_COMMUNITY_GUILD = (state, { guild }) => {
  state.guilds = { ...state.guilds, [guild.id]: guild }
}

export default {
  setRootGuild,
  setGuild,
  setUnits,
  removeMeta,
  setPlayerMetas,
  setMetas,
  setStrProvenSquads,
  setUsers,
  addUser,
  setStatsBase,
  setCommunityGuilds,
  DELETE_GUILD,
  ADD_COMMUNITY_GUILD
}
