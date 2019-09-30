const tbRequirementsMap = {
  HOTHREBELSCOUT: 5,
  HOTHREBELSOLDIER: 6,
  HOTHHAN: 5,
  COLONELSTARCK: 5,
  VEERS: 5,
  CAPITALCHIMAERA: 5
}

const metaCharactersMap = {
  GRANDADMIRALTHRAWN: true,
  DARTHNIHILUS: true,
  EMPERORPALPATINE: true,
  DARTHSION: true,
  VADER: true,
  GENERALKENOBI: true,
  R2D2_LEGENDARY: true,
  DARTHTRAYA: true,
  COMMANDERLUKESKYWALKER: true,
  REYJEDITRAINING: true,
  BB8: true,
  GRANDMASTERYODA: true,
  BASTILASHAN: true,
  SITHTROOPER: true,
  EZRABRIDGERS3: true,
  HANSOLO: true,
  HERMITYODA: true,
  ENFYSNEST: true,
  MOTHERTALZIN: true,
  GRANDMOFFTARKIN: true,
  OLDBENKENOBI: true,
  ASAJVENTRESS: true,
  DAKA: true,
  WAMPA: true,
  NIGHTSISTERZOMBIE: true,
  CT7567: true
}

export default (guild, characters, ships) => {
  const guildName = guild.data.name
  const roster = []
  const gear = []

  guild.players.forEach(
    player => {
      const playerData = {
        name: player.data.name,
        guild: guildName,
        allyCode: player.data.ally_code,
        hasSwgohGgAccount: 'X',
        totalPG: player.data.galactic_power,
        charactersPG: player.data.character_galactic_power,
        topCharactersPG: 0,
        topCharactersTotal: 0,
        topCharactersPercent: 0,
        zetas: 0,
        vorticeScore: 0
      }

      player.units.forEach(
        unit => {
          const isCharacter = unit.data.url.indexOf('/characters/') !== -1
          const unitId = unit.data.base_id
          const unitData = {
            id: `${playerData.allyCode}_${unitId}`,
            unitId,
            name: playerData.name,
            guild: guildName,
            unitName: isCharacter ? characters[unitId].name : ships[unitId].name,
            stars: unit.data.rarity,
            level: unit.data.level,
            gear: unit.data.gear_level,
            power: unit.data.power,
            zetas: unit.data.zeta_abilities.length
          }

          if (unitData.gear > 10) {
            const isMeta = metaCharactersMap[unitId]
            playerData.topCharactersPG += unitData.power
            playerData.topCharactersTotal++
            playerData.vorticeScore += 2
            if (isMeta) playerData.vorticeScore += 5

            if (unitData.gear > 11) {
              playerData.vorticeScore += 8
              if (isMeta) playerData.vorticeScore += 15
            }
          }

          playerData.zetas += unitData.zetas

          const starsRequired = tbRequirementsMap[unitId]
          if (starsRequired && unitData.stars >= starsRequired) {
            playerData.vorticeScore += 20
          }

          // playerData.vorticeScore += platoonsScore

          roster.push(unitData)
        }
      )

      playerData.topCharactersPercent = (playerData.topCharactersPG * 100 / playerData.totalPG).toFixed(2)
      playerData.vorticeScore += Math.floor(playerData.topCharactersPG / 10000)

      gear.push(playerData)
    }
  )

  return {
    roster,
    gear
  }
}
