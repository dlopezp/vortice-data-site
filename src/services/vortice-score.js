const strScore = {
  11: 5,
  12: 15
}

const chexMixCore = {
  COMMANDERLUKESKYWALKER: 7,
  DEATHTROOPER: 7,
  HANSOLO: 7
}

const resistanceFixedUnits = {
  REYJEDITRAINING: 7,
  BB8: 7,
  RESISTANCETROOPER: 7
}

const resistanceOptionalsUnits = {
  VISASMARR: 7,
  REY: 7,
  R2D2_LEGENDARY: 7,
  HERMITYODA: 7
}

const TopCharacterScore = {
  g11: 2,
  g12: 10,
  g13: 18
}

const TopMetaCharacterScore = {
  g11: 5,
  g12: 20,
  g13: 35
}

let debug = false

const unitsFromCollection = (units, collection) => {
  return Object.keys(collection)
    .filter(
      key => {
        const unit = units[key]
        if (!unit) return false
        if (unit.stars < collection[key]) return false

        return true
      }
    )
    .map(
      key => units[key]
    )
}

export const topCharactersTotalScore = player => {
  return 0 +
    player.charactersGearElevenTotal * TopCharacterScore.g11 +
    player.charactersGearTwelveTotal * TopCharacterScore.g12 +
    player.charactersGearThirteenTotal * TopCharacterScore.g13
}

export const chexmixScore = playerUnits => {
  if (debug) {
    debugger
  }
  const chexMixMembers = unitsFromCollection(playerUnits, chexMixCore)
    .filter(
      unit => unit.gear > 10 && unit.stars > 5
    )
  if (chexMixMembers.length !== 3) return 0

  const score = chexMixMembers
    .reduce(
      (carry, unit) => carry + strScore[unit.gear] || 0,
      0
    )

  return score
}

export const resistanceScore = playerUnits => {
  if (debug) {
    debugger
  }
  const fixedUnits = unitsFromCollection(playerUnits, resistanceFixedUnits)
    .filter(
      unit => unit.gear > 10 && unit.stars > 5
    )
  if (fixedUnits.length !== 3) return 0

  const optionalUnits = unitsFromCollection(playerUnits, resistanceOptionalsUnits)
    .filter(
      unit => unit.gear > 10 && unit.stars > 5
    )
  if (optionalUnits.length < 2) return 0

  const fixedUnitsScore = fixedUnits
    .reduce(
      (carry, unit) => carry + strScore[unit.gear],
      0
    )

  const optionalUnitsScore = optionalUnits
    .map(unit => strScore[unit.gear])
    .sort()

  const score = fixedUnitsScore + optionalUnitsScore[0] + optionalUnitsScore[1]
  return score
}

export const strSquadsScore = (player, playerUnits, strProvedSquads) => {
  const score = 0 +
    chexmixScore(playerUnits) +
    resistanceScore(playerUnits) +
    strProvedSquadsScore(player, strProvedSquads)

  return score
}

export const strProvedSquadsScore = (player, strProvedSquads) => {
  const playerSquads = strProvedSquads[player.id]
  if (!playerSquads) return 0

  const score = Object.values(playerSquads)
    .map(
      proven => proven ? 25 : 0
    )
    .reduce(
      (carry, score) => carry + score,
      0
    )

  return score
}

const metasScore = player => {
  const score = 0 +
    player.totalMetaGearElevenCharacters * TopMetaCharacterScore.g11 +
    player.totalMetaGearTwelveCharacters * TopMetaCharacterScore.g12 +
    player.totalMetaGearThirteenCharacters * TopMetaCharacterScore.g13

  return score
}

export default player => {
  const score = 0 +
    parseInt(player.totalTopCharactersPower / 10000, 10) +
    // player.totalBtRequirements * 20 +
    player.totalBtPlattons * 2 +
    topCharactersTotalScore(player) +
    metasScore(player)

  return score
}
