export const ScoreRange = {
  A: 32,
  B: 16,
  C: 8,
  D: 4,
  E: 1
}

const speedBonusScore = bonus => {
  if (bonus < 60) return 0

  const strechts = [
    { goal: 120, score: ScoreRange.A },
    { goal: 100, score: ScoreRange.B },
    { goal: 85, score: ScoreRange.C },
    { goal: 70, score: ScoreRange.D },
    { goal: 60, score: ScoreRange.E }
  ]

  return bonusScore(strechts, bonus)
}

const protectionBonusScore = bonus => {
  if (bonus < 30000) return 0

  const strechts = [
    { goal: 45000, score: ScoreRange.B },
    { goal: 40000, score: ScoreRange.C },
    { goal: 35000, score: ScoreRange.D },
    { goal: 30000, score: ScoreRange.E }
  ]

  return bonusScore(strechts, bonus)
}

const healthBonusScore = bonus => {
  if (bonus < 7000) return 0

  const strechts = [
    { goal: 10500, score: ScoreRange.B },
    { goal: 9000, score: ScoreRange.C },
    { goal: 8000, score: ScoreRange.D },
    { goal: 7000, score: ScoreRange.E }
  ]

  return bonusScore(strechts, bonus)
}

const physicalDamageBonusScore = bonus => {
  if (bonus < 710) return 0

  const strechts = [
    { goal: 1066, score: ScoreRange.B },
    { goal: 950, score: ScoreRange.C },
    { goal: 830, score: ScoreRange.D },
    { goal: 710, score: ScoreRange.E }
  ]

  return bonusScore(strechts, bonus)
}

const specialDamageBonusScore = bonus => {
  if (bonus < 2345) return 0

  const strechts = [
    { goal: 3515, score: ScoreRange.B },
    { goal: 3125, score: ScoreRange.C },
    { goal: 2735, score: ScoreRange.D },
    { goal: 2345, score: ScoreRange.E }
  ]

  return bonusScore(strechts, bonus)
}

const bonusScore = (strechts, bonus) => {
  return strechts
    .filter(range => range.goal <= bonus)
    .map(range => range.score)
    .reduce(
      (carry, score) => score > carry ? score : carry,
      0
    )
}

export default {
  speedBonusScore,
  protectionBonusScore,
  healthBonusScore,
  physicalDamageBonusScore,
  specialDamageBonusScore,
  bonusScore
}
