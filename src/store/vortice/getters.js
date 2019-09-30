import vorticeScore, {
  // strSquadsScore,
  chexmixScore,
  resistanceScore,
  strProvedSquadsScore
} from '@/services/vortice-score'

import StatsScore, { ScoreRange } from '@/services/stats-score'

const UnitType = {
  SHIP: 2,
  CHARACTER: 1
}

export const types = {
  currentGuildId: 'currentGuildId',
  currentGuildName: 'currentGuildName',

  unit: 'unit',
  unitName: 'unitName',
  playerName: 'playerName',

  guilds: 'guilds',
  units: 'units',
  metas: 'metas',
  platoonRequirements: 'platoonRequirements',
  strProvenSquads: 'strProvenSquads',
  players: 'players',
  users: 'users',

  gearByGuild: 'gearByGuild',
  currentGear: 'currentGear',
  communityGear: 'communityGear',

  rosterByGuild: 'rosterByGuild',
  currentRoster: 'currentRoster',
  communityRoster: 'communityRoster',

  ratingByGuld: 'ratingByGuld',
  currentRating: 'currentRating',
  communityRating: 'communityRating',

  strScoreByGuild: 'strScoreByGuild',
  currentStrScore: 'currentStrScore',
  communityStrScore: 'communityStrScore',

  unitsByGuild: 'unitsByGuild',
  currentUnits: 'currentUnits',

  statsByGuild: 'statsByGuild',
  stats: 'stats',
  statsByChar: 'statsByChar',

  playerStats: 'playerStats',

  statsBase: 'statsBase'
}

const flatten = list => list.reduce(
  (a, b) => a.concat(Array.isArray(b) ? flatten(b) : b), []
)

const currentGuildId = (state, getters, rootState, rootGetters) => {
  return rootState.route.params.guildId
}

const currentGuildName = (state, getters) => {
  const guild = state.guilds[getters.currentGuildId]
  if (!guild) return ''

  return guild.name
}

const unit = state => unitId => state.units[unitId]
const unitName = state => unitId => state.units[unitId].name
const playerName = state => (playerId, guildId) => state.players[guildId][playerId].name

const guilds = state => state.guilds
const units = state => state.units
const metas = state => state.metas
const platoonRequirements = state => state.platoonRequirements
const strProvenSquads = state => state.strProvenSquads
const players = state => state.players
const users = state => state.users

const gearByGuild = state => guildId => {
  if (!Object.keys(state.players).length) return []
  if (!state.players[guildId]) return []

  const guild = state.guilds[guildId]
  const guildName = guild.name
  const guildGear = (guild.allyCodes || []).map(
    playerId => {
      const player = state.players[guildId][playerId]
      if (!player) {
        debugger
      }
      const topCharactersPG = player.charactersGearElevenPower + player.charactersGearTwelvePower // + player.totalGearThirteenCharacters
      const playerMetas = state.playerMetas[player.id] || {}

      player.totalMetaGearElevenCharacters = Object.values(playerMetas).filter(v => v === 11).length
      player.totalMetaGearTwelveCharacters = Object.values(playerMetas).filter(v => v === 12).length
      player.totalMetaGearThirteenCharacters = Object.values(playerMetas).filter(v => v === 13).length

      const playerGear = {
        ...player,
        topCharactersPG,
        topCharactersTotal: player.charactersGearElevenTotal + player.charactersGearTwelveTotal + player.charactersGearThirteenTotal,
        topCharactersPercent: (topCharactersPG * 100 / player.power).toFixed(2),
        zetas: player.zetasTotal,
        guild: guildName,
        vorticeScore: vorticeScore(player) // + strSquadsScore(player, state.playerUnits[guildId][player.id], state.strProvenSquads)
      }

      if (!playerGear.vorticeScore) {
        debugger
      }

      return playerGear
    }
  )

  return guildGear
}

const currentGear = (state, getters) => {
  if (!getters.currentGuildId) return []
  if (!state.guilds[getters.currentGuildId]) return []

  return getters.gearByGuild(getters.currentGuildId)
}

const communityGear = (state, getters) => {
  return flatten(
    Object.keys(state.guilds)
      .map(guildId => getters.gearByGuild(guildId))
  )
}

const rosterByGuild = state => guildId => {
  if (!Object.keys(state.players).length) return []
  if (!state.players[guildId]) return []

  const guild = state.guilds[guildId]
  const guildName = guild.name
  const gameUnits = state.units

  return flatten((guild.allyCodes || [])
    .map(
      playerId => {
        const player = state.players[guildId][playerId]
        return player.units
          .map(
            playerUnitId => {
              const unit = state.playerUnits[guildId][playerId][playerUnitId]
              const gameUnit = gameUnits[unit.id]
              if (!gameUnit) {
                debugger
              }

              return {
                name: player.name,
                unitName: gameUnit.name,
                stars: unit.stars,
                level: unit.level,
                gear: unit.gear,
                power: unit.power,
                zetas: unit.zetas.length,
                guild: guildName
              }
            }
          )
      }
    )
  )
}

const currentRoster = (state, getters) => {
  if (!getters.currentGuildId) return []
  if (!state.playerUnits[getters.currentGuildId]) return []

  return getters.rosterByGuild(getters.currentGuildId)
}

const communityRoster = (state, getters) => {
  return flatten(
    Object.keys(state.guilds)
      .map(guildId => getters.rosterByGuild(guildId))
  )
}

const ratingByGuild = state => guildId => {
  if (!Object.keys(state.players).length) return []
  if (!state.players[guildId]) return []

  const guild = state.guilds[guildId]
  const guildName = guild.name
  const guildRating = (guild.allyCodes || []).map(
    playerId => {
      const player = state.players[guildId][playerId]
      // const playerUnits = state.playerUnits[guildId][player.id]
      const playerMetas = state.playerMetas[player.id] || {}

      player.totalMetaGearElevenCharacters = Object.values(playerMetas).filter(v => v === 11).length
      player.totalMetaGearTwelveCharacters = Object.values(playerMetas).filter(v => v === 12).length
      player.totalMetaGearThirteenCharacters = Object.values(playerMetas).filter(v => v === 13).length

      const totalTopCharactersPower = parseInt(player.totalTopCharactersPower / 1000, 10)
      const totalTopCharacters = player.charactersGearElevenTotal + player.charactersGearTwelveTotal + player.charactersGearThirteenTotal
      // const totalMetaTopCharacters = player.totalMetaGearElevenCharacters + player.totalMetaGearTwelveCharacters// + player.totalMetaGearThirteenCharacters
      // const strScore = strSquadsScore(player, playerUnits, state.strProvenSquads)
      const strScore = 0
      const totalScore = vorticeScore(player) + strScore

      if (!totalScore) {
        debugger
      }

      const playerRating = {
        ...player,
        totalTopCharactersPower,
        totalTopCharacters,
        // totalMetaTopCharacters,
        strScore,
        totalScore,
        guild: guildName
      }

      return playerRating
    }
  )

  return guildRating
}

const currentRating = (state, getters) => {
  if (!getters.currentGuildId) return []
  if (!state.guilds[getters.currentGuildId]) return []

  return getters.ratingByGuild(getters.currentGuildId)
}

const communityRating = (state, getters) => {
  return flatten(
    Object.keys(state.guilds)
      .map(guildId => getters.ratingByGuild(guildId))
  )
}

const strScoreByGuild = state => guildId => {
  if (!Object.keys(state.players).length) return []
  if (!state.players[guildId]) return []

  const guild = state.guilds[guildId]
  const guildName = guild.name
  const guildStrScore = (guild.allyCodes || []).map(
    playerId => {
      const player = state.players[guildId][playerId]
      const playerUnits = state.playerUnits[guildId][player.id]

      const playerChexmixScore = chexmixScore(playerUnits)
      const playerResistanceScore = resistanceScore(playerUnits)
      const playerStrProvedSquadsScore = strProvedSquadsScore(player, state.strProvenSquads)

      const playerStrScore = {
        ...player,
        guild: guildName,
        chexmixScore: playerChexmixScore,
        resistanceScore: playerResistanceScore,
        strProvedSquadsScore: playerStrProvedSquadsScore,
        total: playerChexmixScore + playerResistanceScore + playerStrProvedSquadsScore
      }

      return playerStrScore
    }

  )

  return guildStrScore
}

const currentStrScore = (state, getters) => {
  if (!getters.currentGuildId) return []
  if (!state.guilds[getters.currentGuildId]) return []

  return getters.strScoreByGuild(getters.currentGuildId)
}

const communityStrScore = (state, getters) => {
  return flatten(
    Object.keys(state.guilds)
      .map(guildId => getters.strScoreByGuild(guildId))
  )
}

const unitsByGuild = (state, getters) => guildId => {
  return Object.keys(state.platoons[guildId] || {})
    .map(
      unitId => ({
        ...state.units[unitId],
        ...state.platoons[guildId][unitId]
      })
    )
}

const currentUnits = (state, getters) => {
  if (!getters.currentGuildId) return []
  if (!state.guilds[getters.currentGuildId]) return []

  return getters.unitsByGuild(getters.currentGuildId)
}

const statsByGuild = (state, getters) => guildId => {
  if (!Object.keys(state.players).length) return []
  if (!state.players[guildId]) return []

  const guild = state.guilds[guildId]
  const guildName = guild.name
  const gameUnits = state.units

  return flatten((guild.allyCodes || [])
    .map(
      playerId => {
        const player = state.players[guildId][playerId]

        return player.units
          .filter(playerUnitId => gameUnits[playerUnitId].type === UnitType.CHARACTER)
          .map(
            playerUnitId => {
              const unit = state.playerUnits[guildId][playerId][playerUnitId]
              return {
                guild: guildName,
                name: player.name,
                unitId: unit.id,
                unit: gameUnits[unit.id].name,
                role: gameUnits[unit.id].role,
                level: unit.level,
                gear: unit.gear,
                pg: unit.power,
                zetas: unit.zetas.length,
                ...unit.stats
              }
            }
          )
      }
    )
  )
}

const stats = (state, getters) => {
  return flatten(
    Object.keys(state.guilds)
      .map(guildId => getters.statsByGuild(guildId))
  )
}

const statsByChar = (state, getters) => {
  const statsUnits = getters.stats

  return statsUnits
    .map(
      unitStat => {
        const unitBaseStat = unitStat.gear === 13 ? getters.statsBase.g13[unitStat.unitId] : getters.statsBase.g12plus5[unitStat.unitId]
        const {
          speed: speedBase,
          health: healthBase,
          protection: protectionBase,
          specialDamage: specialDamageBase,
          physicalDamage: physicalDamageBase
        } = unitBaseStat

        const healthIncrement = unitStat.health - healthBase
        const speedIncrement = unitStat.speed - speedBase
        const protectionIncrement = unitStat.protection - protectionBase
        const specialDamageIncrement = unitStat.specialDamage - specialDamageBase
        const physicalDamageIncrement = unitStat.physicalDamage - physicalDamageBase

        const healthBonus = StatsScore.healthBonusScore(healthIncrement)
        const speedBonus = StatsScore.speedBonusScore(speedIncrement)
        const protectionBonus = StatsScore.protectionBonusScore(protectionIncrement)
        const specialDamageBonus = StatsScore.specialDamageBonusScore(specialDamageIncrement)
        const physicalDamageBonus = StatsScore.physicalDamageBonusScore(physicalDamageIncrement)
        // debugger
        const score = 0 +
          healthBonus +
          speedBonus +
          protectionBonus +
          Math.max(
            specialDamageBonus,
            physicalDamageBonus
          )

        // if (score > 0) {
        //   debugger
        // }

        return {
          ...unitStat,

          speedBase,
          speedIncrement,
          speedBonus,

          healthBase,
          healthIncrement,
          healthBonus,

          protectionBase,
          protectionIncrement,
          protectionBonus,

          specialDamageBase,
          specialDamageIncrement,
          specialDamageBonus,

          physicalDamageBase,
          physicalDamageIncrement,
          physicalDamageBonus,

          score
        }
      }
    )
    .filter(unit => unit.score)
}

const playerStats = (state, getters) => {
  const unitsStats = getters.statsByChar
  console.log(unitsStats.length)

  const playersStats = {}
  const emptyUnit = {
    score: 0,
    healthB: 0,
    healthC: 0,
    healthD: 0,
    healthE: 0,
    speedA: 0,
    speedB: 0,
    speedC: 0,
    speedD: 0,
    speedE: 0,
    protectionB: 0,
    protectionC: 0,
    protectionD: 0,
    protectionE: 0,
    damageB: 0,
    damageC: 0,
    damageD: 0,
    damageE: 0
  }

  const healthToIncrement = {
    [ScoreRange.B]: 'healthB',
    [ScoreRange.C]: 'healthC',
    [ScoreRange.D]: 'healthD',
    [ScoreRange.E]: 'healthE'
  }

  const speedToIncrement = {
    [ScoreRange.A]: 'speedA',
    [ScoreRange.B]: 'speedB',
    [ScoreRange.C]: 'speedC',
    [ScoreRange.D]: 'speedD',
    [ScoreRange.E]: 'speedE'
  }

  const protectionToIncrement = {
    [ScoreRange.B]: 'protectionB',
    [ScoreRange.C]: 'protectionC',
    [ScoreRange.D]: 'protectionD',
    [ScoreRange.E]: 'protectionE'
  }

  const damageToIncrement = {
    [ScoreRange.B]: 'damageB',
    [ScoreRange.C]: 'damageC',
    [ScoreRange.D]: 'damageD',
    [ScoreRange.E]: 'damageE'
  }

  unitsStats.forEach(
    unitStats => {
      const playerStats = playersStats[unitStats.name] || { name: unitStats.name, guild: unitStats.guild, ...emptyUnit }
      playerStats.score += unitStats.score

      const healthStat = healthToIncrement[unitStats.healthBonus]
      healthStat && playerStats[healthStat]++

      const speedStat = speedToIncrement[unitStats.speedBonus]
      speedStat && playerStats[speedStat]++

      const protectionStat = protectionToIncrement[unitStats.protectionBonus]
      protectionStat && playerStats[protectionStat]++

      const damageBonus = Math.max(unitStats.physicalDamageBonus, unitStats.specialDamageBonus)
      const damageStat = damageToIncrement[damageBonus]
      damageStat && playerStats[damageStat]++

      playersStats[unitStats.name] = playerStats
    }
  )

  return Object.values(playersStats)
}

const statsBase = state => {
  return state.statsBase
}

export default {
  currentGuildId,
  currentGuildName,

  unit,
  unitName,
  playerName,

  guilds,
  units,
  metas,
  platoonRequirements,
  strProvenSquads,
  players,
  users,

  gearByGuild,
  communityGear,
  currentGear,

  ratingByGuild,
  communityRating,
  currentRating,

  rosterByGuild,
  communityRoster,
  currentRoster,

  strScoreByGuild,
  currentStrScore,
  communityStrScore,

  unitsByGuild,
  currentUnits,

  statsByGuild,
  stats,

  statsByChar,

  playerStats,

  statsBase
}
